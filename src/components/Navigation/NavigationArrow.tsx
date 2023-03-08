import styled from 'styled-components'

import { ReactComponent as ArrowGray } from '@/assets/icons/arrow-gray.svg'
import { useDashboardStore } from '@/stores'

const ArrowContainer = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  background-color: #191a1d;
  border: 1px solid transparent;
  border-radius: 8px;
  top: 50%;
  right: -16px;
  transform: translateY(-50%);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #292a2e;
    border: 1px solid #424242;
  }

  svg {
    transition: transform 0.4s ease;
    transform: ${({ isExpanded }) => (isExpanded ? 'rotate(0deg)' : 'rotate(180deg)')};
  }
`

export const NavigationArrow = () => {
  const [isExpanded, setIsExpanded] = useDashboardStore((state) => [state.isExpanded, state.setIsExpanded])

  return (
    <ArrowContainer isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
      <ArrowGray />
    </ArrowContainer>
  )
}
