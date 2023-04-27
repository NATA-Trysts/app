import { omit, pick } from 'lodash'
import { useState } from 'react'
import styled from 'styled-components'

import { SubCategoryToggle } from '@/components/SubcategoryToggle'
import { BuiltInTheme } from '@/models/Space'

import { ThemePreviewCard } from '../PreviewCard'

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

type ToogleTheme = BuiltInTheme | 'all'
type ToogleThemeOptions = {
  [key in ToogleTheme]: string
}

// export const Libraries = () => {
//   const [librarySpaces] = useDashboardStore((state) => [state.librarySpaces])

//   const [selectedTheme, setSelectedTheme] = useState<ToogleTheme>('all')
//   const [listLibrarySpaces, setListLibrarySpaces] = useState<Space[]>([])

//   const handleChange = useCallback((data: any) => {
//     setSelectedTheme(data)
//   }, [])

//   useEffect(() => {
//     const myArray = Array.from(librarySpaces.values())

//     if (selectedTheme === 'all') {
//       setListLibrarySpaces(myArray.flat())
//     } else {
//       setListLibrarySpaces(librarySpaces.get(selectedTheme) || [])
//     }
//   }, [selectedTheme, librarySpaces])

//   const themeOptions: ToogleThemeOptions = {
//     all: 'All',
//     city: 'City',
//     forest: 'Forest',
//     home: 'Home',
//     kidsplayground: 'Kids Playground',
//     custom: 'Custom',
//   }

//   return (
//     <LibrariesContainer>
//       <Wrapper>
//         <SubCategoryToggle
//           handleSelectedChange={handleChange}
//           options={Object.keys(themeOptions).map((key) => ({
//             value: key,
//             display: themeOptions[key as ToogleTheme],
//           }))}
//           selected={selectedTheme}
//         ></SubCategoryToggle>
//         <List>
//           {listLibrarySpaces.map((space) => (
//             <SpacePreviewCard
//               key={space._id}
//               imageUrl={space.thumbnail}
//               space={space}
//               subtitle={`Created by ${(space.author as Author).username}`}
//               title={space.name}
//             />
//           ))}
//         </List>
//       </Wrapper>
//     </LibrariesContainer>
//   )
// }

export const Libraries = () => {
  const [selectedTheme, setSelectedTheme] = useState<ToogleTheme>('all')

  const themeOptions: ToogleThemeOptions = {
    all: 'All',
    city: 'City',
    forest: 'Forest',
    home: 'Home',
    kidsplayground: 'Kids Playground',
  }

  const handleChange = (selected: any) => {
    setSelectedTheme(selected)
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
          {Object.keys(selectedTheme === 'all' ? omit(themeOptions, 'all') : pick(themeOptions, selectedTheme)).map(
            (key) => (
              <ThemePreviewCard
                key={`theme-${key}`}
                id={`theme-${key}`}
                imageUrl={'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg'}
                subtitle={`${themeOptions[key as ToogleTheme]} Theme`}
                theme={key}
                title={key}
              />
            ),
          )}
        </List>
      </Wrapper>
    </LibrariesContainer>
  )
}
