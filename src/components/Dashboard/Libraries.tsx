import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { SpacePreviewCard } from '@/components/SpacePreviewCard'
import { SubCategoryToggle } from '@/components/SubcategoryToggle'
import { Space as SpaceType } from '@/stores'

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

type LibrariesProps = {
  librarySpaces: Map<string, SpaceType[]>
}

export const Libraries = ({ librarySpaces }: LibrariesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [listLibrarySpaces, setListLibrarySpaces] = useState<SpaceType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleChange = (data: any) => {
    setSelectedCategory(data)
  }

  useEffect(() => {
    if (isLoading) return

    const myArray = Array.from(librarySpaces.values())

    if (selectedCategory === 'all') {
      setListLibrarySpaces(myArray.flat())
    } else {
      setListLibrarySpaces(librarySpaces.get(selectedCategory) || [])
    }
  }, [selectedCategory, librarySpaces, isLoading])

  useEffect(() => {
    if (librarySpaces.size > 0) {
      setIsLoading(false)
    }
  }, [librarySpaces])

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
              key={item.id}
              imageUrl={item.imageUrl}
              item={item}
              subtitle={`Created by ${item.author}`}
              title={item.title}
            />
          ))}
        </List>
      </Wrapper>
    </LibrariesContainer>
  )
}
