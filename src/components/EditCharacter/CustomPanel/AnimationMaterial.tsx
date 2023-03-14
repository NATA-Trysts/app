import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { Popover } from '@/components/Popover'
import { useEditCharacterStore } from '@/stores'

import { AnimationType } from './AnimationType'
import { PlanOverlay } from './PlanOverlay'

const MaterialSectionContainer = styled.div`
  width: 100%;
  margin: 16px 0;
  position: relative;
  transition: opacity 0.2s ease;
`

const Title = styled(Text)`
  display: inline-block;
  margin-bottom: 8px;
`

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Property = styled.div`
  display: grid;
  grid-template-columns: auto 160px;
  align-items: center;
  margin: 4px 0;
`

const Name = styled(Text)`
  color: #727272;
`

const ValueWrapper = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Color = styled.div<{ bgColor: string }>`
  width: 28px;
  height: 28px;
  margin-right: 4px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 6px;
  cursor: pointer;
`

const PickerWrapper = styled.div`
  padding: 12px;
  background-color: #212225;
  border-radius: 12px;
`

const Hex = styled.input`
  width: 128px;
  height: 28px;
  padding: 0 8px;
  background-color: #37393e;
  border: 1px solid transparent;
  border-radius: 6px;

  font-size: 12px;
  font-weight: 500;
  color: white;

  transition: border 0.3s ease;

  :focus {
    outline: none;
    border: 1px solid #727272;
  }
`

const hexRegex = /^#[0-9A-Fa-f]{6}$/

export const AnimationMaterial = () => {
  const [animationColor, setAnimationColor] = useEditCharacterStore((state) => [
    state.animationColor,
    state.setAnimationColor,
  ])

  const [inputColorA, setInputColorA] = useState(animationColor.colorA)
  const [inputColorB, setInputColorB] = useState(animationColor.colorB)
  const [isShownPlanOverlay, setIsShownPlanOverlay] = useState(false)

  const handlePickColorA = (color: string) => {
    setAnimationColor(color, animationColor.colorB)
    setInputColorA(color)
  }

  const handleInputColorA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (hexRegex.test(value)) {
      setAnimationColor(value, animationColor.colorB)
    }

    if (e.target.value.length <= 7) {
      setInputColorA(value)
    }
  }

  const handlePickColorB = (color: string) => {
    setAnimationColor(animationColor.colorA, color)
    setInputColorB(color)
  }

  const handleInputColorB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (hexRegex.test(value)) {
      setAnimationColor(animationColor.colorA, value)
    }

    if (e.target.value.length <= 7) {
      setInputColorB(value)
    }
  }

  return (
    <MaterialSectionContainer
      onMouseEnter={() => setIsShownPlanOverlay(true)}
      onMouseLeave={() => setIsShownPlanOverlay(false)}
    >
      <Title size="medium" weight="normal">
        Animation Material
      </Title>
      <List>
        <AnimationType />
        <Property>
          <Name size="small" weight="lighter">
            Color A
          </Name>
          <ValueWrapper>
            <Popover
              align="center"
              content={
                <PickerWrapper>
                  <HexColorPicker color={animationColor.colorA} onChange={handlePickColorA} />
                </PickerWrapper>
              }
              side="right"
              sideOffset={132}
            >
              <Color bgColor={animationColor.colorA} />
            </Popover>
            <Hex type="text" value={inputColorA} onChange={handleInputColorA} />
          </ValueWrapper>
        </Property>
        <Property>
          <Name size="small" weight="lighter">
            Color B
          </Name>
          <ValueWrapper>
            <Popover
              align="center"
              content={
                <PickerWrapper>
                  <HexColorPicker color={animationColor.colorB} onChange={handlePickColorB} />
                </PickerWrapper>
              }
              side="right"
              sideOffset={132}
            >
              <Color bgColor={animationColor.colorB} />
            </Popover>
            <Hex type="text" value={inputColorB} onChange={handleInputColorB} />
          </ValueWrapper>
        </Property>
      </List>
      <PlanOverlay isShown={isShownPlanOverlay} />
    </MaterialSectionContainer>
  )
}
