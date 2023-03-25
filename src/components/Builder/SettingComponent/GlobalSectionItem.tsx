import { useCallback } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { MultiToggle } from '@/components/Commons/MultiToggle'
import { useBuilderStore } from '@/stores'

const Container = styled.div`
  width: 100%;
  height: 28px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Property = styled(Text)`
  color: #727272;
  text-transform: capitalize;
`

const Wrapper = styled.div`
  width: 124px;
  height: 28px;

  > div {
    height: 100%;
    justify-content: flex-end;

    label {
      display: block;
      width: 58px;
      text-align: center;
      text-transform: capitalize;
      padding: 4px 0;
      span {
        font-size: 12px;
      }
      input {
        display: none;
      }
    }

    .selected {
      background: #c771e1;
      span {
        color: white;
        font-weight: 600;
      }
    }
  }
`

type GlobalSectionItemProps = {
  property: string
  options: { value: string | boolean; display: string }[]
  selected: string | boolean
}

export const GlobalSectionItem = ({ property, options, selected }: GlobalSectionItemProps) => {
  const [updateGlobalSettings] = useBuilderStore((state) => [state.updateGlobalSettings])

  const handleChange = useCallback(
    (data: any) => {
      updateGlobalSettings(property, data)
    },
    [property, updateGlobalSettings],
  )

  return (
    <Container>
      <Property size="small" weight="normal">
        {property}
      </Property>
      <Wrapper>
        <MultiToggle handleSelectedChange={handleChange} name={property} options={options} selected={selected} />
      </Wrapper>
    </Container>
  )
}
