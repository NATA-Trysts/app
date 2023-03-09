import styled from 'styled-components'

import { Text } from '@/components/Commons'

const PayButtonsContainer = styled.div<{ top: number }>`
  position: relative;
  top: ${({ top }) => top}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PayButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(90deg, #AA7AC5 0%, #C974E3 50%, #E7A4F8 100%) !important' : 'transparent'};
  border: none;
  padding: 8px 16px;
  margin: 4px;
  border-radius: 12px;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #281944;
  }
`

type PayButtonsProps = {
  top?: number
}

export const PayButtons = ({ top = 40 }: PayButtonsProps) => {
  return (
    <PayButtonsContainer top={top}>
      <PayButton isActive={true}>
        <Text size="medium" weight="lighter">
          Pay monthly
        </Text>
      </PayButton>
      <PayButton isActive={false}>
        <Text size="medium" weight="lighter">
          Pay yearly
        </Text>
      </PayButton>
    </PayButtonsContainer>
  )
}
