import './header.style.scss'

import { Button, GradientButton } from '@/components/button'

import { ShopIcon } from '../icon'
import { TrystsIcon } from '../icon/tryst-icon/trysts-icon.component'
import { HeaderButtons, HeaderContainer, HeaderIcon } from './header.style'
import { SearchBar } from './searchbar/searchbar.component'

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
          <Button>
            <ShopIcon color="#696969" />
            Shop
          </Button>
          <GradientButton>Create Space</GradientButton>
        </HeaderButtons>
      </HeaderContainer>
    </header>
  )
}
