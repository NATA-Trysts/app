import { MouseEventHandler, ReactNode } from 'react'

export type BaseButtonProps = IButtonProps & {
  colorStyle?: string
}

export type StyledButtonProps = IButtonProps

type IButtonProps = {
  color?: string
  children?: ReactNode
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}
