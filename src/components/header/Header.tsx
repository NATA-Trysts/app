import './header.style.scss'

import { BasicButton, GradientButton } from '@/components/Buttons'

import { ShopIcon, TrystsIcon } from '../Icons'
import { HeaderButtons, HeaderContainer, HeaderIcon } from './HeaderItem'
import { SearchBar } from './SearchBar/SearchBar'

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <HeaderIcon>
          <a href="/">
            <TrystsIcon></TrystsIcon>
          </a>
        </HeaderIcon>
        <SearchBar className="search-bar" />
        <HeaderButtons>
          <BasicButton>
            <ShopIcon color="#696969" />
            Shop
          </BasicButton>
          <GradientButton>Create Space</GradientButton>
        </HeaderButtons>
      </HeaderContainer>
    </header>
  )
}
