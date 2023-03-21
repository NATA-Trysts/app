import { motion } from 'framer-motion'
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
`

export const Hint = () => {
  const interactable = useVirtualSpaceStore((state) => state.interactable)

  return (
    <Container
      animate={{
        padding: interactable ? '12px 20px' : 0,
        opacity: interactable ? 1 : 0,
        width: interactable ? 150 : 40,
      }}
      initial={{
        x: '-50%',
        width: 40,
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
        Press <Key>Z</Key> to sit
      </Text>
    </Container>
  )
}
