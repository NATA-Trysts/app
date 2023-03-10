import { create } from 'zustand'

type PricingState = {
  mode: 'monthly' | 'yearly'
  setMode: (mode: 'monthly' | 'yearly') => void

  startupCost: {
    total: number
    mau: number
  }
  setStartupCost: (cost: { total: number; mau: number }) => void

  enterpriseCost: {
    total: number
    mau: number
  }
  setEnterpriseCost: (cost: { total: number; mau: number }) => void
}

export const usePricingStore = create<PricingState>((set) => ({
  mode: 'monthly',
  setMode: (mode: 'monthly' | 'yearly') => set({ mode }),

  startupCost: {
    total: 150,
    mau: 100,
  },
  setStartupCost: (cost: { total: number; mau: number }) => set({ startupCost: cost }),

  enterpriseCost: {
    total: 1500,
    mau: 1000,
  },
  setEnterpriseCost: (cost: { total: number; mau: number }) => set({ enterpriseCost: cost }),
}))
