import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { SpacePreviewCard } from '../SpacePreviewCard'

const ExploreContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 16px 20px 50px 20px;
`

const Wrapper = styled.div`
  width: 100%;
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

type ExploreProps = {
  list: Space[]
  onClickCard: (id: string) => void
}

export const Explores = ({ list, onClickCard }: ExploreProps) => {
  return (
    <ExploreContainer>
      <Wrapper>
        <Text size="large" weight="normal">
          Explores
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
    </ExploreContainer>
  )
}
