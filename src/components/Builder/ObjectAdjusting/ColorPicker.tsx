import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useColorPicker } from '@/hooks'
import { useBuilderStore } from '@/stores'

import { useBuilder } from '../hooks/useBuilder'

const ColorPickerContainer = styled.div`
  width: 100%;
  transition: opacity 0.2s ease;
  /* margin-top: 32px; */
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

type ColorPickerProps = {
  isFilteredModel: boolean
}

export const ColorPicker = ({ isFilteredModel }: ColorPickerProps) => {
  const { updateHistory } = useBuilder()

  const [updateModelColor] = useBuilderStore((state) => [state.updateModelColor])

  const selectedModelUuid = useBuilderStore(
    (state) => state.selectedModelUuid,
    (current, prev) => current !== prev,
  )

  const [color, setColor] = useState('#A67BC2')
  const [colorInput, setColorInput] = useState(color)

  const { applyPatternToString, checkValidHex, formatHex } = useColorPicker()

  const handlePickColor = (color: string) => {
    if (isFilteredModel) {
      setColor(color)
      setColorInput(color)
      updateModelColor(color)
    }
  }

  const handleUp = () => {
    updateHistory((models) => {
      return models.map((model) => (model.uuid === selectedModelUuid ? { ...model, color } : model))
    })
  }

  const handleChangeHex = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value)
  }

  const handleBlur = () => {
    const colorFromInput = applyPatternToString(colorInput)

    if (checkValidHex(colorFromInput)) {
      setColor(formatHex(colorFromInput))
      setColorInput(formatHex(colorFromInput))
      updateModelColor(formatHex(colorFromInput))

      updateHistory((models) => {
        return models.map((model) =>
          model.uuid === selectedModelUuid ? { ...model, color: formatHex(colorFromInput) } : model,
        )
      })
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
        updateModelColor(formatHex(colorFromInput))

        updateHistory((models) => {
          return models.map((model) =>
            model.uuid === selectedModelUuid ? { ...model, color: formatHex(colorFromInput) } : model,
          )
        })
      } else {
        setColorInput(formatHex(color))
      }
    }
  }

  return (
    <ColorPickerContainer>
      <Title size="small" weight="normal">
        Color
      </Title>
      <HexColorPicker color={color} onChange={handlePickColor} onMouseUp={handleUp} />
      <HexInput type="text" value={colorInput} onBlur={handleBlur} onChange={handleChangeHex} onKeyDown={handleEnter} />
    </ColorPickerContainer>
  )
}
