import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserState = {
  id: string
  setId: (id: string) => void

  username: string
  setUsername: (username: string) => void

  handler: string
  setHandler: (handler: string) => void

  email: string
  setEmail: (email: string) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: '',
      setId: (id: string) => set(() => ({ id })),

      username: '',
      setUsername: (username: string) => set(() => ({ username })),

      handler: '',
      setHandler: (handler: string) => set(() => ({ handler })),

      email: '',
      setEmail: (email: string) => set(() => ({ email })),
    }),
    {
      name: 'user-storage',
    },
  ),
)
