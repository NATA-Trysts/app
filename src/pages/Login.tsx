import { useEffect } from 'react'
import styled from 'styled-components'

import { LoginCodeInput, LoginEmailInput, LoginTitle } from '@/components/Login'
import { useLogin } from '@/components/Login/hooks/useLogin'
import { NotificationStack } from '@/components/Notification'
import { useLoginStore } from '@/stores/login'

const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #090118;
  position: relative;
`

const LoginForm = styled.form``

const Login = () => {
  const [email, step] = useLoginStore((state) => [state.email, state.step])
  const { submitEmail } = useLogin()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        submitEmail()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [submitEmail])

  return (
    <LoginPage>
      <LoginForm>
        <LoginTitle />
        {email && step === 2 ? <LoginCodeInput /> : <LoginEmailInput />}
      </LoginForm>
      <NotificationStack />
    </LoginPage>
  )
}

export default Login
