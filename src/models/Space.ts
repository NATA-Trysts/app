// type Author = {
//   _id: string
//   username: string
// }

export type BuiltInTheme = 'home' | 'forest' | 'city' | 'kidsplayground'

export type CustomableSpaceTheme = BuiltInTheme | 'custom'

export type SpaceTheme = BuiltInTheme | false

export type Space = {
  _id: string
  name: string
  thumbnail: string
  latestEdited: number
  // author: Author
  author: string
  theme: SpaceTheme
  code: string
  password: string
  hmsRoomId: string
}
