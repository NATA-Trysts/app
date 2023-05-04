import { create } from 'zustand'

type Interact = {
  action: () => void
  key: string
}

type InteractState = {
  interact?: Interact
  setInteract: (interact: Interact | undefined) => void
}

export const useInteractStore = create<InteractState>((set) => ({
  interact: undefined,
  setInteract: (interact) => set({ interact }),
}))
