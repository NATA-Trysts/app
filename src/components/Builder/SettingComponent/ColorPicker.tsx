import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

import { Popover } from '@/components/Popover'
import { Text } from '@/layouts/common'

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

export const ColorPicker = () => {
  const [color, setColor] = useState('#D9D9D9')

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
                <HexColorPicker color={color} onChange={setColor} />
              </PickerWrapper>
            }
            side="right"
            sideOffset={112}
          >
            <Color bgColor={color} />
          </Popover>
          <Hex />
        </Wrapper>
      </Container>
    </>
  )
}
