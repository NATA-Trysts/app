import { useForm } from 'react-hook-form'
import ReactTextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { SVGClickable } from '@/layouts/common'
import { useVirtualSpaceStore } from '@/stores'

const Container = styled.div`
  width: 100%;
  position: relative;
`

// const InputForm = styled.form``

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

const MessageInput = styled(ReactTextareaAutosize)`
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
  const { register, handleSubmit, setValue } = useForm()

  const onEnterPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key == 'Enter' && event.shiftKey == false) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  const handleSendMessage = () => {
    handleSubmit(
      (data) => {
        setValue('chat', '')
        onSendMessage(data)
      },
      (errors) => console.error(errors),
    )()
  }

  return (
    <Container>
      {/* <InputForm onSubmit={}> */}
      <MessageInputContainer>
        <MessageInput
          {...register('chat', { required: true })}
          maxRows={3}
          minRows={1}
          placeholder="Type something"
          onBlur={() => setCanControlCharacter(true)}
          onFocus={() => setCanControlCharacter(false)}
          onKeyDown={onEnterPress}
        />
      </MessageInputContainer>
      <EmojiContainer>
        <SVGClickable type="button">
          <Emoji />
        </SVGClickable>
      </EmojiContainer>
      {/* </InputForm> */}
    </Container>
  )
}
