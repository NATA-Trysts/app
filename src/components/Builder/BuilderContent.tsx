import styled from 'styled-components'

import { SubCategoryItem, useBuilderStore } from '@/stores'

import { BuilderSubCategory } from './BuilderSubCategory'
import { useBuilder } from './hooks/useBuilder'
import { ModelPreview } from './ModelPreview'

const BuilderContentContainer = styled.div<{ isLoading: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)}; // temp
  transition: opacity 0.2s ease;
`

type BuilderContentProps = {
  isLoading: boolean
}

export const BuilderContent = ({ isLoading }: BuilderContentProps) => {
  const [subCategoryItems, selectedCategoryName, selectedSubCategoryItems] = useBuilderStore((state) => [
    state.subCategoryItems,
    state.selectedCategoryName,
    state.selectedSubCategoryItems,
  ])
  const { clickSubCategory } = useBuilder()

  const handleSelectSubCategory = (item: SubCategoryItem) => {
    clickSubCategory(item)
  }

  return (
    <BuilderContentContainer isLoading={isLoading}>
      <ModelPreview />
      <BuilderSubCategory
        list={subCategoryItems.get(selectedCategoryName)}
        selectedId={selectedSubCategoryItems.get(selectedCategoryName)?.id}
        onClickItem={handleSelectSubCategory}
      />
    </BuilderContentContainer>
  )
}
