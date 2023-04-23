import { create } from 'zustand'

export type SubcategoryActiveItem = {
  id: string
  itemId: string
}

export type AnimationType = {
  id: number
  name: string
}

export type CategorySelectedItemId = Map<string, SubcategoryActiveItem[]>

type EditCharacterState = {
  categorySelectedId: string
  setCategorySelectedId: (id: string) => void

  categorySelectedItemIds: CategorySelectedItemId
  setCategorySelectedItemIds: (categoryId: string, subcategoryId: string, itemId: string) => void
  setCategorySelectedFromApi: (categorySelectedItemId: CategorySelectedItemId) => void

  tattooSelectedId: string
  setTattooSelectedId: (id: string) => void

  color: string
  setColor: (color: string) => void

  animationColor: {
    colorA: string
    colorB: string
  }
  setAnimationColor: (colorA: string, colorB: string) => void

  animationTypeList: AnimationType[]
  setAnimationTypeList: (animationTypeList: AnimationType[]) => void

  selectedAnimationType: AnimationType
  setSelectedAnimationType: (animationType: AnimationType) => void

  openPricingModal: boolean
  setOpenPricingModal: (openPricingModal: boolean) => void

  theme: string
  setTheme: (theme: string) => void

  isInputFocus: boolean
  setIsInputFocus: (isInputFocus: boolean) => void

  isUpdatingAvatar: boolean
  setIsUpdatingAvatar: (isUpdatingAvatar: boolean) => void
}

export const useEditCharacterStore = create<EditCharacterState>((set) => ({
  categorySelectedId: 'skin',
  setCategorySelectedId: (id) => set(() => ({ categorySelectedId: id })),

  categorySelectedItemIds: new Map([
    ['skin', []],
    ['hair', []],
    ['upper', []],
    ['lower', []],
    ['shoe', []],
    ['accessory', []],
    ['tattoo', []],
  ]),
  setCategorySelectedItemIds: (categoryId, subcategoryId, itemId) =>
    set((state) => {
      const subcategoryActiveItems = state.categorySelectedItemIds.get(categoryId) || []
      const subcategoryActiveItem = subcategoryActiveItems.find((item) => item.id === subcategoryId)

      // create new array to update instead of using above array
      let newSubcategoryActiveItems = null

      if (subcategoryActiveItem) {
        // if the item is already selected, remove it
        // else update the item
        if (subcategoryActiveItem.itemId === itemId) {
          // subcategoryActiveItems.splice(subcategoryActiveItems.indexOf(subcategoryActiveItem), 1)
          newSubcategoryActiveItems = subcategoryActiveItems.filter((item) => item.id !== subcategoryId)
        } else {
          // subcategoryActiveItem.itemId = itemId
          newSubcategoryActiveItems = subcategoryActiveItems.map((item) => {
            if (item.id === subcategoryId) {
              return { id: subcategoryId, itemId }
            }

            return item
          })
        }
      } else {
        // subcategoryActiveItems.push({ id: subcategoryId, itemId })
        newSubcategoryActiveItems = [...subcategoryActiveItems, { id: subcategoryId, itemId }]
      }

      return {
        categorySelectedItemIds: new Map(state.categorySelectedItemIds).set(categoryId, newSubcategoryActiveItems),
      }
    }),
  setCategorySelectedFromApi: (categorySelectedItemId) =>
    set(() => ({ categorySelectedItemIds: categorySelectedItemId })),

  tattooSelectedId: '',
  setTattooSelectedId: (id) => set(() => ({ tattooSelectedId: id })),

  color: '#A67BC2',
  setColor: (color) => set(() => ({ color })),

  animationColor: {
    colorA: '#A67BC2',
    colorB: '#A67BC2',
  },
  setAnimationColor: (colorA, colorB) => set(() => ({ animationColor: { colorA: colorA, colorB: colorB } })),

  animationTypeList: [
    {
      id: 1,
      name: 'Smooth',
    },
    {
      id: 2,
      name: 'Bounce',
    },
    {
      id: 3,
      name: 'Elastic',
    },
    {
      id: 4,
      name: 'Fluid',
    },
  ],
  setAnimationTypeList: (animationTypeList) => set(() => ({ animationTypeList })),

  selectedAnimationType: {
    id: 1,
    name: 'Smooth',
  },
  setSelectedAnimationType: (animationType) => set(() => ({ selectedAnimationType: animationType })),

  openPricingModal: false,
  setOpenPricingModal: (openPricingModal) => set(() => ({ openPricingModal })),

  theme: '#C771E1',
  setTheme: (theme) => set(() => ({ theme })),

  isInputFocus: false,
  setIsInputFocus: (isInputFocus: boolean) => set(() => ({ isInputFocus })),

  isUpdatingAvatar: false,
  setIsUpdatingAvatar: (isUpdatingAvatar: boolean) => set(() => ({ isUpdatingAvatar })),
}))
