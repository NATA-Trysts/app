import styled from 'styled-components'

import { Button } from '../Button'

export const SearchBarContainer = styled.div`
  height: 48px;
  width: 361px;
  border-radius: 12px;
  background: #212225;
  display: flex;
  align-items: center;

  & .search-button-container.input-fill {
    background-color: #505d87;
  }

  &:focus-within .search-button-container {
    background-color: #505d87;
  }

  &:focus-within .search-icon,
  & .search-button-container.input-fill .search-icon {
    stroke: #ffffff;
  }

  & .search-button-container.input-fill:hover,
  &:focus-within .search-button-container:hover {
    background-color: #3966ec;
  }
`

export const SearchIconContainer = styled.span`
  margin-left: 8px;
  border-radius: 8px;
  display: flex;
`

export const SearchInput = styled.input`
  padding: 8px;
  border-width: 0px;
  border-radius: 0 12px 12px 0;
  background: #212225;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  flex: 1 1 auto;

  &:focus,
  &:focus-visible {
    outline-width: 0px;
  }
`
export const SearchButton = styled(Button)`
  background-color: transparent;
  width: 32px;
  height: 32px;
  padding: 8px;
`
