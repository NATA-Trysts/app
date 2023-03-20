import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { MultiToggle } from '@/components/Commons/MultiToggle'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 128px;
  align-items: center;
  margin: 4px 0;
`

const Name = styled(Text)`
  color: #727272;
`

const Wrapper = styled.div`
  width: 100%;
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

export const BackgroundMusicSelect = () => {
  return (
    <Container>
      <Name size="small" weight="lighter">
        Background music
      </Name>

      <Wrapper>
        <MultiToggle
          handleSelectedChange={() => {}} // param: value
          options={[
            { value: 'on', display: 'On' },
            { value: 'off', display: 'Off' },
          ]}
          selected={'on'}
        />
      </Wrapper>
    </Container>
  )
}
