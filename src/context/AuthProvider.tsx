import { isEmpty } from 'lodash-es'
import { createContext, ReactNode, useState } from 'react'

import { User, useUserStore } from '@/stores'

export type Auth = {
  user: User
  roles: number[]
  accessToken?: string
}

export type AuthContextType = {
  auth: Auth
  setUser: (user: User) => void
  setAccessToken: (token?: string) => void
  setRoles: (roles: number[]) => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType>({
  auth: { user: {}, roles: [] },
  setUser: () => {},
  setAccessToken: () => {},
  setRoles: () => {},
  isAuthenticated: false,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser])
  const [accessToken, setAccessToken] = useState<string | undefined>('')
  const [roles, setRoles] = useState<number[]>([])

  const isAuthenticated = !isEmpty(user) && !isEmpty(accessToken)

  return (
    <AuthContext.Provider
      value={{
        auth: { user: user, roles: roles, accessToken: accessToken },
        setAccessToken,
        setUser,
        setRoles,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
