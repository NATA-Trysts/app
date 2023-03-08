import { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as AllIcon } from '@/assets/icons/all-application.svg'
import { ReactComponent as SmileFaceIcon } from '@/assets/icons/smile-face.svg'
import { CategoryType, useBuilderStore } from '@/stores'

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

type Category = {
  id: number
  icon: ReactNode
  name: CategoryType
  isActive: boolean
}

export const BuilderTab = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      icon: <AllIcon />,
      name: 'Animal', // temp
      isActive: true,
    },
    {
      id: 2,
      icon: <SmileFaceIcon />,
      name: 'ThreeJS', // temp
      isActive: false,
    },
  ])
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
