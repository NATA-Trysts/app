import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { INPUT_BORDER, INPUT_DROP_SHADOW } from '@/libs/constants'
import { EmailInputStatusType } from '@/stores'

const InputContainer = styled.div`
  width: 100%;
  height: 42px;
  border-radius: 12px;
`

const InputField = styled.input<{ status: EmailInputStatusType }>`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  padding-left: 16px;
  background-color: white;
  color: #090118;
  border: ${({ status }) => `1px solid ${INPUT_BORDER[status]}`};
  filter: ${({ status }) => `${INPUT_DROP_SHADOW[status]}`};
  font-size: 16px;
  font-weight: lighter;
  transition: all 0.3s ease;

  ::placeholder {
    color: #b5b5b5;
  }

  :focus {
    outline: none;
    border: 1px solid ${INPUT_BORDER['valid']};
    filter: ${INPUT_DROP_SHADOW['valid']};
  }
`

type InputProps = {
  autoFocus?: boolean
  placeholder: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnterDown: () => void
  onOutFocus: () => void
  status: EmailInputStatusType
}

export const Input = ({
  autoFocus,
  placeholder,
  type,
  value,
  status,
  onChange,
  onEnterDown,
  onOutFocus,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  // out focus when enter key is pressed
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onEnterDown()
      inputRef.current?.blur()
    }
  }

  // auto focus when component is mounted
  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus()
    }
  }, [autoFocus])

  return (
    <InputContainer>
      <InputField
        ref={inputRef}
        placeholder={placeholder}
        status={status}
        type={type}
        value={value}
        onBlur={onOutFocus}
        onChange={onChange}
        onKeyDown={handleEnterKeyDown}
      />
    </InputContainer>
  )
}
