import { create } from 'zustand'

export type CategoryType = 'Animal' | 'ThreeJS'

export type SubCategoryItem = {
  id: number
  name: string
  description: string
  img: string
  category: CategoryType
}

type SpaceInformationType = {
  name: string
  isProtected: boolean
  password: string
}

type GlobalSettingsType = Map<string, { values: boolean[] | string[]; selected: boolean | string }>

type GlobalBackgroundType = string

export type ModifierValueType = {
  x: number | string
  y: number | string
  z: number | string
}

type ObjectAdjustingType = {
  name: string
  modifiers: {
    name: string
    values: ModifierValueType
    canBeNegative: boolean
  }[]
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

  zoom: number
  setZoom: (zoom: number) => void

  settingOption: 'space' | 'object'
  setSettingOption: (settingOption: 'space' | 'object') => void

  spaceInformation: SpaceInformationType
  setSpaceInformation: (spaceInformation: SpaceInformationType) => void

  globalSettings: GlobalSettingsType
  setGlobalSettings: (globalSettings: GlobalSettingsType) => void

  globalBackground: GlobalBackgroundType
  setGlobalBackground: (globalBackground: GlobalBackgroundType) => void

  objectAdjusting: ObjectAdjustingType
  setObjectAdjusting: (objectAdjusting: ObjectAdjustingType) => void
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

  zoom: 50,
  setZoom: (zoom: number) => set(() => ({ zoom })),

  settingOption: 'object',
  setSettingOption: (settingOption: 'space' | 'object') => set(() => ({ settingOption })),

  spaceInformation: {
    name: '',
    isProtected: false,
    password: '',
  },
  setSpaceInformation: (spaceInformation: SpaceInformationType) => set(() => ({ spaceInformation })),

  globalSettings: new Map([
    ['wireframe', { values: [true, false], selected: false }],
    ['grid', { values: [true, false], selected: true }],
    ['gizmo', { values: ['cube', 'port'], selected: 'cube' }],
  ]),
  setGlobalSettings: (globalSettings: GlobalSettingsType) => set(() => ({ globalSettings })),

  globalBackground: '#D9D9D9',
  setGlobalBackground: (globalBackground: GlobalBackgroundType) => set(() => ({ globalBackground })),

  objectAdjusting: {
    name: 'Computer',
    modifiers: [
      {
        name: 'position',
        values: { x: 0, y: 0, z: 0 },
        canBeNegative: true,
      },
      {
        name: 'rotation',
        values: { x: 0, y: 0, z: 0 },
        canBeNegative: true,
      },
      {
        name: 'scale',
        values: { x: 1, y: 1, z: 1 },
        canBeNegative: false,
      },
    ],
  },
  setObjectAdjusting: (objectAdjusting: ObjectAdjustingType) => set(() => ({ objectAdjusting })),
}))
