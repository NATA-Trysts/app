import { Content, PopoverContentProps, Portal, Root, Trigger } from '@radix-ui/react-popover'
import React, { FC, ReactNode } from 'react'

type PopoverProps = {
  children: ReactNode
  content: ReactNode
  isPopoverOpen?: boolean
  handleInteractOutside?: () => void
  handleClickTrigger?: () => void
} & PopoverContentProps

export const Popover: FC<PopoverProps> = (props) => {
  return (
    <Root open={props.isPopoverOpen}>
      <Trigger asChild onClick={props.handleClickTrigger}>
        {props.children}
      </Trigger>
      <Portal>
        <Content {...props} onInteractOutside={props.handleInteractOutside}>
          {props.content}
        </Content>
      </Portal>
    </Root>
  )
}
