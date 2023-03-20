import { useId } from 'react'
import styled from 'styled-components'

const Container = styled.button<{ isActive: boolean; isLongCharacter: boolean }>`
  all: unset;
  width: ${({ isLongCharacter }) => (isLongCharacter ? '72px' : '48px')};
  height: 48px;
  border: 3px solid ${({ isActive }) => (isActive ? 'red !important' : '#fff')};
  background: transparent;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  transition: opacity 0.2s ease;
  text-transform: capitalize;

  :hover {
    opacity: 1;
  }
`

type KeyButtonProps = {
  keyId: string
  setKeyId?: (keyId: string) => void
  keyName: string
}

export const KeyButton = ({ keyName, keyId, setKeyId }: KeyButtonProps) => {
  const buttonId = useId()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if (setKeyId) {
      setKeyId(buttonId)
    }
  }

  return (
    <Container
      id={buttonId}
      isActive={buttonId === keyId}
      isLongCharacter={keyName.length !== 1}
      onClick={(e) => handleClick(e)}
    >
      {keyName}
    </Container>
  )
}
