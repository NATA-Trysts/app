import { createContext, ReactNode, useState } from 'react'

import { AuthUser } from '@/models/AuthUser'
import { Anonymous } from '@/stores'

export type Auth = {
  user: AuthUser | Anonymous
  roles: number[]
  accessToken?: string
}

export type AuthContextType = {
  auth: Auth
  setAuth: (auth: Auth) => void
}

const AuthContext = createContext<AuthContextType>({ auth: { user: {}, roles: [] }, setAuth: () => {} })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth>({ user: {}, roles: [] })

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext
