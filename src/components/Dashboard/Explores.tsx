import styled from 'styled-components'

import { Text } from '@/layouts/common'
import { Space as SpaceType, useDashboardStore } from '@/stores'

import { SpacePreviewCard } from '../SpacePreviewCard'
import { useDashboard } from './hooks/useDashboard'

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

export const Explores = () => {
  const exploreSpaces: SpaceType[] = useDashboardStore((state) => state.exploreSpaces)

  const { calculateTimeAgo } = useDashboard()

  return (
    <ExploreContainer>
      <Wrapper>
        <Text size="large" weight="normal">
          Explores
        </Text>
        <List>
          {exploreSpaces.map((item) => (
            <SpacePreviewCard
              key={item.id}
              imageUrl={item.imageUrl}
              item={item}
              subtitle={`Edited ${calculateTimeAgo(item.timeStamp)}`}
              title={item.title}
            />
          ))}
        </List>
      </Wrapper>
    </ExploreContainer>
  )
}
