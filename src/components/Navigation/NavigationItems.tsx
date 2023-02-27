import { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg'
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as LibraryIcon } from '@/assets/icons/library.svg'
import { Text } from '@/layouts/common'
import { FILTER_ICON_TO_WHITE } from '@/libs/constants'
import { useDashboardStore } from '@/stores/dashboard'

const NavigationItemsContainer = styled.div``

const List = styled.div`
  width: 100%;
  div:nth-child(2) {
    margin: 10px 0;
  }
`

const Title = styled(Text)<{ isActive: boolean; isDisplayed: boolean }>`
  display: ${({ isDisplayed }) => (isDisplayed ? 'block' : 'none')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#838383')};
  margin-left: 12px;
  transform: color 0.3s ease;
`

const Item = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 36px;
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(92.2deg, #2E74D4 1.17%, #7B88D6 99.63%); !important' : 'transparent'}; // temp
  border: ${({ isActive }) => (isActive ? '1px solid transparent !important' : '1px solid transparent')};
  filter: ${({ isActive }) =>
    isActive
      ? 'drop-shadow(0px 5px 36px rgba(87, 130, 187, 0.51)) drop-shadow(0px 1px 5.85px rgba(87, 130, 187, 0.255));'
      : 'none'};
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    filter: ${({ isActive }) => (isActive ? FILTER_ICON_TO_WHITE : 'none')};
  }

  &:hover {
    border: 1px solid #424242;
    background-color: #292a2e;

    svg {
      filter: ${FILTER_ICON_TO_WHITE};
    }

    ${Title} {
      color: #fff;
    }
  }
`

const ItemWrapper = styled.div<{ isDisplayed: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ isDisplayed }) => (isDisplayed ? '16px' : '50%')};
  transform: ${({ isDisplayed }) => (isDisplayed ? 'translateY(-50%)' : 'translate(-50%, -50%)')};
  display: flex;
  align-items: flex-end;
`

type Item = {
  id: number
  title: string
  icon: ReactNode
  isActive: boolean
}

export const NavigationItems = () => {
  const isExpanded = useDashboardStore((state) => state.isExpanded)
  const [isDisplayed, setIsDisplayed] = useState(isExpanded)
  const [listItems, setListItems] = useState<Item[]>([
    {
      id: 1,
      title: 'Home',
      icon: <HomeIcon />,
      isActive: true,
    },
    {
      id: 2,
      title: 'My files',
      icon: <EditIcon />,
      isActive: false,
    },
    {
      id: 3,
      title: 'Libraries',
      icon: <LibraryIcon />,
      isActive: false,
    },
  ])

  // delay display of title to prevent flickering
  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => setIsDisplayed(true), 160)
    } else {
      setIsDisplayed(false)
    }
  }, [isExpanded])

  const handleItemClick = (id: number) => {
    setListItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isActive: true,
          }
        }

        return {
          ...item,
          isActive: false,
        }
      }),
    )
  }

  return (
    <NavigationItemsContainer>
      <List>
        {listItems.map((item) => (
          <Item key={item.id} isActive={item.isActive} onClick={() => handleItemClick(item.id)}>
            <ItemWrapper isDisplayed={isDisplayed}>
              {item.icon}
              <Title isActive={item.isActive} isDisplayed={isDisplayed} size="medium" weight="lighter">
                {item.title}
              </Title>
            </ItemWrapper>
          </Item>
        ))}
      </List>
    </NavigationItemsContainer>
  )
}
