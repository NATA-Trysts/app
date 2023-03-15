import styled from 'styled-components'

import { Text } from '@/components/Commons'

import { CardSkeleton } from './CardSkeleton'

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

export const RecentSkeleton = () => {
  return (
    <RecentContainer>
      <Wrapper>
        <Text size="large" weight="normal">
          Recents
        </Text>
        <List>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <CardSkeleton key={index} />
            ))}
        </List>
      </Wrapper>
    </RecentContainer>
  )
}
