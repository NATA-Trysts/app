import styled from 'styled-components'

import { Text } from '../Commons'

const TitleContainer = styled.div`
  width: 100vw;
  text-align: center;

  // disable user selection
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Main = styled.div`
  padding-top: 24px;
`

const Subtitle = styled(Text)`
  color: #bbbbbb;
`

export const PricingTitle = () => {
  return (
    <TitleContainer>
      <Main>
        <Text size="x-large" weight="normal">
          Transparent Pricing
        </Text>
        <br />
        <Text size="x-large" weight="normal">
          Based on your team - No credit card required
        </Text>
      </Main>
      <Subtitle size="large" weight="lighter">
        We&#39;ll ask you before charge every month
      </Subtitle>
    </TitleContainer>
  )
}
