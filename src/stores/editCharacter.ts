import { create } from 'zustand'

type SubcategoryActiveItem = {
  id: string
  itemId: number
}

type CategorySelectedItemId = Map<number, SubcategoryActiveItem[]>

type EditCharacterState = {
  categorySelectedId: number
  setCategorySelectedId: (id: number) => void

  categorySelectedItemIds: CategorySelectedItemId
  setCategorySelectedItemIds: (categoryId: number, subcategoryId: string, itemId: number) => void
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
}))
