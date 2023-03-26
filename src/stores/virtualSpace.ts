import produce from 'immer'
import { create } from 'zustand'

import { CustomColor } from '@/components/Commons'

type UltilityType = 'chat' | 'member' | 'setting' | null

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
  quality: string
  setQuality: (quality: string) => void
  backgroundMusic: boolean
  setBackgroundMusic: (backgroundMusic: boolean) => void
  videoLayout: string
  setVideoLayout: (videoLayout: string) => void

  authToken: string
  setAuthToken: (authToken: string) => void

  isEditAvatar: boolean
  setIsEditAvatar: (isEditAvatar: boolean) => void

  isFirstTime: boolean
  setIsFirstTime: (isFirstTime: boolean) => void

  interactable: boolean
  setInteractable: (interactable: boolean) => void

  intersectId: string | null
  setIntersectId: (intersectId: string) => void
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

  quality: 'medium',
  setQuality: (quality: string) => set(() => ({ quality })),

  backgroundMusic: true,
  setBackgroundMusic: (backgroundMusic: boolean) => set(() => ({ backgroundMusic })),

  videoLayout: 'grid',
  setVideoLayout: (videoLayout: string) => set(() => ({ videoLayout })),

  isEditAvatar: false,
  setIsEditAvatar: (isEditAvatar: boolean) => set({ isEditAvatar, selectedUltility: null }),

  isFirstTime: true,
  setIsFirstTime: (isFirstTime: boolean) => set({ isFirstTime }),

  chatMessages: {},
  addMessage: (message) =>
    set(
      produce((state: VirtualSpaceState) => {
        state.chatMessages[message.id] = message
      }),
    ),

  interactable: false,
  setInteractable: (interactable: boolean) => set({ interactable }),

  intersectId: null,
  setIntersectId: (intersectId: string) => set({ intersectId }),
}))
