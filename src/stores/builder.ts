import { create } from 'zustand'

export type CategoryType = 'Animal' | 'ThreeJS'

export type SubCategoryItem = {
  id: number
  name: string
  description: string
  img: string
  category: CategoryType
}

type BuilderState = {
  selectedCategoryName: CategoryType
  setSelectedCategory: (categoryName: CategoryType) => void

  subCategoryItems: Map<CategoryType, SubCategoryItem[]>
  setSubCategoryItems: (subCategoryItems: Map<CategoryType, SubCategoryItem[]>) => void

  selectedSubCategoryItems: Map<CategoryType, SubCategoryItem>
  setSelectedSubCategoryItems: (selectedSubCategoryItems: Map<CategoryType, SubCategoryItem>) => void
  updateSelectedSubCategoryItems: (category: CategoryType, item: SubCategoryItem) => void

  scrollPosition: Map<CategoryType, number>
  setScrollPosition: (scrollPosition: Map<CategoryType, number>) => void
}

export const useBuilderStore = create<BuilderState>((set) => ({
  selectedCategoryName: 'Animal',
  setSelectedCategory: (categoryName: CategoryType) => set(() => ({ selectedCategoryName: categoryName })),

  subCategoryItems: new Map(),
  setSubCategoryItems: (subCategoryItems: Map<CategoryType, SubCategoryItem[]>) => set(() => ({ subCategoryItems })),

  selectedSubCategoryItems: new Map(),
  setSelectedSubCategoryItems: (selectedSubCategoryItems: Map<CategoryType, SubCategoryItem>) =>
    set(() => ({ selectedSubCategoryItems })),
  updateSelectedSubCategoryItems: (category: CategoryType, item: SubCategoryItem) =>
    set((state) => {
      const newSelectedSubCategoryItems = new Map(state.selectedSubCategoryItems)

      newSelectedSubCategoryItems.set(category, item)

      return { selectedSubCategoryItems: newSelectedSubCategoryItems }
    }),

  scrollPosition: new Map([
    ['Animal', 0],
    ['ThreeJS', 0],
  ]),
  setScrollPosition: (scrollPosition: Map<CategoryType, number>) => set(() => ({ scrollPosition })),
}))
