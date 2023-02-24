import styled from 'styled-components'

import { useNotification } from '@/hooks/useNotification'
import { useLoginStore } from '@/stores/login'

import { GradientButton } from '../Button'
import { Input } from '../Commons/Input'
import { useLogin } from './hooks/useLogin'

const LoginEmailInputContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  height: 160px;
  background-color: #13042f;
  border-radius: 20px;
`

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const SendButton = styled(GradientButton)`
  width: 100%;
`

export const LoginEmailInput = () => {
  const [email, setEmail] = useLoginStore((state) => [state.email, state.setEmail])
  const emailInputStatus = useLoginStore((state) => state.emailInputStatus)
  const { validateEmail, submitEmail } = useLogin()
  const { addNotification } = useNotification()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    validateEmail(e.target.value)
  }

  const handleEnterKeyDown = () => {
    if (emailInputStatus === 'invalid') {
      addNotification('error', 'Invalid email')
    }
  }

  const handleSendButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    submitEmail()
  }

  return (
    <LoginEmailInputContainer>
      <Wrapper>
        <Input
          placeholder="myemail@example.com"
          status={emailInputStatus}
          type="text"
          value={email}
          onChange={handleChange}
          onEnterDown={handleEnterKeyDown}
          onOutFocus={() => validateEmail(email)}
        />
        <SendButton disabled={emailInputStatus !== 'valid'} onClick={handleSendButtonClick}>
          Sign in with email
        </SendButton>
      </Wrapper>
    </LoginEmailInputContainer>
  )
}
