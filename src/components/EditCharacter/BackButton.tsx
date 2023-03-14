import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow-left.svg'
import { Text } from '@/components/Commons'

const BackButtonContainer = styled(motion.button)<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 42px;
  background-color: #191a1d;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  pointer-events: auto;

  &:hover {
    background-color: #202022;
  }
`

const BackText = styled(Text)`
  color: #696969;
  margin-left: 10px;
`

type BackButtonProps = {
  top?: number
  left?: number
  onClickBack: () => void
  isEdit: boolean
}

export const BackButton = ({ top = 40, left = 120, onClickBack, isEdit = false }: BackButtonProps) => {
  return (
    <BackButtonContainer
      animate={{
        x: isEdit ? 0 : -500,
      }}
      left={left}
      top={top}
      onClick={onClickBack}
    >
      <ArrowLeft />
      <BackText size="medium" weight="normal">
        Back
      </BackText>
    </BackButtonContainer>
  )
}
