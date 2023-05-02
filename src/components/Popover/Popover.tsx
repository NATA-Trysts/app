import { Content, PopoverContentProps, Portal, Root, Trigger } from '@radix-ui/react-popover'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type PopoverProps = {
  children: ReactNode
  content: ReactNode
  isPopoverOpen?: boolean
  handleInteractOutside?: () => void
  handleClickTrigger?: () => void
  handleOpenChange?: (isOpen: boolean) => void
} & PopoverContentProps

const NoOutlineContent = styled(Content)`
  outline: none;
`

export const Popover: FC<PopoverProps> = (props) => {
  return (
    <Root open={props.isPopoverOpen} onOpenChange={props.handleOpenChange}>
      <Trigger asChild onClick={props.handleClickTrigger}>
        {props.children}
      </Trigger>
      <Portal>
        <NoOutlineContent {...props} onInteractOutside={props.handleInteractOutside}>
          {props.content}
        </NoOutlineContent>
      </Portal>
    </Root>
  )
}
