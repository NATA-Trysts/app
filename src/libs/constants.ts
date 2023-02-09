import { CustomColor } from '../layouts/common'

export type ColorListObject = {
  [key in CustomColor]: string
}

const COLOR_PICKER_LIST: ColorListObject = {
  purple: 'hsla(286, 65%, 66%, 1)',
  green: 'hsla(137, 65%, 66%, 1)',
  blue: 'hsla(216, 65%, 66%, 1)',
}

export { COLOR_PICKER_LIST }
