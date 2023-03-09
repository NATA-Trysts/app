import styled from 'styled-components'

import { ReactComponent as AllApplication } from '@/assets/icons/all-application.svg'
import { ReactComponent as SmileFace } from '@/assets/icons/smile-face.svg'
import { useEditCharacterStore } from '@/stores'

const CategoryContainer = styled.div`
  position: absolute;

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
`

export const Category = () => {
  const categories = [
    {
      id: 1,
      name: 'skin',
      icon: <AllApplication />,
    },
    {
      id: 2,
      name: 'hair',
      icon: <SmileFace />,
    },
    {
      id: 3,
      name: 'shoes',
      icon: <SmileFace />,
    },
    {
      id: 4,
      name: 'upper',
      icon: <SmileFace />,
    },
    {
      id: 5,
      name: 'lower',
      icon: <SmileFace />,
    },
    {
      id: 6,
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
            key={category.id}
            isActive={category.id === categorySelectedId}
            onClick={() => setCategorySelectedId(category.id)}
          >
            {category.icon}
          </CategoryItem>
        )
      })}
    </CategoryContainer>
  )
}
