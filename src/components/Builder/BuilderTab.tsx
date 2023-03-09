import { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as AllIcon } from '@/assets/icons/all-application.svg'
import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow-left.svg'
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

const BackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 8px 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  :hover {
    background-color: #212225;
  }
`

const Upper = styled.div``

const Lower = styled.div``

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
  const navigate = useNavigate()

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

  const handleBack = () => {
    navigate('/dashboard', { replace: true })
  }

  useEffect(() => {
    const newSelectedCategory = categories.find((category) => category.isActive === true)

    if (newSelectedCategory) {
      setSelectedCategory(newSelectedCategory.name)
    }
  }, [categories, setSelectedCategory])

  return (
    <BuilderTabContainer>
      <Upper>
        <BackWrapper onClick={handleBack}>
          <ArrowLeft />
        </BackWrapper>
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
      </Upper>
      <Lower>
        <BuilderHelp />
      </Lower>
    </BuilderTabContainer>
  )
}
