import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
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

const hexRegex = /^#[0-9A-Fa-f]{6}$/

export const ColorPicker = () => {
  const [color, setColor] = useEditCharacterStore((state) => [state.color, state.setColor])

  const handleChangeHex = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hexRegex.test(e.target.value)) {
      setColor(e.target.value)
    }

    if (e.target.value.length <= 7) {
      setColor(e.target.value)
    }
  }

  return (
    <ColorPickerContainer>
      <Title size="medium" weight="normal">
        Color
      </Title>
      <HexColorPicker color={color} onChange={setColor} />
      <HexInput type="text" value={color} onChange={handleChangeHex} />
      <PlanOverlay isShown={false} />
    </ColorPickerContainer>
  )
}
