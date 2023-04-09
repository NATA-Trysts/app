import { Link } from 'react-router-dom'

import { GradientButton } from '../Button'
import { Header, HeaderAuthSection, HeaderProps } from '../Commons'
import { UserProfile } from '../UserProfile'

export const HeaderUserProfile = ({ children, ...props }: HeaderProps) => {
  return (
    <Header {...props}>
      {children}
      <HeaderAuthSection
        fallback={
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/login'}>
            <GradientButton>Sign in</GradientButton>
          </Link>
        }
      >
        <UserProfile></UserProfile>
      </HeaderAuthSection>
    </Header>
  )
}
