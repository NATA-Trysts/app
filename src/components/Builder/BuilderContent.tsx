import styled from 'styled-components'

import { SubCategoryItem, useBuilderStore } from '@/stores/builder'

import { BuilderSubCategory } from './BuilderSubCategory'
import { useBuilder } from './hooks/useBuilder'
import { ItemDescription } from './ItemDescription'

const BuilderContentContainer = styled.div<{ isLoading: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity 0.2s ease;
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

type BuilderContentProps = {
  isLoading: boolean
}

export const BuilderContent = ({ isLoading }: BuilderContentProps) => {
  const subCategoryItems = useBuilderStore((state) => state.subCategoryItems)
  const selectedCategoryName = useBuilderStore((state) => state.selectedCategoryName)
  const selectedSubCategoryItems = useBuilderStore((state) => state.selectedSubCategoryItems)
  const { clickSubCategory } = useBuilder()

  const handleSelectSubCategory = (item: SubCategoryItem) => {
    clickSubCategory(item)
  }

  return (
    <BuilderContentContainer isLoading={isLoading}>
      <Preview>
        <PreviewImg alt="Preview" loading="lazy" src={selectedSubCategoryItems.get(selectedCategoryName)?.img} />
      </Preview>
      <ItemDescription
        description={selectedSubCategoryItems.get(selectedCategoryName)?.description}
        name={selectedSubCategoryItems.get(selectedCategoryName)?.name}
      />
      <BuilderSubCategory
        list={subCategoryItems.get(selectedCategoryName)}
        selectedId={selectedSubCategoryItems.get(selectedCategoryName)?.id}
        onClickItem={handleSelectSubCategory}
      />
    </BuilderContentContainer>
  )
}
