import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { ModifierValueType } from '@/stores'

import { useBuilder } from '../hooks/useBuilder'
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
  text-transform: capitalize;
`

const ModifierItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Item = styled.div`
  width: 42px;
  height: 28px;
  margin: 0 4px;
  border-radius: 6px;
  background-color: #37393e;
  display: flex;
  align-items: center;
`

const Value = styled.input`
  width: 22px;
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
  name: string
  values: ModifierValueType
  canBeNegative?: boolean
  onChange: (property: string, axis: string, value: number | string) => void
  onFocus?: () => void
  onBlur?: () => void
}

export const Modifier = ({
  name,
  values,
  canBeNegative,
  onChange,
  onFocus = () => {},
  onBlur = () => {},
}: ModifierProps) => {
  const { removeLeadingZero } = useBuilder()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if empty field, set value to 0, else remove the leading 0
    const value = e.target.value === '' ? 0 : removeLeadingZero(e.target.value)

    onChange(name, e.target.name, value)
  }

  const handleDrag = (value: number, axisName: string) => {
    onChange(name, axisName, value)
  }

  return (
    <Container>
      <PropertyName size="small" weight="normal">
        {name}
      </PropertyName>
      <ModifierItemsContainer>
        <Item>
          <DragLabel axisName="x" canBeNegative={canBeNegative} setValue={handleDrag} value={values.x} />
          <Value
            name="x"
            type="number"
            value={values.x}
            onBlur={onBlur}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onFocus={onFocus}
          />
        </Item>
        <Item>
          <DragLabel axisName="y" canBeNegative={canBeNegative} setValue={handleDrag} value={values.y} />
          <Value
            name="y"
            type="number"
            value={values.y}
            onBlur={onBlur}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onFocus={onFocus}
          />
        </Item>
        <Item>
          <DragLabel axisName="z" canBeNegative={canBeNegative} setValue={handleDrag} value={values.z} />
          <Value
            name="z"
            type="number"
            value={values.z}
            onBlur={onBlur}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onFocus={onFocus}
          />
        </Item>
      </ModifierItemsContainer>
    </Container>
  )
}
