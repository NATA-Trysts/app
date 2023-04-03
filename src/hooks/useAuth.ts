import { useContext } from 'react'

import AuthContext, { Auth } from '@/context/AuthProvider'
import { useUserStore } from '@/stores'

export const useAuth = () => {
  const authContext = useContext(AuthContext)
  const userStore = useUserStore((state) => state)

  const setAuth = (auth: Auth) => {
    userStore.setUser(auth.user)
    authContext.setAccessToken(auth.accessToken)
    authContext.setRoles(auth.roles)
  }

  return { ...authContext, setAuth }
}
