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

    // @ts-ignore
    setAuth((prev: any) => ({ ...prev, roles: [1000], accessToken: response.data.accessToken }))

    return response.data.accessToken
  }

  return refresh
}
