import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useEditCharacterStore } from '@/stores'

import { dummyData } from './dummyData'

const ContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 16px 0;

  > div {
    opacity: 1;
  }

  &:hover > div:not(:hover) {
    opacity: 0.7;
  }

  > div:hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  transition: opacity 0.2s ease;
`

const Title = styled(Text)`
  text-transform: capitalize;
`

const ListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  padding-bottom: 24px;
`

const Item = styled.div<{ isActive: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid ${({ isActive }) => (isActive ? '#FF938A !important' : 'transparent')};
  box-shadow: ${({ isActive }) =>
    isActive ? '0px 22px 26px rgba(234, 144, 144, 0.14), 0px 4.4px 4.225px rgba(234, 144, 144, 0.07)' : 'none'};
  transition: border-color 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: white;
  }
`

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Content = () => {
  const [categorySelectedId, categorySelectedItemIds, setCategorySelectedItemIds] = useEditCharacterStore((state) => [
    state.categorySelectedId,
    state.categorySelectedItemIds,
    state.setCategorySelectedItemIds,
  ])

  const handleClickItem = (categoryId: string, subcategoryId: string, itemId: string) => {
    setCategorySelectedItemIds(categoryId, subcategoryId, itemId)
  }

  const checkActive = (categoryId: string, subcategoryId: string, itemId: string) => {
    const category = categorySelectedItemIds.get(categoryId)

    if (category) {
      for (const subcategory of category) {
        if (subcategory.id === subcategoryId) {
          return subcategory.itemId === itemId
        }
      }
    }

    return false
  }

  return (
    <ContentContainer>
      {Object.entries((dummyData as any)[categorySelectedId].subCategories).map(([id, subCategory], index) => (
        <Wrapper key={index}>
          <Title size="medium" weight="normal">
            {(subCategory as any).title}
          </Title>
          <div>
            {Object.values((subCategory as any).list).map((item, index) => (
              <div key={index}>
                <Text size="small" weight="normal">
                  {(item as any).title}
                </Text>
                <ListItem>
                  {(item as any).values.map((value: any) => (
                    <Item
                      key={value.id}
                      isActive={checkActive(categorySelectedId, id, value.id)}
                      onClick={() => handleClickItem(categorySelectedId, id, value.id)}
                    >
                      <ItemImg src={value.thumbnail} />
                    </Item>
                  ))}
                </ListItem>
              </div>
            ))}
          </div>
        </Wrapper>
      ))}
    </ContentContainer>
  )
}
