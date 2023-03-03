import { useCallback } from 'react'
import styled from 'styled-components'

import { MultiToggle } from '@/components/Commons/MultiToggle'
import { Text } from '@/layouts/common'

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
  width: 136px;
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
  handleGlobalSettingChange: (property: string, value: string | boolean) => void
}

export const GlobalSectionItem = ({
  property,
  options,
  selected,
  handleGlobalSettingChange,
}: GlobalSectionItemProps) => {
  const handleChange = useCallback((data: any) => {
    handleGlobalSettingChange(property, data)
  }, [])

  return (
    <Container>
      <Property size="small" weight="normal">
        {property}
      </Property>
      <Wrapper>
        <MultiToggle handleSelectedChange={handleChange} options={options} selected={selected} />
      </Wrapper>
    </Container>
  )
}
