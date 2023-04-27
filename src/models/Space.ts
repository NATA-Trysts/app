const builtinThemes = ['home', 'forest', 'city', 'kidsplayground'] as const

export type BuiltInTheme = (typeof builtinThemes)[number]

export function isBuiltinTheme(maybeBuiltinTheme: unknown): maybeBuiltinTheme is BuiltInTheme {
  return typeof maybeBuiltinTheme === 'string' && (builtinThemes as ReadonlyArray<string>).includes(maybeBuiltinTheme)
}

export type CustomableTheme = BuiltInTheme | 'custom'

export function isCustomableTheme(maybeCustomableTheme: unknown): maybeCustomableTheme is CustomableTheme {
  return isBuiltinTheme(maybeCustomableTheme) || maybeCustomableTheme === 'custom'
}

export type SpaceTheme = BuiltInTheme | false

export type Author = {
  _id: string
  username: string
}

export type Space = {
  _id: string
  name: string
  thumbnail: string
  latestEdited: number
  author: string | Author
  theme: SpaceTheme
  code: string
  password: string
  hmsRoomId: string
}
