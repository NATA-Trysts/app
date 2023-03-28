import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import { AnimationMaterial } from './AnimationMaterial'
import { ColorPicker } from './ColorPicker'
import { MaterialSection } from './MaterialSection'
import { TattooSection } from './TattooSection'

const CustomPanelContainer = styled(motion.div)<{ bottom: number; left: number; right: number; top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  right: ${({ right }) => right}px;
  /* left: ${({ left }) => left}px; */

  width: 300px;
  height: 580px;
  padding: 0 16px;
  background-color: #191a1d;
  border-radius: 16px;
  overflow: scroll;
  overflow-x: hidden;
  pointer-events: auto;

  > div {
    opacity: 1;
  }

  &:hover > div:not(:hover) {
    opacity: 0.7;
  }

  > div:hover {
    opacity: 1;
  }

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`

const CustomPanelSection = styled.div`
  ${CustomPanelContainer} &:not(:last-child) {
    margin-bottom: 0.5px;
  }

  /* ${CustomPanelContainer} > &:first-child {
    padding-bottom: 10px;
  } */

  ${CustomPanelContainer} > & {
    padding: 10px 0px;
  }
`

type CustomPanelProps = {
  top?: number
  left?: number
  right?: number
  bottom?: number
  isEdit?: boolean
}

export const CustomPanel = React.memo(
  ({ top = 96, left = 0, right = 100, bottom = 0, isEdit = false }: CustomPanelProps) => {
    return (
      <CustomPanelContainer
        animate={{
          x: isEdit ? 0 : 500,
        }}
        bottom={bottom}
        initial={{
          x: 0,
        }}
        left={left}
        right={right}
        top={top}
      >
        <CustomPanelSection>
          <TattooSection />
        </CustomPanelSection>
        <CustomPanelSection>
          <ColorPicker />
        </CustomPanelSection>
        <CustomPanelSection>
          <MaterialSection />
        </CustomPanelSection>
        <CustomPanelSection>
          <AnimationMaterial />
        </CustomPanelSection>
      </CustomPanelContainer>
    )
  },
)
