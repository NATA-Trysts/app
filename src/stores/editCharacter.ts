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

  theme: string
  setTheme: (theme: string) => void

  isInputFocus: boolean
  setIsInputFocus: (isInputFocus: boolean) => void
}

export const useEditCharacterStore = create<EditCharacterState>((set) => ({
  categorySelectedId: 'skin',
  setCategorySelectedId: (id) => set(() => ({ categorySelectedId: id })),

  categorySelectedItemIds: new Map([
    [
      'skin',
      [
        {
          id: 'skin-001',
          itemId: 'skin.001.001',
        },
      ],
    ],
    [
      'hair',
      [
        // {
        //   id: 'hair-001',
        //   itemId: 'hair.001.001',
        // },
      ],
    ],
    [
      'upper',
      [
        // {
        //   id: 'upper-001',
        //   itemId: 'upper.001.001',
        // },
      ],
    ],
    [
      'lower',
      [
        // {
        //   id: 'lower-001',
        //   itemId: 'lower.001.001',
        // },
      ],
    ],
    [
      'shoe',
      [
        // {
        //   id: 'shoe-001',
        //   itemId: 'shoe.001.001',
        // },
      ],
    ],
    [
      'accessory',
      [
        // {
        //   id: 'accessory-001',
        //   itemId: 'accessory.001.001',
        // },
      ],
    ],
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

  theme: '#C771E1',
  setTheme: (theme) => set(() => ({ theme })),

  isInputFocus: false,
  setIsInputFocus: (isInputFocus: boolean) => set(() => ({ isInputFocus })),
}))
