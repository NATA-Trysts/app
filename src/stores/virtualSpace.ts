import { create } from 'zustand'

import { CustomColor } from '@/components/Commons'

type UltilityType = 'chat' | 'member' | 'info' | 'setting' | null

type VirtualSpaceState = {
  spaceId: string
  setSpaceId: (spaceId: string) => void
  selectedUltility: UltilityType
  setSelectedUltility: (selectedUltility: UltilityType) => void
  customColor: CustomColor
  setCustomColor: (customColor: CustomColor) => void
  canControlCharacter: boolean
  setCanControlCharacter: (canControlCharacter: boolean) => void

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
}))
