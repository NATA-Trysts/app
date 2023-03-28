export type ModelResolution = {
  low: string
  medium: string
}

export type Material = {
  type: 'color' | 'texture' | 'shader'
  value: string | null
}

export type ModelMaterial = {
  primary: Material | null
  secondary: Material | null
}

export type ModelCustomable = {
  primary: string
  secondary: string
}

export type Model = {
  id: number
  name: string
  category: string
  collection: string
  description: string
  thumbnail: string
  resolutions: ModelResolution
  materials: ModelMaterial
  customable: ModelCustomable
  price: number
}
