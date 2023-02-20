import { MouseEventHandler, ReactNode } from 'react'

export type BaseButtonProps = ButtonProps & {
  colorStyle?: string
}

export type StyledButtonProps = ButtonProps

type ButtonProps = {
  color?: string
  children?: ReactNode
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}
