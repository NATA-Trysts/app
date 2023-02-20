import styled from 'styled-components'

import { BuilderHelp } from './BuilderHelp'
import { Category as CategoryType } from './BuilderPanel'
import { CategoryItem } from './CategoryItem'

const BuilderTabContainer = styled.div`
  height: 100%;
  width: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

const CategoryList = styled.ul`
  list-style-type: none;
`

const Dash = styled.div`
  width: 32px;
  height: 1.5px;
  background-color: #212225;
  border-radius: 8px;
  margin-top: 4px;
`

type BuilderTabProps = {
  categories: CategoryType[]
  handleClickTab: (id: number) => void
}

export const BuilderTab = ({ categories, handleClickTab }: BuilderTabProps) => {
  return (
    <BuilderTabContainer>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            icon={category.icon}
            isActive={category.isActive}
            onClick={() => handleClickTab(category.id)}
          />
        ))}
        <Dash />
      </CategoryList>
      <BuilderHelp />
    </BuilderTabContainer>
  )
}
