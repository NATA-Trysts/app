import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Category } from './Category'
import { Content } from './Content'

const AvatarPanelContainer = styled(motion.div)<{ bottom: number; left: number; right: number; top: number }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  top: ${({ top }) => top}px;

  width: 300px;
  height: 580px;
  background-color: #191a1d;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 72px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'category content';
  pointer-events: auto;
`

type AvatarPanelProps = {
  top?: number
  left?: number
  right?: number
  bottom?: number
  isEdit?: boolean
}

export const AvatarPanel = ({ top = 96, left = 120, right = 0, bottom = 0, isEdit = false }: AvatarPanelProps) => {
  return (
    <AvatarPanelContainer
      animate={{
        x: isEdit ? 0 : -500,
      }}
      bottom={bottom}
      left={left}
      right={right}
      top={top}
    >
      <Category />
      <Content />
    </AvatarPanelContainer>
  )
}
