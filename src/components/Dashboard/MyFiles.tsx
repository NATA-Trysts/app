import styled from 'styled-components'

import { Space as SpaceType, useDashboardStore } from '@/stores/dashboard'

import { SpacePreviewCard } from '../SpacePreviewCard'

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
  const [mySpaces, selectedSpacePreview, setSelectedSpacePreview] = useDashboardStore((state) => [
    state.mySpaces,
    state.selectedSpacePreview,
    state.setSelectedSpacePreview,
  ])

  const handleClick = (space: SpaceType) => {
    if (space.id === selectedSpacePreview?.id) {
      setSelectedSpacePreview(null)
    } else {
      setSelectedSpacePreview(space)
    }
  }

  return (
    <MyFilesContainer>
      <List>
        {mySpaces.map((item) => (
          <SpacePreviewCard
            key={item.id}
            imageUrl={item.imageUrl}
            isActive={item.id === selectedSpacePreview?.id}
            item={item}
            subtitle={item.subtitle}
            title={item.title}
            onClick={() => handleClick(item)}
          />
        ))}
      </List>
    </MyFilesContainer>
  )
}
