import React from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { SVGClickable } from '@/layouts/common'

const Container = styled.div`
  width: 100%;
`

const InputForm = styled.form`
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

export const ChatInput = () => {
  return (
    <Container>
      <InputForm>
        <MessageInputContainer>
          <MessageInput maxRows={3} minRows={1} placeholder="Type something" />
        </MessageInputContainer>
        <EmojiContainer>
          <SVGClickable>
            <Emoji />
          </SVGClickable>
        </EmojiContainer>
      </InputForm>
    </Container>
  )
}
