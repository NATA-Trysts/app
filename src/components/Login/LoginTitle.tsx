import styled from 'styled-components'

import { Logo } from '@/components/Commons/Logo'
import { Text } from '@/layouts/common'
import { useLoginStore } from '@/stores'

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

const ResendCode = styled.span`
  text-align: center;
  color: #7fc9ef;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration 0.3s ease;
  cursor: pointer;

  &:hover {
    text-decoration-color: #7fc9ef;
  }
`

export const LoginTitle = () => {
  const [email, step] = useLoginStore((state) => [state.email, state.step])

  const handleResendCode = () => {}

  return (
    <LoginTitleContainer isSecondStep={step === 2}>
      <Logo width={156} />
      {email && step === 2 ? (
        <TitleContent size="large" weight="lighter">
          We just emailed <Email>{email}</Email> with a 6-digit code. <br /> If you don&#39;t see it, please check your
          spam folder or <ResendCode onClick={handleResendCode}>resend code</ResendCode>.
        </TitleContent>
      ) : (
        <TitleContent size="large" weight="lighter">
          Can&#39;t wait to bring you in!
        </TitleContent>
      )}
    </LoginTitleContainer>
  )
}
