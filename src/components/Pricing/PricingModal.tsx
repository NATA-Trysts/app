import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg'
import { Text } from '@/components/Commons'

import { createContainer } from './container'
import { PayButtons } from './PayButtons'
import { Plans } from './Plans'

const PricingModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 720px;
  background: #191a1d;
  border-radius: 20px;
  padding: 32px;
  position: relative;
`

const Title = styled(Text)``

const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 24px;
  height: 24px;
  background: #47494e;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`

const container = createContainer()

type PricingModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const PricingModal = ({ isOpen, setIsOpen }: PricingModalProps) => {
  if (!isOpen) return null
  else {
    return createPortal(
      <PricingModalOverlay onClick={() => setIsOpen(false)}>
        <Wrapper onClick={(e) => e.stopPropagation()}>
          <Title size="large" weight="normal">
            Select your plan
          </Title>
          <CloseButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </CloseButton>
          <PayButtons top={16} />
          <Plans haveFreePlan={false} padding="20px 0" />
        </Wrapper>
      </PricingModalOverlay>,
      container,
    )
  }
}
