import { createContext } from 'react'

import { MarkObj } from './Slider'

export type SliderMarkContextType = {
  min: number
  max: number
  currentValues: number[]
  inverted: boolean
  marks?: MarkObj[]
}

export const SliderMarkContext = createContext<SliderMarkContextType>({
  min: 0,
  max: 100,
  currentValues: [0],
  inverted: false,
})
