import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { SubCategoryItem as SubCategoryItemType } from '@/stores'

const BuilderSubCategoryContainer = styled.div`
  width: 218px;
  height: calc(100% - 360px);
  margin-top: 20px;
`

const SubCategoryList = styled.div`
  width: 100%;
  max-height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;

  // temporary
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

const SubCategoryItem = styled.button<{ active: boolean }>`
  width: 68px;
  height: 68px;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  outline: 3px solid ${({ active }) => (active ? '#696969' : 'transparent')};
  transition: outline 0.2s ease;
  cursor: pointer;
`

const SubCategoryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: scale 0.3s ease;

  &:hover {
    scale: 1.2;
  }
`

type SubCategoryItemProps = {
  list?: SubCategoryItemType[]
  selectedId?: string
  onClickItem: (item: SubCategoryItemType) => void
}

export const BuilderSubCategory = ({ list, selectedId, onClickItem }: SubCategoryItemProps) => {
  const subCategoryListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedId) {
      const subCategoryList = subCategoryListRef.current
      const selectedElement = subCategoryList?.querySelector<HTMLElement>(`#sub-category-${selectedId}`)

      if (selectedElement && subCategoryList) {
        subCategoryList.scrollTop = selectedElement.offsetTop - subCategoryList.offsetTop
      }
    }
  }, [list])

  return (
    <BuilderSubCategoryContainer>
      <SubCategoryList ref={subCategoryListRef}>
        {list?.map((item) => (
          <SubCategoryItem
            key={item.uuid}
            active={selectedId === item.uuid}
            id={'sub-category-' + item.uuid.toString()}
            onClick={() => onClickItem(item)}
          >
            <SubCategoryImg
              alt={item.name}
              loading="lazy"
              src={
                item.thumbnail ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIE2Lcmdg3cD-7MR9wjwOO81cp7Lisx2b2Ww&usqp=CAU'
              }
            />
          </SubCategoryItem>
        ))}
      </SubCategoryList>
    </BuilderSubCategoryContainer>
  )
}
