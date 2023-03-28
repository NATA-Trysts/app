import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import styled from 'styled-components'

import { useEditCharacterStore } from '@/stores'

const NameBoxContainer = styled(motion.div)`
  width: 232px;
  height: 47px;
  position: absolute;
  left: 50%;
  bottom: 72px;
  /* transform: translateX(-50%); */
  background: var(--color-5);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  z-index: 0;
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
  background: var(--color-4);
  border-radius: 8px;
  outline-color: transparent;
  border: none;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  outline: none;
  padding: 0 8px;

  ::placeholder {
    color: var(--color-2);
  }
`

type NameBoxProps = {
  name: string
  isEdit?: boolean
}

export const NameBox = ({ name, isEdit = false }: NameBoxProps) => {
  const [nameInput, setNameInput] = useState(name)
  const inputRef = useRef<HTMLInputElement>(null)
  const setIsInputFocus = useEditCharacterStore((state) => state.setIsInputFocus)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      inputRef.current?.blur()
    }
  }

  return (
    <NameBoxContainer
      animate={{
        y: isEdit ? 0 : 50,
        opacity: isEdit ? 1 : 0,
      }}
      initial={{
        y: 50,
        x: '-50%',
      }}
      transition={{
        y: {
          duration: 0.25,
        },
        opacity: {
          duration: 0.1,
        },
      }}
    >
      <NameWrapper>
        <NameInput
          ref={inputRef}
          placeholder="What's your name?"
          value={nameInput}
          onBlur={() => setIsInputFocus(false)}
          onChange={handleChange}
          onFocus={() => setIsInputFocus(true)}
          onKeyDown={handleKeyDown}
        />
      </NameWrapper>
    </NameBoxContainer>
  )
}
