import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SpacePreviewCard } from '@/components/SpacePreviewCard'
import { Space as SpaceType, useDashboardStore } from '@/stores'

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
  const mySpaces: SpaceType[] = useDashboardStore((state) => state.mySpaces)
  const [recentSpaces, setRecentSpaces] = useState<SpaceType[]>([])

  const { calculateTimeAgo } = useDashboard()

  useEffect(() => {
    const recentSpaces = mySpaces
      .sort((a, b) => {
        return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()
      })
      .slice(0, 4)

    setRecentSpaces(recentSpaces)
  }, [mySpaces])

  return (
    <>
      {recentSpaces.length !== 0 ? (
        <RecentContainer>
          <Wrapper>
            <Text size="large" weight="normal">
              Recents
            </Text>
            <List>
              {recentSpaces.map((item) => (
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
        </RecentContainer>
      ) : null}
    </>
  )
}
