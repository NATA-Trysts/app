import { isEmpty } from 'lodash-es'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { useAnonymous } from '@/hooks'
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

const AuthContext = createContext<AuthContextType>({
  auth: { user: {}, roles: [] },
  setAuth: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { anonymous } = useAnonymous()
  const [auth, setAuth] = useState<Auth>({ user: anonymous, roles: [] })

  useEffect(() => {
    if (isEmpty(auth.accessToken)) setAuth({ ...auth, user: anonymous })
  }, [anonymous, auth.accessToken])

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext
