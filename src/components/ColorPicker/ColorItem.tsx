import React from 'react'
import styled from 'styled-components'

import { CustomColor } from '../../layouts/common'
import { COLOR_PICKER_LIST } from '../../libs/constants'

const Container = styled.div`
  width: 70px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    border: 1px solid #424242;
    background: #292a2e;
  }
`

const Item = styled.button<{ color: CustomColor }>`
  width: 58px;
  aspect-ratio: 1/1;
  background: ${(props) => COLOR_PICKER_LIST[props.color]};
  cursor: pointer;
  border-radius: 4px;
  border: none;
`

export const ColorItem = ({ colorName, onChangeColor }: { colorName: CustomColor; onChangeColor: () => void }) => {
  return (
    <Container>
      <Wrapper>
        <Item color={colorName} onClick={onChangeColor} />
      </Wrapper>
    </Container>
  )
}
