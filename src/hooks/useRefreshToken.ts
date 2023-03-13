import axios from '@/api/axios'

import { useAuth } from './useAuth'

export const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.get('/refresh', {
      withCredentials: true,
    })

    // @ts-ignore
    setAuth((prev: any) => {
      return { ...prev, roles: response.data.roles, accessToken: response.data.accessToken }
    })

    return response.data.accessToken
  }

  return refresh
}
