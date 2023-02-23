import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { LoginInput, LoginTitle } from '@/components/Login'
import { useLogin } from '@/components/Login/hooks/useLogin'
import { NotificationStack } from '@/components/Notification'

const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #090118;
  position: relative;
`

const LoginForm = styled.form``

const Login = () => {
  const loginPageRef = useRef<HTMLDivElement>(null)
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
    <LoginPage ref={loginPageRef}>
      <LoginForm>
        <LoginTitle />
        <LoginInput />
      </LoginForm>
      <NotificationStack />
    </LoginPage>
  )
}

export default Login
