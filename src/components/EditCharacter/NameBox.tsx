import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { useAnonymous, useAuth } from '@/hooks'
import { MESSAGES } from '@/libs/constants'
import { useEditCharacterStore, useMemberStore, useNetworkStore } from '@/stores'

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
  name?: string
  isEdit?: boolean
}

export const NameBox = ({ name, isEdit = false }: NameBoxProps) => {
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const { auth } = useAuth()
  const { setName } = useAnonymous()
  const { register, setValue } = useForm()
  const mainMember = useMemberStore((state) => state.mainMember)

  const inputRef = useRef<HTMLInputElement>(null)
  const setIsInputFocus = useEditCharacterStore((state) => state.setIsInputFocus)

  useEffect(() => {
    if (mainMember) setValue('name', mainMember.user.name)
  }, [mainMember?.user.name])

  const dispatchChangeName = (name: string) => {
    roomInstance?.send(MESSAGES.MEMBER.CHANGE_NAME, {
      name: name,
    })
  }

  useEffect(() => {
    console.log('auth name change', auth.user.username)
  }, [auth.user.username])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (e.key === 'Enter' || e.key === 'Escape') {
      inputRef.current?.blur()

      if (e.key === 'Enter') {
        setName(value)
        dispatchChangeName(value)
      }
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
          placeholder="What's your name?"
          {...register('name', { value: name })}
          onBlur={() => setIsInputFocus(false)}
          onFocus={() => setIsInputFocus(true)}
          onKeyDown={handleKeyDown}
        />
      </NameWrapper>
    </NameBoxContainer>
  )
}
