import React, { ReactNode } from 'react'
import { create, StoreApi } from 'zustand'

import { useIsomorphicLayoutEffect } from './utils'

type Props = { children: React.ReactNode }

type State = {
  current: Array<React.ReactNode>
  version: number
  set: StoreApi<State>['setState']
}

export default function tunnel() {
  const useStore = create<State>((set) => ({
    current: new Array<ReactNode>(),
    version: 0,
    set,
  }))

  return {
    In: ({ children }: Props) => {
      const set = useStore((state) => state.set)
      const version = useStore((state) => state.version)

      useIsomorphicLayoutEffect(() => {
        set((state) => ({
          version: state.version + 1,
        }))
      }, [])

      useIsomorphicLayoutEffect(() => {
        set(({ current }) => ({
          current: [...current, children],
        }))

        return () =>
          set(({ current }) => ({
            current: current.filter((c) => c !== children),
          }))
      }, [children, version])

      return null
    },

    Out: () => {
      const current = useStore((state) => state.current)

      return <>{current}</>
    },
  }
}
