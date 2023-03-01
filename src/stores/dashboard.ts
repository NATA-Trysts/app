import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Space = {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  timeStamp: string
}

export type TestSpace = {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  timeStamp: string
  author: string
  category: string
}

// 1 for home, 2 for files, and 3 for libraries
export type DashboardOption = 1 | 2 | 3

type DashboardState = {
  isExpanded: boolean
  setIsExpanded: (isExpanded: boolean) => void

  mySpaces: Space[]
  setMySpaces: (mySpaces: Space[]) => void

  exploreSpaces: Space[]
  setExploreSpaces: (exploreSpaces: Space[]) => void

  selectedSpacePreview: Space | null
  setSelectedSpacePreview: (selectedSpacePreview: Space | null) => void

  dashboardOption: DashboardOption
  setDashboardOption: (dashboardOption: DashboardOption) => void

  librarySpaces: Map<string, TestSpace[]>
  setLibrarySpaces: (librarySpacesFromApi: TestSpace[]) => void
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

      selectedSpacePreview: null,
      setSelectedSpacePreview: (selectedSpacePreview: Space | null) => set(() => ({ selectedSpacePreview })),

      dashboardOption: 1,
      setDashboardOption: (dashboardOption: DashboardOption) => set(() => ({ dashboardOption })),

      librarySpaces: new Map(),
      setLibrarySpaces: (librarySpacesFromApi: TestSpace[]) => {
        const librarySpaces = new Map<string, TestSpace[]>()

        librarySpacesFromApi.forEach((space) => {
          if (librarySpaces.has(space.category)) {
            const spaces = librarySpaces.get(space.category)

            if (spaces) {
              spaces.push(space)
              librarySpaces.set(space.category, spaces)
            }
          } else {
            librarySpaces.set(space.category, [space])
          }
        })
        set(() => ({ librarySpaces }))
      },
    }),
    {
      name: 'dashboard-storage',
    },
  ),
)
