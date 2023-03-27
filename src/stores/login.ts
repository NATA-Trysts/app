import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type EmailInputStatusType = 'empty' | 'valid' | 'invalid' | 'errorPending'

type LoginState = {
  email: string
  setEmail: (email: string) => void

  emailInputStatus: EmailInputStatusType
  setEmailInputStatus: (status: EmailInputStatusType) => void

  fullHash: string
  setFullHash: (fullHash: string) => void
}

type StepState = {
  step: number
  setStep: (step: number) => void
}

export const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      email: '',
      setEmail: (email: string) => set(() => ({ email })),

      emailInputStatus: 'empty',
      setEmailInputStatus: (status: EmailInputStatusType) => set(() => ({ emailInputStatus: status })),

      fullHash: '',
      setFullHash: (fullHash: string) => set(() => ({ fullHash })),
    }),
    {
      name: 'login-storage',
    },
  ),
)

export const useStepStore = create<StepState>()((set) => ({
  step: 1,
  setStep: (step: number) => set(() => ({ step })),
}))
