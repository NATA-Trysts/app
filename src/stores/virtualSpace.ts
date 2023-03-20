import produce from 'immer'
import { create } from 'zustand'

import { CustomColor } from '@/components/Commons'

type UltilityType = 'chat' | 'member' | 'info' | 'setting' | null

export type Message = {
  id: string
  sessionId: string
  name: string
  avatar: string
  timestamp: number
  content: string
}

type ChatMessage = {
  [id: string]: Message
}

type VirtualSpaceState = {
  spaceId: string
  setSpaceId: (spaceId: string) => void
  selectedUltility: UltilityType
  setSelectedUltility: (selectedUltility: UltilityType) => void
  customColor: CustomColor
  setCustomColor: (customColor: CustomColor) => void
  canControlCharacter: boolean
  setCanControlCharacter: (canControlCharacter: boolean) => void
  chatMessages: ChatMessage
  addMessage: (message: Message) => void

  authToken: string
  setAuthToken: (authToken: string) => void

  isEditAvatar: boolean
  setIsEditAvatar: (isEditAvatar: boolean) => void

  isFirstTime: boolean
  setIsFirstTime: (isFirstTime: boolean) => void
}

export const useVirtualSpaceStore = create<VirtualSpaceState>()((set) => ({
  spaceId: '123',
  setSpaceId: (spaceId) => set(() => ({ spaceId })),

  selectedUltility: null,
  setSelectedUltility: (selectedUltility) => set(() => ({ selectedUltility })),

  customColor: 'blue',
  setCustomColor: (customColor: CustomColor) => set(() => ({ customColor })),

  canControlCharacter: true,
  setCanControlCharacter: (canControlCharacter: boolean) => set(() => ({ canControlCharacter })),

  authToken: '',
  setAuthToken: (authToken: string) => set({ authToken }),

  isEditAvatar: true,
  setIsEditAvatar: (isEditAvatar: boolean) => set({ isEditAvatar }),

  isFirstTime: true,
  setIsFirstTime: (isFirstTime: boolean) => set({ isFirstTime }),

  chatMessages: {},
  addMessage: (message) =>
    set(
      produce((state: VirtualSpaceState) => {
        state.chatMessages[message.id] = message
      }),
    ),
}))
