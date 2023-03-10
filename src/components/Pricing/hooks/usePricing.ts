import { usePricingStore } from '@/stores'

// get number of letter in a number
const getNumberOfLetter = (number: number): number => {
  return number.toString().length
}

const usePricing = () => {
  const [startupCost, setStartupCost, enterpriseCost, setEnterpriseCost] = usePricingStore((state) => [
    state.startupCost,
    state.setStartupCost,
    state.enterpriseCost,
    state.setEnterpriseCost,
  ])

  const addMAUs = (type: 'startup' | 'enterprise') => {
    const cost = type === 'startup' ? startupCost : enterpriseCost
    const setCost = type === 'startup' ? setStartupCost : setEnterpriseCost

    const newCost = {
      total: cost.total + Math.pow(10, getNumberOfLetter(cost.total) - 1),
      mau: cost.mau + Math.pow(10, getNumberOfLetter(cost.mau) - 1),
    }

    setCost(newCost)
  }

  const subtractMAUs = (type: 'startup' | 'enterprise') => {
    const cost = type === 'startup' ? startupCost : enterpriseCost
    const setCost = type === 'startup' ? setStartupCost : setEnterpriseCost

    const newCost = {
      total: cost.total - Math.pow(10, getNumberOfLetter(cost.total) - 1),
      mau: cost.mau - Math.pow(10, getNumberOfLetter(cost.mau) - 1),
    }

    if (newCost.mau < 100) newCost.mau = 100
    if (newCost.total < 150) newCost.total = 150

    setCost(newCost)
  }

  return { addMAUs, subtractMAUs }
}

export { usePricing }
