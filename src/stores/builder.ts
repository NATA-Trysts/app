import { create } from 'zustand'

export type CategoryType = 'chair' | 'table'

export type ModelResolution = {
  low: string
  medium: string
}

export type SubCategoryItem = {
  id: string
  name: string
  description: string
  img: string
  category: CategoryType
  collection: string
  resolutions: ModelResolution
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

export type Vec3 = {
  x: number
  y: number
  z: number
}

type ObjectAdjustingType = {
  name: string
  modifiers: {
    name: string
    values: ModifierValueType
    canBeNegative: boolean
  }[]
}

export type MousePosition = Omit<Vec3, 'y'>

export type SpaceModel = {
  id: string
  position: Vec3
  rotation: Vec3
  scale: Vec3
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
  updateGlobalSettings: (key: string, value: boolean | string) => void

  globalBackground: GlobalBackgroundType
  setGlobalBackground: (globalBackground: GlobalBackgroundType) => void

  objectAdjusting: ObjectAdjustingType
  setObjectAdjusting: (objectAdjusting: ObjectAdjustingType) => void

  models: SpaceModel[]
  addModel: (model: SpaceModel) => void
  // updateModel: (payload: any) => void

  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void

  mousePosition: MousePosition
  updateMousePosition: (mousePosition: MousePosition) => void
}

export const useBuilderStore = create<BuilderState>((set) => ({
  selectedCategoryName: 'chair',
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
    ['chair', 0],
    ['table', 0],
  ]),
  setScrollPosition: (scrollPosition: Map<CategoryType, number>) => set(() => ({ scrollPosition })),

  zoom: 50,
  setZoom: (zoom: number) => set(() => ({ zoom })),

  settingOption: 'space',
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
    ['gizmo', { values: ['cube', 'port'], selected: 'port' }],
  ]),
  setGlobalSettings: (globalSettings: GlobalSettingsType) => set(() => ({ globalSettings })),
  updateGlobalSettings: (key: string, value: boolean | string) =>
    set((state) => {
      const newGlobalSettings = new Map(state.globalSettings)
      const a = newGlobalSettings.get(key)!

      newGlobalSettings.set(key, { ...(newGlobalSettings.get(key) as typeof a), selected: value })

      return { globalSettings: newGlobalSettings }
    }),

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

  models: [],
  addModel: (newModel: SpaceModel) => set((state) => ({ models: [...state.models, newModel] })),
  // updateModel: (payload) =>
  //   set((state) => {
  //     const allModels = [...state.models]

  //     allModels[payload.id].position = payload.position

  //     return allModels
  //   }),

  isEditing: false,
  setIsEditing: (isEdit) => set(() => ({ isEditing: isEdit })),

  mousePosition: { x: 0, z: 0 },
  updateMousePosition: (updatedPosition: MousePosition) => set({ mousePosition: updatedPosition }),
}))

type EditorState = {
  mousePosition: MousePosition
  updateMousePosition: (mousePosition: MousePosition) => void
}

export const useEditorStore = create<EditorState>()((set) => ({
  mousePosition: { x: 0, z: 0 },
  updateMousePosition: (mousePosition: MousePosition) => set(() => ({ mousePosition })),
}))
