import { useRef, useState } from 'react'
import styled from 'styled-components'

const NameBoxContainer = styled.div`
  width: 232px;
  height: 47px;
  position: absolute;
  left: 50%;
  bottom: 72px;
  transform: translateX(-50%);
  background: #2d0634;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NameWrapper = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const NameInput = styled.input`
  width: 100%;
  height: 100%;
  background: #4e1957;
  border-radius: 8px;
  outline-color: transparent;
  border: none;
  text-align: center;
`

type NameBoxProps = {
  name: string
}

export const NameBox = ({ name }: NameBoxProps) => {
  const [nameInput, setNameInput] = useState(name)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      inputRef.current?.blur()
    }
  }

  return (
    <NameBoxContainer>
      <NameWrapper>
        <NameInput ref={inputRef} value={nameInput} onChange={handleChange} onKeyDown={handleKeyDown} />
      </NameWrapper>
    </NameBoxContainer>
  )
}
