import styled from 'styled-components'

import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { SVGClickable } from '@/layouts/common'
import { useVirtualSpaceStore } from '@/stores'

import { TextAreaSendable } from '../Commons/TextArea/TextAreaSendable'

const Container = styled.div`
  width: 100%;
  position: relative;
`

const MessageInputContainer = styled.div`
  padding: 14px 48px 14px 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: var(--color-4);
  border-radius: 8px;
  height: auto;
  align-items: center;
`

const MessageInput = styled(TextAreaSendable)`
  border: none;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 500;
  outline: none;
  resize: none;
  display: flex;
  background: transparent;
  width: 100%;

  ::placeholder {
    color: var(--color-2);
  }
`

const EmojiContainer = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
`

export type ChatInputProps = {
  onSendMessage?: (data: any) => void
}

export const ChatInput = ({ onSendMessage = () => {} }: ChatInputProps) => {
  const setCanControlCharacter = useVirtualSpaceStore((state) => state.setCanControlCharacter)

  return (
    <Container>
      <MessageInputContainer>
        <MessageInput
          maxRows={3}
          minRows={1}
          name="chat"
          placeholder="Type something"
          onBlur={() => setCanControlCharacter(true)}
          onFocus={() => setCanControlCharacter(false)}
          onValueSubmit={onSendMessage}
        />
      </MessageInputContainer>
      <EmojiContainer>
        <SVGClickable type="button">
          <Emoji />
        </SVGClickable>
      </EmojiContainer>
    </Container>
  )
}
