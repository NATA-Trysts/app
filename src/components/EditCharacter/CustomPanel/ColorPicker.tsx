import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useColorPicker } from '@/hooks'
import { useEditCharacterStore } from '@/stores'

import { PlanOverlay } from './PlanOverlay'

const ColorPickerContainer = styled.div`
  width: 100%;
  transition: opacity 0.2s ease;
  margin-top: 32px;
  position: relative;

  .react-colorful {
    width: 100%;
  }
`

const Title = styled(Text)`
  display: inline-block;
  margin-bottom: 8px;
`

const HexInput = styled.input`
  width: 100%;
  height: 28px;
  padding: 8px;
  background-color: #37393e;
  border-radius: 6px;
  margin-top: 8px;
  border: none;
  color: #f7f6f6;
`

export const ColorPicker = () => {
  const [color, setColor] = useEditCharacterStore((state) => [state.color, state.setColor])
  const [colorInput, setColorInput] = useState(color)

  const { applyPatternToString, checkValidHex, formatHex } = useColorPicker()

  const handlePickColor = (color: string) => {
    setColor(color)
    setColorInput(color)
  }

  const handleChangeHex = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value)
  }

  const handleBlur = () => {
    const colorFromInput = applyPatternToString(colorInput)

    if (checkValidHex(colorFromInput)) {
      setColor(formatHex(colorFromInput))
      setColorInput(formatHex(colorFromInput))
    } else {
      setColorInput(formatHex(color))
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const colorFromInput = applyPatternToString(colorInput)

      if (checkValidHex(colorFromInput)) {
        setColor(formatHex(colorFromInput))
        setColorInput(formatHex(colorFromInput))
      } else {
        setColorInput(formatHex(color))
      }
    }
  }

  return (
    <ColorPickerContainer>
      <Title size="medium" weight="normal">
        Color
      </Title>
      <HexColorPicker color={color} onChange={handlePickColor} />
      <HexInput type="text" value={colorInput} onBlur={handleBlur} onChange={handleChangeHex} onKeyDown={handleEnter} />
      <PlanOverlay isShown={false} />
    </ColorPickerContainer>
  )
}
