import styled from 'styled-components'

import { AnimationMaterial } from './AnimationMaterial'
import { ColorPicker } from './ColorPicker'
import { MaterialSection } from './MaterialSection'
import { TattooSection } from './TattooSection'

const CustomPanelContainer = styled.div<{ bottom: number; left: number; right: number; top: number }>`
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

type CustomPanelProps = {
  top?: number
  left?: number
  right?: number
  bottom?: number
}

export const CustomPanel = ({ top = 96, left = 0, right = 100, bottom = 0 }: CustomPanelProps) => {
  return (
    <CustomPanelContainer bottom={bottom} left={left} right={right} top={top}>
      <TattooSection />
      <ColorPicker />
      <MaterialSection />
      <AnimationMaterial />
    </CustomPanelContainer>
  )
}
