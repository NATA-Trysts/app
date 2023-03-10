import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useEditCharacterStore } from '@/stores'

const ContentContainer = styled.div`
  left: 72px;

  width: 100%;
  height: 548px;
  margin: 16px 0;
`

const Title = styled(Text)`
  text-transform: capitalize;
`

const ListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 24px;
`

const Item = styled.div`
  width: 60px;
  height: 60px;
  background-color: #d9d9d9;
  border-radius: 8px;
  border-width: 3px;
  border-style: solid;
  /* FF938A */
  border-color: transparent;
  cursor: pointer;

  &:hover {
    border-color: white;
  }
`

export const Content = () => {
  const list = new Map([
    [
      1,
      [
        {
          id: 1,
          title: 'skin 1',
          values: [
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
          ],
        },
        {
          id: 2,
          title: 'skin 2',
          values: [
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
          ],
        },
      ],
    ],
    [
      2,
      [
        {
          id: 1,
          title: 'hair 1',
          values: [
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
          ],
        },
        {
          id: 2,
          title: 'hair 2',
          values: [
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
            'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
          ],
        },
      ],
    ],
  ])

  const [categorySelectedId] = useEditCharacterStore((state) => [state.categorySelectedId])

  return (
    <ContentContainer>
      {list.get(categorySelectedId)?.map((item) => (
        <>
          <Title size="medium" weight="normal">
            {item.title}
          </Title>
          <ListItem>
            <Item />
            <Item />
            <Item />
          </ListItem>
        </>
      ))}
    </ContentContainer>
  )
}
