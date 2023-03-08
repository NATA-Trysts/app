import styled from 'styled-components'

import { Space as SpaceType, useDashboardStore } from '@/stores'

import { SpacePreviewCard } from '../SpacePreviewCard'
import { useDashboard } from './hooks/useDashboard'

const MyFilesContainer = styled.section`
  width: 100%;
  height: auto;
`

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 8px 0;
`

export const MyFiles = () => {
  const mySpaces: SpaceType[] = useDashboardStore((state) => state.mySpaces)

  const { calculateTimeAgo } = useDashboard()

  return (
    <MyFilesContainer>
      <List>
        {mySpaces.map((item) => (
          <SpacePreviewCard
            key={item.id}
            imageUrl={item.imageUrl}
            item={item}
            subtitle={`Edited ${calculateTimeAgo(item.timeStamp)}`}
            title={item.title}
          />
        ))}
      </List>
    </MyFilesContainer>
  )
}
