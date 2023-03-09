import { create } from 'zustand'

type EditCharacterState = {
  categorySelectedId: number
  setCategorySelectedId: (id: number) => void
}

export const useEditCharacterStore = create<EditCharacterState>((set) => ({
  categorySelectedId: 1,
  setCategorySelectedId: (id) => set(() => ({ categorySelectedId: id })),
}))
