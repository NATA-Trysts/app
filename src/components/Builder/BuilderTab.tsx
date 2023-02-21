import { useEffect } from 'react'
import styled from 'styled-components'

import { useBuilderStore } from '@/stores/builder'

import { BuilderHelp } from './BuilderHelp'
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

export const BuilderTab = () => {
  const [categories, setCategories] = useBuilderStore((state) => [state.categories, state.setCategories])
  const setSelectedCategory = useBuilderStore((state) => state.setSelectedCategory)

  const handleClickTab = (id: number) => {
    const newCategories = categories.map((category) => {
      if (category.id === id) {
        return {
          ...category,
          isActive: true,
        }
      } else {
        return {
          ...category,
          isActive: false,
        }
      }
    })

    setCategories(newCategories)
  }

  useEffect(() => {
    const newSelectedCategory = categories.find((category) => category.isActive === true)

    if (newSelectedCategory) {
      setSelectedCategory(newSelectedCategory.name)
    }
  }, [categories, setSelectedCategory])

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
