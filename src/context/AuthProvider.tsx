import { createContext, ReactNode, useState } from 'react'

export type Auth = {
  user: any
  roles: number[]
  accessToken: string
  refreshToken: string
}

export type AuthContextType = {
  auth: Auth | null
  setAuth: (auth: Auth | null) => void
}

const AuthContext = createContext<AuthContextType>({ auth: null, setAuth: () => {} })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth | null>(null)

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext
