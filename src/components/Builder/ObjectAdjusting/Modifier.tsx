import { useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { DragLabel } from './DragLabel'

const Container = styled.div`
  width: 100%;
  height: 28px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PropertyName = styled(Text)`
  color: #727272;
`

const ModifierItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Item = styled.div`
  width: 46px;
  height: 28px;
  margin: 0 4px;
  border-radius: 6px;
  background-color: #37393e;
  display: flex;
  align-items: center;
`

const Value = styled.input`
  width: 27px;
  color: #f7f6f6;
  background-color: #37393e;
  font-size: 12px;
  font-weight: 500;

  border: none;

  :focus {
    outline: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

type ModifierProps = {
  property: string
}

export const Modifier = ({ property }: ModifierProps) => {
  const [value, setValue] = useState({
    x: 10,
    y: 10,
    z: 10,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const handleDrag = (value: number, axisName: string) => {
    setValue((prev) => ({
      ...prev,
      [axisName]: value,
    }))
  }

  return (
    <Container>
      <PropertyName size="small" weight="normal">
        {property}
      </PropertyName>
      <ModifierItemsContainer>
        <Item>
          <DragLabel axisName="x" canBeNegative={false} setValue={handleDrag} value={value.x} />
          <Value
            name="x"
            type="number"
            value={value.x}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </Item>
        <Item>
          <DragLabel axisName="y" setValue={handleDrag} value={value.y} />
          <Value
            name="y"
            type="number"
            value={value.y}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </Item>
        <Item>
          <DragLabel axisName="z" setValue={handleDrag} value={value.z} />
          <Value
            name="z"
            type="number"
            value={value.z}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </Item>
      </ModifierItemsContainer>
    </Container>
  )
}
