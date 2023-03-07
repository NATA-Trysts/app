import axios from '@/api/axios'

import { useAuth } from './useAuth'

export const useLogout = () => {
  const { setAuth } = useAuth()

  const logout = async () => {
    setAuth(null)
    try {
      await axios('/logout', {
        withCredentials: true,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return logout
}
