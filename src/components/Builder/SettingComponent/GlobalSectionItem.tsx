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
`

const Wrapper = styled.div`
  width: 136px;
  height: 28px;

  > div {
    height: 100%;
    justify-content: flex-end;

    label {
      padding: 5px 20px;
      span {
        font-size: 12px;
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
}

export const GlobalSectionItem = ({ property }: GlobalSectionItemProps) => {
  const handleChange = () => {}

  return (
    <Container>
      <Property size="small" weight="normal">
        {property}
      </Property>
      <Wrapper>
        <MultiToggle
          handleSelectedChange={handleChange}
          options={[
            { value: true, display: 'Yes' },
            { value: false, display: 'No' },
          ]}
          selected={true}
        />
      </Wrapper>
    </Container>
  )
}
