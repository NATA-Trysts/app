import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { CustomColor } from '@/layouts/common'

type AppState = {
  customColor: CustomColor
  setCustomColor: (customColor: CustomColor) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      customColor: 'purple',
      setCustomColor: (customColor: CustomColor) => set(() => ({ customColor })),
    }),
    {
      name: 'app-storage',
    },
  ),
)
