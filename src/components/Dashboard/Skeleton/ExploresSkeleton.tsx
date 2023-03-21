import styled from 'styled-components'

import { Text } from '@/components/Commons'

import { CardSkeleton } from './CardSkeleton'

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

export const ExploresSkeleton = () => {
  return (
    <ExploreContainer>
      <Wrapper>
        <Text size="large" weight="normal">
          Explores
        </Text>
        <List>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <CardSkeleton key={index} />
            ))}
        </List>
      </Wrapper>
    </ExploreContainer>
  )
}
