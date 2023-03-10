import { useState } from 'react'
import styled from 'styled-components'

import { Header } from '@/components/Header'
import { PayButtons, Plans, PricingTitle } from '@/components/Pricing'
import { PricingModal } from '@/components/Pricing/PricingModal'

const PricingPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #090118;
`

const Wrapper = styled.div`
  position: relative;
  padding-top: 100px;
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
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Open modal</button>
      <PricingModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </PricingPage>
  )
}

export default Pricing
