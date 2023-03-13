import { Content, Portal, Root, SelectProps, Trigger, Viewport } from '@radix-ui/react-select'
import { FC, ReactNode } from 'react'

type SelectCustomProps = {
  children: ReactNode
  content: ReactNode
} & SelectProps

export const Select: FC<SelectCustomProps> = (props) => {
  return (
    <Root>
      <Trigger>{props.children}</Trigger>
      <Portal>
        <Content {...props}>
          <Viewport>{props.content}</Viewport>
        </Content>
      </Portal>
    </Root>
  )
}
