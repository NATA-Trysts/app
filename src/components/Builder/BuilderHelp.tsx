import { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as HelpIcon } from '@/assets/icons/help.svg'
import { TAB_CATEGORY_COLOR } from '@/libs/constants'

const HelpContainer = styled.div<{ isActive: boolean }>`
  background-color: transparent;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  background: ${({ isActive }) => (isActive ? TAB_CATEGORY_COLOR['background'] : 'none')};
  filter: ${({ isActive }) => (isActive ? TAB_CATEGORY_COLOR['filter'] : 'none')};

  :hover {
    background-color: #212225;
  }

  svg {
    display: block;
    filter: ${({ isActive }) =>
      isActive
        ? 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(461%) hue-rotate(210deg) brightness(117%) contrast(100%);'
        : 'none'};
  }
`

export const BuilderHelp = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <HelpContainer isActive={isActive} onClick={() => setIsActive(!isActive)}>
      <HelpIcon />
    </HelpContainer>
  )
}
