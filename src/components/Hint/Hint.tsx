import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { useVirtualSpaceStore } from '@/stores'

const Container = styled(motion.button)`
  background: var(--color-5);
  position: absolute;
  bottom: 70px;
  outline: none;
  border-radius: 16px;
  border: none;
  left: 50%;
  overflow: hidden;
`

const Text = styled(motion.span)`
  font-family: var(--font-family);
  font-weight: 500;
  color: var(--color-3);
`

const Key = styled.span`
  margin: 0 2px;
  padding: 4px 8px;
  border-radius: 4px;
  background: #fff;
  color: #000;
  text-transform: uppercase;
`

type HintProps = {
  actionKey?: string
  action?: string
}

export const Hint = ({ actionKey = 'f', action = 'interact' }: HintProps) => {
  const interactable = useVirtualSpaceStore((state) => state.interactable)
  const [hintContent, setHintContent] = useState<ReactNode>()
  const clearContentTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (interactable) {
      setHintContent(
        <>
          Press <Key>{actionKey}</Key> to {action}
        </>,
      )
    } else {
      clearContentTimeoutRef.current = setTimeout(() => {
        setHintContent(<></>)
      }, 1000)
    }

    return () => clearTimeout(clearContentTimeoutRef.current)
  }, [interactable, actionKey, action])

  return (
    <Container
      animate={{
        padding: interactable ? '12px 20px' : 0,
        opacity: interactable ? 1 : 0,
        minWidth: interactable ? 200 : 40,
      }}
      initial={{
        x: '-50%',
        minWidth: 40,
        height: 40,
        opacity: 0,
      }}
      transition={{
        delay: interactable ? 0 : 0.2,
      }}
    >
      <Text
        animate={{
          opacity: interactable ? 1 : 0,
        }}
        transition={{
          delay: interactable ? 0.2 : 0,
        }}
      >
        {hintContent}
      </Text>
    </Container>
  )
}
