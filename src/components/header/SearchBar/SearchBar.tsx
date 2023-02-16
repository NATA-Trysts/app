import { useState } from 'react'

import { SearchIcon } from '../../Icons/SearchIcon/SearchIcon'
import { SearchBarContainer, SearchIconContainer, SearchInput } from './SearchBarItem'

export const SearchBar = (prop: React.HTMLAttributes<HTMLDivElement>) => {
  const [isInputFillState, SetInputFillState] = useState(false)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value

    if (value.length == 0) {
      SetInputFillState(false)
    } else {
      SetInputFillState(true)
    }
  }

  return (
    <SearchBarContainer {...prop}>
      <SearchIconContainer className={`search-icon ${isInputFillState ? 'input-fill' : ''}`}>
        <SearchIcon color={isInputFillState ? '#FFFFFF' : '#696969'} />
      </SearchIconContainer>
      <SearchInput id="search" name="search" placeholder="Search" type="text" onChange={handleChange}></SearchInput>
    </SearchBarContainer>
  )
}
