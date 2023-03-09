import styled from 'styled-components'

import { Header } from '@/components/Header'
import { PayButtons, Plans, PricingTitle } from '@/components/Pricing'

const PricingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #090118;
`

const Wrapper = styled.div`
  position: relative;
  top: 100px;
`

const Pricing = () => {
  return (
    <PricingPage>
      <Header />
      <Wrapper>
        <PricingTitle />
        <PayButtons />
        <Plans />
      </Wrapper>
    </PricingPage>
  )
}

export default Pricing
