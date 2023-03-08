import { useLoginStore } from '@/stores'

const useLogin = () => {
  // const email = useLoginStore((state) => state.email)
  const [emailInputStatus, setEmailInputStatus] = useLoginStore((state) => [
    state.emailInputStatus,
    state.setEmailInputStatus,
  ])
  const setStep = useLoginStore((state) => state.setStep)

  const validateEmail = (emailFromInput: string) => {
    const emailPattern =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.(-?[a-zA-Z0-9])+$/

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
