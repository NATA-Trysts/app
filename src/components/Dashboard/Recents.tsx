import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { SpacePreviewCard } from '../SpacePreviewCard'

const RecentContainer = styled.section`
  width: 100%;
  height: auto;
  background-color: #191a1d;
  border-radius: 16px;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 20px;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 8px 0;
`

type Space = {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  isActive: boolean
}

type RecentProps = {
  list: Space[]
  onClickCard: (id: string) => void
}

export const Recents = ({ list, onClickCard }: RecentProps) => {
  return (
    <>
      {list.length !== 0 ? (
        <RecentContainer>
          <Wrapper>
            <Text size="large" weight="normal">
              Recents
            </Text>
            <List>
              {list.map((item) => (
                <SpacePreviewCard
                  key={item.id}
                  imageUrl={item.imageUrl}
                  isActive={item.isActive}
                  subtitle={item.subtitle}
                  title={item.title}
                  onClick={() => onClickCard(item.id)}
                />
              ))}
            </List>
          </Wrapper>
        </RecentContainer>
      ) : null}
    </>
  )
}
