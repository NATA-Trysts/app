import { create } from 'zustand'

export type EmailInputStatusType = 'empty' | 'valid' | 'invalid' | 'errorPending'

type LoginState = {
  email: string
  setEmail: (email: string) => void

  emailInputStatus: EmailInputStatusType
  setEmailInputStatus: (status: EmailInputStatusType) => void

  step: number
  setStep: (step: number) => void
}

export const useLoginStore = create<LoginState>()((set) => ({
  email: '',
  setEmail: (email: string) => set(() => ({ email })),

  emailInputStatus: 'empty',
  setEmailInputStatus: (status: EmailInputStatusType) => set(() => ({ emailInputStatus: status })),

  step: 1,
  setStep: (step: number) => set(() => ({ step })),
}))
