import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type EmailInputStatusType = 'empty' | 'valid' | 'invalid' | 'errorPending'

type LoginState = {
  email: string
  setEmail: (email: string) => void

  emailInputStatus: EmailInputStatusType
  setEmailInputStatus: (status: EmailInputStatusType) => void

  step: number
  setStep: (step: number) => void

  fullHash: string
  setFullHash: (fullHash: string) => void
}

type UserState = {
  user: {
    id: string
    email: string
    username: string
    handler: string
  }
  setUser: (user: { id: string; email: string; username: string; handler: string }) => void

  accessToken: string
  setAccessToken: (accessToken: string) => void

  refreshToken: string
  setRefreshToken: (refreshToken: string) => void
}

export const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      email: '',
      setEmail: (email: string) => set(() => ({ email })),

      emailInputStatus: 'empty',
      setEmailInputStatus: (status: EmailInputStatusType) => set(() => ({ emailInputStatus: status })),

      step: 1,
      setStep: (step: number) => set(() => ({ step })),

      fullHash: '',
      setFullHash: (fullHash: string) => set(() => ({ fullHash })),
    }),
    {
      name: 'login-storage',
    },
  ),
)

export const useUserStore = create<UserState>()((set) => ({
  user: {
    id: '',
    email: '',
    username: '',
    handler: '',
  },
  setUser: (user: { id: string; email: string; username: string; handler: string }) => set(() => ({ user })),

  accessToken: '',
  setAccessToken: (accessToken: string) => set(() => ({ accessToken })),

  refreshToken: '',
  setRefreshToken: (refreshToken: string) => set(() => ({ refreshToken })),
}))
