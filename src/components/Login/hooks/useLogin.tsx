import axios from '@/api/axios'
import { useNotification } from '@/hooks'
import { useLoginStore, useStepStore } from '@/stores'

const useLogin = () => {
  // const email = useLoginStore((state) => state.email)
  const [emailInputStatus, setEmailInputStatus] = useLoginStore((state) => [
    state.emailInputStatus,
    state.setEmailInputStatus,
  ])
  const setStep = useStepStore((state) => state.setStep)
  const [email, setFullHash] = useLoginStore((state) => [state.email, state.setFullHash])
  const { addNotification } = useNotification()

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
      axios
        .post('/api/login', { email })
        .then((res: any) => {
          setFullHash(res.data.fullHash)
          setStep(2)
        })
        .catch(() => {
          addNotification('error', "Can't send email, try again")
        })
    }
  }

  return { validateEmail, submitEmail }
}

export { useLogin }
