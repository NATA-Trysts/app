import { ReactNode } from 'react'
import styled from 'styled-components'

import { TAB_CATEGORY_COLOR } from '@/libs/constants'

const CategoryItemContainer = styled.li<{ isActive: boolean }>`
  margin: 8px 0;
  padding: 8px;
  border-radius: 8px;
  background-color: transparent;
  background-image: none;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  background: ${({ isActive }) => (isActive ? TAB_CATEGORY_COLOR['background'] : 'none')};
  filter: ${({ isActive }) => (isActive ? TAB_CATEGORY_COLOR['filter'] : 'none')};
  cursor: pointer;

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

type CategoryItemProps = {
  icon: ReactNode
  isActive: boolean
  onClick: () => void
}

export const CategoryItem = ({ icon, onClick, isActive }: CategoryItemProps) => {
  return (
    <CategoryItemContainer isActive={isActive} onClick={onClick}>
      {icon}
    </CategoryItemContainer>
  )
}
