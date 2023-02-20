import styled from 'styled-components'

import { SubCategoryItem, useBuilderStore } from '@/stores/builder'

import { BuilderSubCategory } from './BuilderSubCategory'
import { ItemDescription } from './ItemDescription'

const BuilderContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.1s ease;
`

const Preview = styled.div`
  width: 218px;
  height: 218px;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  margin: 8px;
`

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BuilderContent = () => {
  const subCategoryItems = useBuilderStore((state) => state.subCategoryItems)
  const [selectedSubCategoryItem, setSelectedSubCategoryItem] = useBuilderStore((state) => [
    state.selectedSubCategoryItem,
    state.setSelectedSubCategoryItem,
  ])

  const handleSelectSubCategory = (item: SubCategoryItem) => {
    setSelectedSubCategoryItem(item)
  }

  return (
    <BuilderContentContainer>
      <Preview>
        <PreviewImg alt="Preview" loading="lazy" src={selectedSubCategoryItem.img} />
      </Preview>
      <ItemDescription description={selectedSubCategoryItem.description} name={selectedSubCategoryItem.name} />
      <BuilderSubCategory
        list={subCategoryItems}
        selectedId={selectedSubCategoryItem.id}
        onClickItem={handleSelectSubCategory}
      />
    </BuilderContentContainer>
  )
}
