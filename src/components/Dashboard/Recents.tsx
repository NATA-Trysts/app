import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SpacePreviewCard } from '@/components/PreviewCard'

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
  const { calculateTimeAgo, sortRecentSpace, librarySpaces } = useDashboard()

  const recentSpaces = sortRecentSpace(librarySpaces.get('custom')).slice(0, 4)

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
                  space={item}
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
