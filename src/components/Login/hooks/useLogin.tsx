import { useLoginStore } from '@/stores/login'

const useLogin = () => {
  // const email = useLoginStore((state) => state.email)
  const [emailInputStatus, setEmailInputStatus] = useLoginStore((state) => [
    state.emailInputStatus,
    state.setEmailInputStatus,
  ])
  const setStep = useLoginStore((state) => state.setStep)

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
      setStep(2)
    }
  }

  return { validateEmail, submitEmail }
}

export { useLogin }
