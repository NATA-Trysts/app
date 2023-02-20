import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as AllIcon } from '@/assets/icons/all-application.svg'
import { ReactComponent as SmileFaceIcon } from '@/assets/icons/smile-face.svg'
import { subCategoryList, subCategoryList2, useBuilderStore } from '@/stores/builder'

import { BuilderContent } from './BuilderContent'
import { BuilderTab } from './BuilderTab'

const BuilderPanelContainer = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  bottom: 16px;
  width: 272px;
  height: calc(100vh - 32px);
  background-color: #191a1d;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export type Category = {
  id: number
  icon: JSX.Element
  isActive: boolean
}

export const BuilderPanel = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      icon: <AllIcon />,
      isActive: true,
    },
    {
      id: 2,
      icon: <SmileFaceIcon />,
      isActive: false,
    },
  ])
  const [subCategoryItems, setSubCategoryItems] = useBuilderStore((state) => [
    state.subCategoryItems,
    state.setSubCategoryItems,
  ])
  const setSelectedSubCategoryItem = useBuilderStore((state) => state.setSelectedSubCategoryItem)

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
    if (categories[0].isActive) {
      setSubCategoryItems(subCategoryList)
      setSelectedSubCategoryItem(subCategoryItems[0])
    } else {
      setSubCategoryItems(subCategoryList2)
      setSelectedSubCategoryItem(subCategoryItems[0])
    }
  }, [categories, setSubCategoryItems, setSelectedSubCategoryItem, subCategoryItems])

  return (
    <BuilderPanelContainer>
      <BuilderTab categories={categories} handleClickTab={handleClickTab} />
      <BuilderContent />
    </BuilderPanelContainer>
  )
}
