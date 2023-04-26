import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// type Author = {
//   _id: string
//   username: string
// }

export type Space = {
  _id: string
  name: string
  thumbnail: string
  latestEdited: number
  // author: Author
  author: string
  category: string
  code: string
  password: string
  hmsRoomId: string
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

  librarySpaces: Map<string, Space[]>
  setLibrarySpaces: (librarySpacesFromApi: Space[]) => void
}

type NavigationState = {
  dashboardOption: DashboardOption
  setDashboardOption: (dashboardOption: DashboardOption) => void
}

type SpacePreviewState = {
  selectedSpacePreview: Space | null
  setSelectedSpacePreview: (selectedSpacePreview: Space | null) => void
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
      setLibrarySpaces: (librarySpacesFromApi: Space[]) => {
        const librarySpaces = new Map<string, Space[]>()

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

export const useNavigationStore = create<NavigationState>((set) => {
  return {
    dashboardOption: 1,
    setDashboardOption: (dashboardOption: DashboardOption) => set(() => ({ dashboardOption })),
  }
})

export const useSpacePreviewStore = create<SpacePreviewState>((set) => {
  return {
    selectedSpacePreview: null,
    setSelectedSpacePreview: (selectedSpacePreview: Space | null) => set(() => ({ selectedSpacePreview })),
  }
})
