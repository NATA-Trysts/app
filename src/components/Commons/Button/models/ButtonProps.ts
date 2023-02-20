import { MouseEventHandler, ReactNode } from 'react'

export type BaseButtonProps = ButtonProps & {
  colorStyle?: 'default' | 'gradient' | 'basic'
}

export type StyledButtonProps = ButtonProps

type ButtonProps = {
  color?: string
  children?: ReactNode
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}
