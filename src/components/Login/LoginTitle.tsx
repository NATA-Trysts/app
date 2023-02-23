import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { Logo } from '../Commons/Logo'

const LoginTitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 240px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleContent = styled(Text)`
  margin-top: 28px;
`

export const LoginTitle = () => {
  return (
    <LoginTitleContainer>
      <Logo width={156} />
      <TitleContent size="large" weight="lighter">
        Can&#39;t wait to bring you in!
      </TitleContent>
    </LoginTitleContainer>
  )
}
