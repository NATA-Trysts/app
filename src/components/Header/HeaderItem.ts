import styled from 'styled-components'

import { SearchBar } from '../Commons/SearchBar'

export const HeaderContainer = styled.div`
  height: 76px;
  background-color: rgba(18, 19, 22, 0.3);
  padding: 15px 35px 13px;
  display: flex;
  align-items: center;
  position: relative;
`

export const HeaderButtons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const HeaderIcon = styled.div`
  position: absolute;
`

export const HeaderSearchBar = styled(SearchBar)`
  margin-left: 257px;
`

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 99;
`
