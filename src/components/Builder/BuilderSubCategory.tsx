import styled from 'styled-components'

import { SubCategoryItem as SubCategoryItemType } from '@/stores/builder'

const BuilderSubCategoryContainer = styled.div`
  width: 218px;
  height: auto;
  margin-top: 20px;
`

const SubCategoryList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;
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
  list: SubCategoryItemType[]
  selectedId: number
  onClickItem: (item: SubCategoryItemType) => void
}

export const BuilderSubCategory = ({ list, selectedId, onClickItem }: SubCategoryItemProps) => {
  return (
    <BuilderSubCategoryContainer>
      <SubCategoryList>
        {list.map((item) => (
          <SubCategoryItem key={item.id} active={selectedId === item.id} onClick={() => onClickItem(item)}>
            <SubCategoryImg alt={item.name} loading="lazy" src={item.img} />
          </SubCategoryItem>
        ))}
      </SubCategoryList>
    </BuilderSubCategoryContainer>
  )
}
