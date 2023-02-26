import { Content, PopoverContentProps, Portal, Root, Trigger } from '@radix-ui/react-popover'
import React, { FC, ReactNode } from 'react'

type PopoverProps = {
  children: ReactNode
  content: ReactNode
} & PopoverContentProps

export const Popover: FC<PopoverProps> = (props) => {
  return (
    <Root>
      <Trigger asChild>{props.children}</Trigger>
      <Portal>
        <Content {...props}>{props.content}</Content>
      </Portal>
    </Root>
  )
}
