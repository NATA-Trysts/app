import { useState } from 'react'
import styled from 'styled-components'

import { Header } from '@/components/Commons/Header'
import { PayButtons, Plans, PricingTitle } from '@/components/Pricing'
import { PricingModal } from '@/components/Pricing/PricingModal'

const PricingPage = styled.div`
  min-height: calc(100vh + 76px);
  background-color: #090118;
`

const Wrapper = styled.div`
  position: relative;
  padding-top: 76px;
`

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <PricingPage>
      <Header />
      <Wrapper>
        <PricingTitle />
        <PayButtons />
        <Plans />
      </Wrapper>
      {/* TEST PRICING MODAL */}
      <PricingModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </PricingPage>
  )
}

export default Pricing
