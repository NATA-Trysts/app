import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow-left.svg'
import { Text } from '@/components/Commons'

const BackText = styled(Text)`
  color: #696969;
  margin-left: 10px;
  transition: color 0.2s ease;
`

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
  transition: background-color 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: #202022;

    ${BackText} {
      color: #fff;
    }

    svg {
      transform: translateX(-2px);
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(461%) hue-rotate(210deg) brightness(117%)
        contrast(100%);
    }
  }
`

type BackButtonProps = {
  top?: number
  left?: number
  onClickBack: () => void
  isEdit?: boolean
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
