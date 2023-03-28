import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { Popover } from '@/components/Popover'
import { useBuilderStore } from '@/stores'

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

const Hex = styled.input`
  width: 120px;
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

export const ColorPicker = () => {
  const [globalBackground, setGlobalBackground] = useBuilderStore((state) => [
    state.globalBackground,
    state.setGlobalBackground,
  ])

  const [inputColor, setInputColor] = useState(globalBackground)

  const handleChangeHex = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hexRegex.test(e.target.value)) {
      setGlobalBackground(e.target.value)
    }

    if (e.target.value.length <= 7) {
      setInputColor(e.target.value)
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
          <Hex type="text" value={inputColor} onChange={handleChangeHex} />
        </Wrapper>
      </Container>
    </>
  )
}
