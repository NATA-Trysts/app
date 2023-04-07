export type Material = {
  type: 'texture' | 'shader'
  value: string | null
}

export type ModelMaterial = {
  primary: Material | null
  secondary: Material | null
}

export type Model = {
  _id: string
  name: string
  category: string
  collection_id: string
  description: string
  thumbnail: string
  materials: ModelMaterial
  price: number
}
