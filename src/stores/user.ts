import produce from 'immer'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type User = {
  _id?: string
  username?: string
  handler?: string
  avatar?: string
  email?: string
}

type UserState = {
  user: User
  setUser: (user: User) => void
  setUsername: (username: string) => void
  setHandler: (handler: string) => void
  setAvatar: (avatar: string) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: { _id: '', username: '', handler: '', avatar: '', email: '' },
      setUser: (user) =>
        set(() => ({
          user,
        })),
      setUsername: (username: string) =>
        set(
          produce((state: UserState) => {
            state.user.username = username
          }),
        ),

      setHandler: (handler: string) =>
        set(
          produce((state: UserState) => {
            state.user.handler = handler
          }),
        ),

      setAvatar: (avatar: string) =>
        set(
          produce((state: UserState) => {
            state.user.avatar = avatar
          }),
        ),
    }),
    { name: 'user-storage' },
  ),
)
