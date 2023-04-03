import produce from 'immer'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Anonymous = {
  _id?: string
  username?: string
  handler?: string
  avatar?: string
}

type AnonymousState = {
  anonymous: Anonymous
  setAnonymous: (anonymous: Anonymous) => void
  setName: (name: string) => void
  resetAnonymous: () => void
}

export const useAnonymousStore = create<AnonymousState>()(
  persist(
    (set) => ({
      anonymous: {},
      setAnonymous: (anonymous: Anonymous) =>
        set(() => ({
          anonymous,
        })),
      setName: (name: string) =>
        set(
          produce((state: AnonymousState) => {
            state.anonymous.username = name
          }),
        ),
      resetAnonymous: () => set({ anonymous: {} }),
    }),
    {
      name: 'anonymous-storage',
    },
  ),
)
