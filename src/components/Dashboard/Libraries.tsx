import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { SpacePreviewCard } from '@/components/SpacePreviewCard'
import { SubCategoryToggle } from '@/components/SubcategoryToggle'
import { CustomableSpaceTheme, Space } from '@/models/Space'
import { useDashboardStore } from '@/stores'

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

type ToogleTheme = CustomableSpaceTheme | 'all'
type ToogleThemeOptions = {
  [key in ToogleTheme]: string
}

export const Libraries = () => {
  const [librarySpaces] = useDashboardStore((state) => [state.librarySpaces])

  const [selectedTheme, setSelectedTheme] = useState<ToogleTheme>('all')
  const [listLibrarySpaces, setListLibrarySpaces] = useState<Space[]>([])

  const handleChange = useCallback((data: any) => {
    setSelectedTheme(data)
  }, [])

  useEffect(() => {
    const myArray = Array.from(librarySpaces.values())

    if (selectedTheme === 'all') {
      setListLibrarySpaces(myArray.flat())
    } else {
      setListLibrarySpaces(librarySpaces.get(selectedTheme) || [])
    }
  }, [selectedTheme, librarySpaces])

  const themeOptions: ToogleThemeOptions = {
    all: 'All',
    city: 'City',
    forest: 'Forest',
    home: 'Home',
    kidsplayground: 'Kids Playground',
    custom: 'Custom',
  }

  return (
    <LibrariesContainer>
      <Wrapper>
        <SubCategoryToggle
          handleSelectedChange={handleChange}
          options={Object.keys(themeOptions).map((key) => ({
            value: key,
            display: themeOptions[key as ToogleTheme],
          }))}
          selected={selectedTheme}
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
