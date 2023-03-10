import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
}

export const useVirtualSpaceStore = create<VirtualSpaceState>()(
  persist(
    (set) => ({
      spaceId: '123',
      setSpaceId: (spaceId) => set(() => ({ spaceId })),

      selectedUltility: 'chat',
      setSelectedUltility: (selectedUltility) => set(() => ({ selectedUltility })),

      customColor: 'blue',
      setCustomColor: (customColor: CustomColor) => set(() => ({ customColor })),

      canControlCharacter: true,
      setCanControlCharacter: (canControlCharacter: boolean) => set(() => ({ canControlCharacter })),

      authToken: '',
      setAuthToken: (authToken: string) => set({ authToken }),
    }),
    {
      name: 'virtual-space-storage',
    },
  ),
)
