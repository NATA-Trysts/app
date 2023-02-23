import { create } from 'zustand'

type NavigationPanelState = {
  isExpanded: boolean
  setIsExpanded: (isExpanded: boolean) => void
}

export const useNavigationPanelStore = create<NavigationPanelState>((set) => ({
  isExpanded: true,
  setIsExpanded: (isExpanded) => set(() => ({ isExpanded })),
}))
