import produce from 'immer'
import { create } from 'zustand'

export type User = {
  _id?: string
  name?: string
  handler?: string
  avatar?: string
  email?: string
}

type UserState = {
  user: User
  setUser: (user: User) => void
  setName: (username: string) => void
  setHandler: (handler: string) => void
  setAvatar: (avatar: string) => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: {},
  setUser: (user) =>
    set(() => ({
      user,
    })),
  setName: (name: string) =>
    set(
      produce((state: UserState) => {
        state.user.name = name
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
}))
