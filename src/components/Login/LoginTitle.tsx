import styled from 'styled-components'

import { Text } from '@/layouts/common'
import { useLoginStore } from '@/stores/login'

import { Logo } from '../Commons/Logo'

const LoginTitleContainer = styled.div<{ isSecondStep: boolean }>`
  position: absolute;
  left: 50%;
  width: 100%;
  top: ${({ isSecondStep }) => (isSecondStep ? 'calc(50% - 280px)' : 'calc(50% - 240px)')};
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleContent = styled(Text)`
  margin-top: 28px;
  text-align: center;
`

const Email = styled.span`
  text-align: center;
  color: #7fc9ef;
`

export const LoginTitle = () => {
  const [email, step] = useLoginStore((state) => [state.email, state.step])

  return (
    <LoginTitleContainer isSecondStep={step === 2}>
      <Logo width={156} />
      {email && step === 2 ? (
        <TitleContent size="large" weight="lighter">
          We just emailed <Email>{email}</Email> with a 6-digit code. <br /> If you don&#39;t see it, please check your
          spam folder or resend code.
        </TitleContent>
      ) : (
        <TitleContent size="large" weight="lighter">
          Can&#39;t wait to bring you in!
        </TitleContent>
      )}
    </LoginTitleContainer>
  )
}
