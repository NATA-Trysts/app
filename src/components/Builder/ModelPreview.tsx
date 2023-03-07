import React from 'react'
import styled from 'styled-components'

import { useBuilderStore } from '@/stores/builder'

import { ItemDescription } from './ItemDescription'

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

export const ModelPreview = () => {
  const [selectedCategoryName, selectedSubCategoryItems] = useBuilderStore((state) => [
    state.selectedCategoryName,
    state.selectedSubCategoryItems,
  ])

  return (
    <>
      <Preview>
        <PreviewImg alt="Preview" loading="lazy" src={selectedSubCategoryItems.get(selectedCategoryName)?.img} />
      </Preview>
      <ItemDescription
        description={selectedSubCategoryItems.get(selectedCategoryName)?.description}
        name={selectedSubCategoryItems.get(selectedCategoryName)?.name}
      />
    </>
  )
}
