import styled from 'styled-components'

import { AnimationMaterial } from './AnimationMaterial'
import { ColorPicker } from './ColorPicker'
import { MaterialSection } from './MaterialSection'
import { TattooSection } from './TattooSection'

const CustomPanelContainer = styled.div`
  position: absolute;
  top: 96px;
  right: 100px;

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

export const CustomPanel = () => {
  return (
    <CustomPanelContainer>
      <TattooSection />
      <ColorPicker />
      <MaterialSection />
      <AnimationMaterial />
    </CustomPanelContainer>
  )
}
