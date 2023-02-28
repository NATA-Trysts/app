import styled from 'styled-components'

import { Space as SpaceType, useDashboardStore } from '@/stores/dashboard'

import { SpacePreviewCard } from '../SpacePreviewCard'
import { SubCategoryToggle } from '../SubcategoryToggle'

const LibrariesContainer = styled.div`
  width: 100%;
  height: auto;
`

const Wrapper = styled.div`
  width: 100%;
  padding-top: 4px;
  padding-left: 4px;
`

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 8px 0;
`

export const Libraries = () => {
  const [mySpaces, selectedSpacePreview, setSelectedSpacePreview] = useDashboardStore((state) => [
    state.mySpaces,
    state.selectedSpacePreview,
    state.setSelectedSpacePreview,
  ])

  const handleChange = (data: any) => {
    console.log(data)
  }

  const handleClick = (space: SpaceType) => {
    if (space.id === selectedSpacePreview?.id) {
      setSelectedSpacePreview(null)
    } else {
      setSelectedSpacePreview(space)
    }
  }

  return (
    <LibrariesContainer>
      <Wrapper>
        <SubCategoryToggle
          handleSelectedChange={handleChange}
          options={[
            { value: 'all', display: 'All' },
            { value: 'offices', display: 'Offices' },
            { value: 'families', display: 'Families' },
          ]}
          selected="families"
        ></SubCategoryToggle>
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
      </Wrapper>
    </LibrariesContainer>
  )
}
