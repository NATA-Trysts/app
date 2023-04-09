import { ReactNode } from 'react'
import styled from 'styled-components'

import { Logo } from '@/components/Commons/Logo'
import { useAuth } from '@/hooks'

import { HeaderContainer, HeaderIcon, StyledHeader } from './HeaderItem'

export type HeaderProps = {
  children?: ReactNode
  className?: string
}

export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <StyledHeader {...props}>
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

export type HeaderAuthSection = {
  children: ReactNode
  className?: string
  fallback?: ReactNode
}

export const HeaderAuthSection = ({ children, fallback, ...props }: HeaderAuthSection) => {
  const { isAuthenticated } = useAuth()

  return <AuthSectionContainer {...props}>{isAuthenticated ? children : fallback}</AuthSectionContainer>
}

const AuthSectionContainer = styled.div`
  margin-left: auto;
`
