import { create } from 'zustand'

export type CategoryType = 'chair' | 'desk' | 'decoration' | 'layout' | 'cabinet' | 'plant' | 'bath'

export type ModelResolution = {
  low: string
  medium: string
}

export type SubCategoryItem = {
  uuid: string
  name: string
  description: string
  thumbnail: string
  category: CategoryType
  resolutions?: ModelResolution
}

type SpaceInformationType = {
  name: string
  isProtected: boolean
  password: string
  thumbnail: string
  backgroundMusic?: string
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

export type MousePosition = Omit<Vec3, 'y'>

export type SpaceModel = {
  uuid: string // unique
  iframeId?: string
  id: string // use as key
  name: string
  position: ModifierValueType
  rotation: ModifierValueType
  color: string
  roughness: number
  metalness: number
  type: CategoryType // TODO: add more types
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

  models: SpaceModel[]
  setModels: (models: SpaceModel[]) => void
  addModel: (model: SpaceModel) => void
  updateModel: (modelUpdate: SpaceModel) => void
  updateModelByField: (property: string, field: string, value: number) => void
  updateModelColor: (color: string) => void
  updateModelRoughness: (roughness: number) => void
  updateModelMetalness: (metalness: number) => void
  deleteModel: (modelId: string) => void

  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void

  selectedModelId: string | null
  setSelectedModelId: (selectedModelId: string | null) => void

  isInputFocus: boolean
  setIsInputFocus: (isInputFocus: boolean) => void
}

export const useBuilderStore = create<BuilderState>()((set) => ({
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
    ['desk', 0],
    ['decoration', 0],
    ['layout', 0],
    ['cabinet', 0],
    ['plant', 0],
    ['bath', 0],
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
    thumbnail: '',
    backgroundMusic: '',
  },
  setSpaceInformation: (spaceInformation: SpaceInformationType) => set(() => ({ spaceInformation })),

  globalSettings: new Map([
    ['wireframe', { values: [true, false], selected: false }],
    ['grid', { values: [true, false], selected: false }],
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

  models: [],
  setModels: (models: SpaceModel[]) => set(() => ({ models })),
  addModel: (newModel: SpaceModel) =>
    set((state) => ({ models: [...state.models, newModel], selectedModelId: newModel.id })),
  updateModel: (modelUpdate: SpaceModel) =>
    set((state) => ({
      models: state.models.map((model) => (model.id === modelUpdate.id ? { ...model, ...modelUpdate } : model)),
    })),
  updateModelByField: (property: string, field: string, value: number) =>
    set((state) => ({
      models: state.models.map((model) =>
        model.id === state.selectedModelId
          ? { ...model, [property]: { ...model[property as 'position' | 'rotation'], [field]: value } }
          : model,
      ),
    })),
  updateModelColor: (color: string) =>
    set((state) => ({
      models: state.models.map((model) => (model.id === state.selectedModelId ? { ...model, color } : model)),
    })),
  updateModelRoughness: (roughness: number) =>
    set((state) => ({
      models: state.models.map((model) => (model.id === state.selectedModelId ? { ...model, roughness } : model)),
    })),
  updateModelMetalness: (metalness: number) =>
    set((state) => ({
      models: state.models.map((model) => (model.id === state.selectedModelId ? { ...model, metalness } : model)),
    })),
  deleteModel: (modelId: string) =>
    set((state) => ({ models: state.models.filter((model) => model.id !== modelId), selectedModelId: null })),

  isEditing: false,
  setIsEditing: (isEdit) => set(() => ({ isEditing: isEdit })),

  selectedModelId: null,
  setSelectedModelId: (selectedModelId: string | null) => set(() => ({ selectedModelId })),

  isInputFocus: false,
  setIsInputFocus: (isInputFocus: boolean) => set(() => ({ isInputFocus })),
}))
