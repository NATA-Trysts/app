import { Model } from './Model'

export type Collection = {
  _id: string
  name: string
  price: number
  description: string
  number_of_buyers: number
  title: string
  models: Model[] | number[]
}
