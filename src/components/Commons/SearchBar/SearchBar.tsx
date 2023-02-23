import { useEffect, useState } from 'react'

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'

import { SearchBarContainer, SearchButton, SearchIconContainer, SearchInput } from './SearchBarItem'

export type SearchBarProps = {
  onSearch: (data: string) => void
  [key: string]: any
}

export const SearchBar = ({ onSearch, ...otherProps }: SearchBarProps) => {
  const [isInputFillState, setInputFillState] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (searchValue.length == 0) {
      setInputFillState(false)
    } else {
      setInputFillState(true)
    }
  }, [searchValue])

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(evt.target.value)
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSearch(searchValue)
    }
  }

  function handleSearchButtonClick() {
    onSearch(searchValue)
  }

  return (
    <SearchBarContainer className={otherProps.className}>
      <SearchIconContainer className={`search-button-container ${isInputFillState ? 'input-fill' : ''}`}>
        <SearchButton className={'search-button'} onClick={handleSearchButtonClick}>
          <SearchIcon className="search-icon" />
        </SearchButton>
      </SearchIconContainer>
      <SearchInput
        id="search"
        name="search"
        placeholder="Search"
        type="text"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleInputKeyDown}
      ></SearchInput>
    </SearchBarContainer>
  )
}
