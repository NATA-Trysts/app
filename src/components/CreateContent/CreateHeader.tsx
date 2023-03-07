import styled from 'styled-components'

import { Header } from '../Header'
import { UserProfile } from '../UserProfile'

export const CreateHeader = () => {
  return (
    <Header>
      {/* <HeaderButtons key={'button'}>
        <BasicButton>Sign in</BasicButton>
        <GradientButton>Start for free</GradientButton>
      </HeaderButtons> */}
      <StyledUserProfile></StyledUserProfile>
    </Header>
  )
}

export const StyledUserProfile = styled(UserProfile)`
  margin-left: auto;
`
