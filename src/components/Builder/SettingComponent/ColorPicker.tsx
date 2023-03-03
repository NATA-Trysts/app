import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

import { Popover } from '@/components/Popover'
import { Text } from '@/layouts/common'
import { useBuilderStore } from '@/stores/builder'

import { BuilderTextInput } from './BuilderTextInput'

const Container = styled.div`
  width: 100%;
  height: 28px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const Property = styled(Text)`
  color: #727272;
`

const Wrapper = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  input {
    width: 92px;
  }
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

const Hex = styled(BuilderTextInput)``

const hexRegex = /^#[0-9A-Fa-f]{6}$/

export const ColorPicker = () => {
  const [globalBackground, setGlobalBackground] = useBuilderStore((state) => [
    state.globalBackground,
    state.setGlobalBackground,
  ])

  const [inputColor, setInputColor] = useState(globalBackground)

  const handleChangeHex = (value: string) => {
    if (hexRegex.test(value)) {
      setGlobalBackground(value)
    }

    if (value.length <= 7) {
      setInputColor(value)
    }
  }

  const handlePickColor = (colorCode: string) => {
    setGlobalBackground(colorCode)
    setInputColor(colorCode)
  }

  return (
    <>
      <Container>
        <Property size="small" weight="normal">
          Background
        </Property>
        <Wrapper>
          <Popover
            align="center"
            content={
              <PickerWrapper>
                <HexColorPicker color={globalBackground} onChange={handlePickColor} />
              </PickerWrapper>
            }
            side="right"
            sideOffset={112}
          >
            <Color bgColor={globalBackground} />
          </Popover>
          <Hex setValue={handleChangeHex} type="text" value={inputColor} />
        </Wrapper>
      </Container>
    </>
  )
}
