import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SpacePreviewCard } from '@/components/SpacePreviewCard'
import { Space as SpaceType } from '@/stores'

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

type ExploresProps = {
  spaces: SpaceType[]
}

export const Explores = ({ spaces }: ExploresProps) => {
  const { calculateTimeAgo } = useDashboard()

  return (
    <ExploreContainer>
      <Wrapper>
        <Text size="large" weight="normal">
          Explores
        </Text>
        <List>
          {spaces.map((item) => (
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
