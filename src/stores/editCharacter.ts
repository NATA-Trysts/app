import { create } from 'zustand'

type SubcategoryActiveItem = {
  id: string
  itemId: number
}

export type AnimationType = {
  id: number
  name: string
}

type CategorySelectedItemId = Map<number, SubcategoryActiveItem[]>

type EditCharacterState = {
  categorySelectedId: number
  setCategorySelectedId: (id: number) => void

  categorySelectedItemIds: CategorySelectedItemId
  setCategorySelectedItemIds: (categoryId: number, subcategoryId: string, itemId: number) => void

  tattooSelectedId: number
  setTattooSelectedId: (id: number) => void

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
}

export const useEditCharacterStore = create<EditCharacterState>((set) => ({
  categorySelectedId: 1,
  setCategorySelectedId: (id) => set(() => ({ categorySelectedId: id })),

  categorySelectedItemIds: new Map([
    [1, []],
    [2, []],
    [3, []],
    [4, []],
    [5, []],
    [6, []],
  ]),
  setCategorySelectedItemIds: (categoryId, subcategoryId, itemId) =>
    set((state) => {
      const subcategoryActiveItems = state.categorySelectedItemIds.get(categoryId) || []
      const subcategoryActiveItem = subcategoryActiveItems.find((item) => item.id === subcategoryId)

      if (subcategoryActiveItem) {
        // if the item is already selected, remove it
        // else update the item
        if (subcategoryActiveItem.itemId === itemId) {
          subcategoryActiveItems.splice(subcategoryActiveItems.indexOf(subcategoryActiveItem), 1)
        } else {
          subcategoryActiveItem.itemId = itemId
        }
      } else {
        subcategoryActiveItems.push({ id: subcategoryId, itemId })
      }

      return {
        categorySelectedItemIds: new Map(state.categorySelectedItemIds).set(categoryId, subcategoryActiveItems),
      }
    }),

  tattooSelectedId: -1,
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
}))
