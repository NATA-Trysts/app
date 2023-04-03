import styled from 'styled-components'

import { ReactComponent as AllApplication } from '@/assets/icons/all-application.svg'
import { ReactComponent as SmileFace } from '@/assets/icons/smile-face.svg'
import { WithTooltip } from '@/components/Toolbar'
import { useEditCharacterStore } from '@/stores'

const CategoryContainer = styled.div`
  width: 40px;
  height: 548px;
  margin: 16px;
`

const CategoryItem = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 40px;
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(90deg, #FF958A -1.56%, #FF6E88 50.54%, #FF93A7 101.56%) !important' : 'transparent'};
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  svg {
    ${({ isActive }) =>
      isActive
        ? 'filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(461%) hue-rotate(210deg) brightness(117%) contrast(100%);'
        : ''}
  }

  &:hover {
    background: #212225;
    svg {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(461%) hue-rotate(210deg) brightness(117%)
        contrast(100%);
    }
  }

  .react-tooltip {
    background: #191a1d;
    text-transform: capitalize;
  }
`

export const Category = () => {
  const categories = [
    {
      type: 'skin',
      name: 'skin',
      icon: <AllApplication />,
    },
    {
      type: 'hair',
      name: 'hair',
      icon: <SmileFace />,
    },
    {
      type: 'upper',
      name: 'upper',
      icon: <SmileFace />,
    },
    {
      type: 'lower',
      name: 'lower',
      icon: <SmileFace />,
    },
    {
      type: 'shoe',
      name: 'shoes',
      icon: <SmileFace />,
    },
    {
      type: 'accessory',
      name: 'accessories',
      icon: <SmileFace />,
    },
  ]

  const [categorySelectedId, setCategorySelectedId] = useEditCharacterStore((state) => [
    state.categorySelectedId,
    state.setCategorySelectedId,
  ])

  return (
    <CategoryContainer>
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.type}
            isActive={category.type === categorySelectedId}
            onClick={() => setCategorySelectedId(category.type)}
          >
            <WithTooltip active={true} content={category.name} id={category.name} offset={30} place="left">
              {category.icon}
            </WithTooltip>
          </CategoryItem>
        )
      })}
    </CategoryContainer>
  )
}
