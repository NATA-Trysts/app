import styled from 'styled-components'

import { useDashboardStore } from '@/stores/dashboard'

import { NavigationArrow } from './NavigationArrow'
import { NavigationHelp } from './NavigationHelp'
import { NavigationItems } from './NavigationItems'
import { NavigationProfile } from './NavigationProfile'

const NavigationPanelContainer = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  width: ${({ isExpanded }) => (isExpanded ? '224px' : '60px')};
  height: 100%;
  left: 16px;
  background-color: #191a1d;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease;
`

const NavigationPanelBody = styled.div<{ isExpanded: boolean }>`
  width: ${({ isExpanded }) => (isExpanded ? '200px' : '36px')};
  height: 100%;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
`

const UpperSection = styled.div``

const LowerSection = styled.div``

export const NavigationPanel = () => {
  const isExpanded = useDashboardStore((state) => state.isExpanded)

  return (
    <NavigationPanelContainer isExpanded={isExpanded}>
      <NavigationPanelBody isExpanded={isExpanded}>
        <UpperSection>
          <NavigationItems />
        </UpperSection>
        <LowerSection>
          <NavigationProfile />
          <NavigationHelp />
        </LowerSection>
      </NavigationPanelBody>
      <NavigationArrow />
    </NavigationPanelContainer>
  )
}
