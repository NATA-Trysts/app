import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { CustomableTheme, Space } from '@/models/Space'

// 1 for home, 2 for files, and 3 for libraries
export type DashboardOption = 1 | 2 | 3

type DashboardState = {
  isExpanded: boolean
  setIsExpanded: (isExpanded: boolean) => void

  mySpaces: Space[]
  setMySpaces: (mySpaces: Space[]) => void

  exploreSpaces: Space[]
  setExploreSpaces: (exploreSpaces: Space[]) => void

  librarySpaces: Map<CustomableTheme, Space[]>
  setLibrarySpaces: (librarySpacesFromApi: Map<CustomableTheme, Space[]>) => void
}

type NavigationState = {
  dashboardOption: DashboardOption
  setDashboardOption: (dashboardOption: DashboardOption) => void
}

type PreviewCardState = {
  selectedCardPreview: string | null
  setSelectedCardPreview: (selectedCardPreview: string | null) => void
}

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      isExpanded: true,
      setIsExpanded: (isExpanded: boolean) => set(() => ({ isExpanded })),

      mySpaces: [],
      setMySpaces: (mySpaces: Space[]) => set(() => ({ mySpaces })),

      exploreSpaces: [],
      setExploreSpaces: (exploreSpaces: Space[]) => set(() => ({ exploreSpaces })),

      librarySpaces: new Map(),
      setLibrarySpaces: (librarySpaces: Map<CustomableTheme, Space[]>) => {
        set(() => ({ librarySpaces }))
      },
    }),
    {
      name: 'dashboard-storage',
    },
  ),
)

export const useNavigationStore = create<NavigationState>((set) => {
  return {
    dashboardOption: 1,
    setDashboardOption: (dashboardOption: DashboardOption) => set(() => ({ dashboardOption })),
  }
})

export const useSpacePreviewStore = create<PreviewCardState>((set) => {
  return {
    selectedCardPreview: null,
    setSelectedCardPreview: (selectedCardPreview: string | null) => set(() => ({ selectedCardPreview })),
  }
})
