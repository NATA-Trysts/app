import axios from '@/api/axios'

import { useAuth } from './useAuth'

export const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.get('/refresh', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const { _id, username, handler, email, avatar, ...others } = response.data.user

    // @ts-ignore
    setAuth((prev: any) => {
      return {
        ...prev,
        user: { id: _id, name: username, handler: handler, email: email, avatar: avatar, ...others },
        roles: [1000],
        accessToken: response.data.accessToken,
      }
    })

    return response.data.accessToken
  }

  return refresh
}
