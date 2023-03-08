import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { CustomColor } from '@/components/Commons'

type AppState = {
  customColor: CustomColor
  setCustomColor: (customColor: CustomColor) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      customColor: 'blue',
      setCustomColor: (customColor: CustomColor) => set(() => ({ customColor })),
    }),
    {
      name: 'app-storage',
    },
  ),
)
