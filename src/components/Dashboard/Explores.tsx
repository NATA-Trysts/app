import styled from 'styled-components'

import { Text } from '@/layouts/common'
import { Space as SpaceType, useDashboardStore } from '@/stores/dashboard'

import { SpacePreviewCard } from '../SpacePreviewCard'

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

export const Explores = () => {
  const [exploreSpaces, selectedSpacePreview, setSelectedSpacePreview] = useDashboardStore((state) => [
    state.exploreSpaces,
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
    <ExploreContainer>
      <Wrapper>
        <Text size="large" weight="normal">
          Explores
        </Text>
        <List>
          {exploreSpaces.map((item) => (
            <SpacePreviewCard
              key={item.id}
              imageUrl={item.imageUrl}
              isActive={item.id === selectedSpacePreview?.id}
              subtitle={item.subtitle}
              title={item.title}
              onClick={() => handleClick(item)}
            />
          ))}
        </List>
      </Wrapper>
    </ExploreContainer>
  )
}
