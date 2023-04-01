import { isEmpty } from 'lodash-es'
import { useEffect } from 'react'

import { generateNumberCode } from '@/libs/utils'
import { useAnonymousStore } from '@/stores'

import { useAuth } from './useAuth'

export const useAnonymous = () => {
  const anonymousStore = useAnonymousStore((state) => state)
  const { setAuth } = useAuth()

  useEffect(() => {
    setAuth({ user: anonymousStore.anonymous, accessToken: undefined, roles: [] })
  }, [anonymousStore.anonymous, setAuth])

  const generateAnonymous = () => {
    if (isEmpty(anonymousStore.anonymous.id)) {
      const name = `Anonymous_${generateNumberCode()}`

      anonymousStore.setAnonymous({
        id: `anonymous_${generateNumberCode(8)}`,
        name: name,
        handler: `${name}#${generateNumberCode()}`,
        avatar: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      })
    }
  }

  return { ...anonymousStore, generateAnonymous }
}
