import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type DashboardState = {
  isExpanded: boolean
  setIsExpanded: (isExpanded: boolean) => void
}

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      isExpanded: true,
      setIsExpanded: (isExpanded: boolean) => set(() => ({ isExpanded })),
    }),
    {
      name: 'dashboard-storage',
    },
  ),
)
