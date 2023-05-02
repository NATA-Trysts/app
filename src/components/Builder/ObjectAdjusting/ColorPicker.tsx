import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useColorPicker } from '@/hooks'
import { SpaceModel, useBuilderStore } from '@/stores'

import { useBuilder } from '../hooks/useBuilder'

const ColorPickerContainer = styled.div`
  width: 100%;
  transition: opacity 0.2s ease;
  /* margin-top: 32px; */
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;

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
  modelColor: string | undefined
  filteredModel: SpaceModel
}

export const ColorPicker = ({ modelColor, filteredModel }: ColorPickerProps) => {
  const { updateHistory } = useBuilder()

  const [updateModelColor, setIsInputFocus] = useBuilderStore((state) => [
    state.updateModelColor,
    state.setIsInputFocus,
  ])

  const selectedModelId = useBuilderStore((state) => state.selectedModelId)

  const [color, setColor] = useState(modelColor || '#ff00ff')
  const [prevColor, setPrevColor] = useState(modelColor || '#ff00ff')
  const [colorInput, setColorInput] = useState(color)

  const { applyPatternToString, checkValidHex, formatHex } = useColorPicker()

  const handlePickColor = (color: string) => {
    if (filteredModel) {
      setColor(color)
      setColorInput(color)
      updateModelColor(color)
    }
  }

  const handleUp = () => {
    updateHistory((models) => {
      return models.map((model) => (model.id === selectedModelId ? { ...model, color } : model))
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
          model.id === selectedModelId ? { ...model, color: formatHex(colorFromInput) } : model,
        )
      })
    } else {
      setColorInput(formatHex(color))
    }

    setIsInputFocus(false)
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
            model.id === selectedModelId ? { ...model, color: formatHex(colorFromInput) } : model,
          )
        })
      } else {
        setColorInput(formatHex(color))
      }

      setIsInputFocus(false)
    }
  }

  // compare model color with prev color
  if (modelColor !== prevColor) {
    setColor(modelColor || '#ff00ff')
    setPrevColor(modelColor || '#ff00ff')
    setColorInput(modelColor || '#ff00ff')
  }

  return (
    <ColorPickerContainer>
      <Title size="small" weight="normal">
        Color
      </Title>
      <HexColorPicker color={color} onChange={handlePickColor} onMouseUp={handleUp} />
      <HexInput
        type="text"
        value={colorInput}
        onBlur={handleBlur}
        onChange={handleChangeHex}
        onFocus={() => {
          setIsInputFocus(true)
        }}
        onKeyDown={handleEnter}
      />
    </ColorPickerContainer>
  )
}
