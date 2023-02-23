import { create } from 'zustand'

type LoginState = {
  email: string
  setEmail: (email: string) => void

  emailInputStatus: 'empty' | 'valid' | 'invalid'
  setEmailInputStatus: (status: 'empty' | 'valid' | 'invalid') => void
}

export const useLoginStore = create<LoginState>()((set) => ({
  email: '',
  setEmail: (email: string) => set(() => ({ email })),

  emailInputStatus: 'empty',
  setEmailInputStatus: (status: 'empty' | 'valid' | 'invalid') => set(() => ({ emailInputStatus: status })),
}))
