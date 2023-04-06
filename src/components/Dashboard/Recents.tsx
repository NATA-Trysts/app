import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SpacePreviewCard } from '@/components/SpacePreviewCard'
import { useDashboardStore } from '@/stores'

import { useDashboard } from './hooks/useDashboard'

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

export const Recents = () => {
  const [spaces] = useDashboardStore((state) => [state.mySpaces])

  const { calculateTimeAgo, sortRecentSpace } = useDashboard()

  const recentSpaces = sortRecentSpace(spaces).slice(0, 4)

  return (
    <>
      {!recentSpaces || recentSpaces.length === 0 ? null : (
        <RecentContainer>
          <Wrapper>
            <Text size="large" weight="normal">
              Recents
            </Text>
            <List>
              {recentSpaces.map((item) => (
                <SpacePreviewCard
                  key={item._id}
                  imageUrl={item.thumbnail}
                  item={item}
                  subtitle={`Edited ${calculateTimeAgo(item.latestEdited)}`}
                  title={item.name}
                />
              ))}
            </List>
          </Wrapper>
        </RecentContainer>
      )}
    </>
  )
}
