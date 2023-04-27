import styled from 'styled-components'

import { SpacePreviewCard } from '@/components/PreviewCard'
import { useDashboardStore } from '@/stores'

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
  const [librarySpaces] = useDashboardStore((state) => [state.librarySpaces])

  const { calculateTimeAgo } = useDashboard()

  return (
    <MyFilesContainer>
      <List>
        {librarySpaces.get('custom')?.map((item) => (
          <SpacePreviewCard
            key={item._id}
            imageUrl={item.thumbnail}
            space={item}
            subtitle={`Edited ${calculateTimeAgo(item.latestEdited)}`}
            title={item.name}
          />
        ))}
      </List>
    </MyFilesContainer>
  )
}
