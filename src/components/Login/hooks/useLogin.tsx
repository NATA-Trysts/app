import { useLoginStore } from '@/stores/login'

const useLogin = () => {
  const email = useLoginStore((state) => state.email)
  const [emailInputStatus, setEmailInputStatus] = useLoginStore((state) => [
    state.emailInputStatus,
    state.setEmailInputStatus,
  ])

  const validateEmail = (emailFromInput: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailFromInput === '') {
      setEmailInputStatus('empty')
    } else if (emailPattern.test(emailFromInput)) {
      setEmailInputStatus('valid')
    } else {
      setEmailInputStatus('invalid')
    }
  }

  const submitEmail = () => {
    if (emailInputStatus === 'valid') {
      console.log(email)
    }
  }

  return { validateEmail, submitEmail }
}

export { useLogin }
