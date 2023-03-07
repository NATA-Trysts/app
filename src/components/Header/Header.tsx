import { ReactNode } from 'react'

import { Logo } from '@/components/Commons/Logo'

import { HeaderContainer, HeaderIcon, StyledHeader } from './HeaderItem'
export type HeaderProps = {
  children?: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderIcon>
          <a href="/">
            <Logo width={90}></Logo>
          </a>
        </HeaderIcon>
        {children}
      </HeaderContainer>
    </StyledHeader>
  )
}
