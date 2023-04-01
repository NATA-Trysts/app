import { useContext } from 'react'

import AuthContext from '@/context/AuthProvider'
import { AuthUser } from '@/models/AuthUser'
import { Anonymous } from '@/stores'

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext)

  const isAuthenticated = (user: AuthUser | Anonymous): user is AuthUser => {
    return user !== undefined && !('members' in user)
  }

  return { auth, setAuth, isAuthenticated }
}
