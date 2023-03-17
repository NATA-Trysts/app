import styled from 'styled-components'

import { SpacePreviewCard } from '@/components/SpacePreviewCard'
import { Space as SpaceType } from '@/stores'

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

type MyFilesProps = {
  spaces: SpaceType[]
}

export const MyFiles = ({ spaces }: MyFilesProps) => {
  const { calculateTimeAgo } = useDashboard()

  return (
    <MyFilesContainer>
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
    </MyFilesContainer>
  )
}
