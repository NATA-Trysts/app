import axios from '@/api/axios'
import { useLoginStore, useStepStore } from '@/stores'

const useLogin = () => {
  // const email = useLoginStore((state) => state.email)
  const [emailInputStatus, setEmailInputStatus] = useLoginStore((state) => [
    state.emailInputStatus,
    state.setEmailInputStatus,
  ])
  const setStep = useStepStore((state) => state.setStep)
  const [email, setFullHash] = useLoginStore((state) => [state.email, state.setFullHash])

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
      axios
        .post('/api/login', { email })
        .then((res: any) => {
          setFullHash(res.data.fullHash)
        })
        .catch((err: any) => {
          console.error(err)
        })
    }
  }

  return { validateEmail, submitEmail }
}

export { useLogin }
