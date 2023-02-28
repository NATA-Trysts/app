import { ReactComponent as ShopIcon } from '@/assets/icons/shop.svg'
import { Logo } from '@/components/Commons/Logo'

import { BasicButton } from '../Button/BasicButton/BasicButton'
import { GradientButton } from '../Button/GradientButton/GradientButton'
import { HeaderButtons, HeaderContainer, HeaderIcon, HeaderSearchBar, StyledHeader } from './HeaderItem'

export const Header = () => {
  const handleSearch = (search: string) => {
    console.log(search)
  }

  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderIcon>
          <a href="/">
            <Logo width={90}></Logo>
          </a>
        </HeaderIcon>
        <HeaderSearchBar onSearch={handleSearch} />
        <HeaderButtons>
          <BasicButton color="dark">
            <ShopIcon stroke="#696969" />
            Shop
          </BasicButton>
          <GradientButton>Create Space</GradientButton>
        </HeaderButtons>
      </HeaderContainer>
    </StyledHeader>
  )
}
