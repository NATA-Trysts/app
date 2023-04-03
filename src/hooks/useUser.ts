import { isEmpty } from 'lodash-es'

import { generateNumberCode } from '@/libs/utils'
import { useUserStore } from '@/stores'

import { useAuth } from './useAuth'
import { useAxiosPrivate } from './useAxiosPrivate'

export const useUser = () => {
  const userStore = useUserStore((state) => state)
  const { isAuthenticated } = useAuth()
  const axiosPrivate = useAxiosPrivate()

  const generateAnonymous = () => {
    if (isEmpty(userStore.user._id) || !userStore.user._id?.startsWith('anonymous')) {
      const name = `Anonymous_${generateNumberCode()}`

      userStore.setUser({
        _id: `anonymous_${generateNumberCode(8)}`,
        username: name,
        handler: `${name}#${generateNumberCode()}`,
        avatar: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      })
    }
  }

  const setUserName = (username: string) => {
    return new Promise<boolean>((resolve, reject) => {
      if (isAuthenticated) {
        axiosPrivate
          .put(`users/name`, { username: username })
          .then((res) => {
            console.log(res)

            if (res.status === 200) {
              userStore.setUsername(username)
              resolve(true)
            } else resolve(false)
          })
          .catch((reason) => reject(reason))
      } else {
        userStore.setUsername(username)
        resolve(true)
      }
    })
  }

  return { user: userStore.user, setUserName, generateAnonymous }
}
