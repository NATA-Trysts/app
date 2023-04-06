import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { SpacePreviewCard } from '@/components/SpacePreviewCard'
import { SubCategoryToggle } from '@/components/SubcategoryToggle'
import { Space as SpaceType, useDashboardStore } from '@/stores'

const LibrariesContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 4px;
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
  const [librarySpaces] = useDashboardStore((state) => [state.librarySpaces])

  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [listLibrarySpaces, setListLibrarySpaces] = useState<SpaceType[]>([])

  const handleChange = useCallback((data: any) => {
    setSelectedCategory(data)
  }, [])

  useEffect(() => {
    const myArray = Array.from(librarySpaces.values())

    if (selectedCategory === 'all') {
      setListLibrarySpaces(myArray.flat())
    } else {
      setListLibrarySpaces(librarySpaces.get(selectedCategory) || [])
    }
  }, [selectedCategory])

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
          selected={selectedCategory}
        ></SubCategoryToggle>
        <List>
          {listLibrarySpaces.map((item) => (
            <SpacePreviewCard
              key={item._id}
              imageUrl={item.thumbnail}
              item={item}
              subtitle={`Created by ${(item.author as any).username}`}
              title={item.name}
            />
          ))}
        </List>
      </Wrapper>
    </LibrariesContainer>
  )
}
