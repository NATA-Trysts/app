import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useEditCharacterStore } from '@/stores'

import { listTattoos } from './dummyData'

const TattooSectionContainer = styled.div`
  margin: 16px 0;
  transition: opacity 0.2s ease;
`

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  margin-top: 8px;
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

export const TattooSection = () => {
  const [tattooSelectedId, setTattooSelectedId] = useEditCharacterStore((state) => [
    state.tattooSelectedId,
    state.setTattooSelectedId,
  ])

  const handleSelectTattoo = (id: number) => {
    // if selectedId is equal to id, set selectedId to -1, else set the tattooSelectedId to id
    setTattooSelectedId(tattooSelectedId === id ? -1 : id)
  }

  return (
    <TattooSectionContainer>
      <Text size="medium" weight="normal">
        Tattoo
      </Text>
      <ListWrapper>
        {listTattoos.map((item) => {
          return (
            <Item key={item.id} isActive={item.id === tattooSelectedId} onClick={() => handleSelectTattoo(item.id)}>
              <ItemImg src={item.img} />
            </Item>
          )
        })}
      </ListWrapper>
    </TattooSectionContainer>
  )
}
