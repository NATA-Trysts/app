import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as HelpIcon } from '@/assets/icons/help.svg'
import { Text } from '@/layouts/common'
import { FILTER_ICON_TO_WHITE } from '@/libs/constants'
import { useDashboardStore } from '@/stores'

const HelpTitle = styled(Text)<{ isDisplayed: boolean }>`
  display: ${({ isDisplayed }) => (isDisplayed ? 'block' : 'none')};
  margin-left: 12px;
  color: #838383;
  transition: color 0.3s ease;
`

const NavigationHelpContainer = styled.div`
  width: 100%;
  height: 36px;
  background-color: #121316;
  border: 1px solid transparent;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  margin-top: 12px;
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid #424242;

    svg {
      filter: ${FILTER_ICON_TO_WHITE};
    }

    ${HelpTitle} {
      color: #fff;
    }
  }
`

const HelpWrapper = styled.div<{ isDisplayed: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ isDisplayed }) => (isDisplayed ? '16px' : '50%')};
  transform: ${({ isDisplayed }) => (isDisplayed ? 'translateY(-50%)' : 'translate(-50%, -50%)')};
  display: flex;
  align-items: center;
`

export const NavigationHelp = () => {
  const isExpanded = useDashboardStore((state) => state.isExpanded)
  const [isDisplayed, setIsDisplayed] = useState(isExpanded)

  // delay display of help title to prevent flickering
  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => setIsDisplayed(true), 200)
    } else {
      setIsDisplayed(false)
    }
  }, [isExpanded])

  return (
    <NavigationHelpContainer>
      <HelpWrapper isDisplayed={isDisplayed}>
        <HelpIcon />
        <HelpTitle isDisplayed={isDisplayed} size="medium" weight="lighter">
          Help & Feedback
        </HelpTitle>
      </HelpWrapper>
    </NavigationHelpContainer>
  )
}
