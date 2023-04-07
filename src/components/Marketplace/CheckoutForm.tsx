import { LinkAuthenticationElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripePaymentElementOptions } from '@stripe/stripe-js'
import { FormEvent, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { GradientButton } from '../Button'

const Title = styled.div`
  margin-bottom: 20px;
`

const Price = styled.span`
  font-weight: 700;
`

const PayButton = styled(GradientButton)`
  margin-top: 12px;
  border-radius: 5px;
  width: 100%;
`

const Error = styled.div`
  margin-top: 12px;
`

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerContainer = styled.div`
  & {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
  }

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    margin: 4px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: ${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerContainer>
  )
}

type CheckoutFormProp = {
  total: number
  onSucceed?: () => void
}

export default function CheckoutForm(props: CheckoutFormProp) {
  const stripe = useStripe()
  const elements = useElements()
  const { total } = props

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string>('')
  const [isLoading, setLoading] = useState(true)
  const [isResponsed, setReponsed] = useState(false)

  const handlePaymentReady = () => {
    setLoading(false)
    elements?.getElement('linkAuthentication')?.focus()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setLoading(true)

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        // eslint-disable-next-line camelcase
        // return_url: 'http://localhost:4200/payment-success',

        // eslint-disable-next-line camelcase
        receipt_email: email,
      },
      redirect: 'if_required',
    })

    console.log(paymentIntent, error)

    switch (error?.type) {
      case undefined:
        break
      case 'card_error':
      case 'validation_error':
        setMessage(error.message as string)
        break
      default:
        break
    }

    // if (error?.type === 'card_error' || error?.type === 'validation_error') {
    //   setMessage(error.message as string)
    // } else {
    //   setMessage('An unexpected error occurred.')
    // }

    switch (paymentIntent?.status) {
      case undefined:
        break
      case 'succeeded':
        setReponsed(true)
        setMessage('Payment succeeded!')
        props.onSucceed?.()
        break
      case 'processing':
        setReponsed(true)
        setMessage('Your payment is processing.')
        break
      case 'requires_payment_method':
        setReponsed(true)
        setMessage('Your payment was not successful, please try again.')
        break
      default:
        setMessage('Something went wrong.')
        break
    }

    setLoading(false)
  }

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: 'tabs',
  }

  return (
    <>
      {isResponsed ? (
        <div>{message}</div>
      ) : (
        <div className="checkout-form">
          <Title className="title">
            You have to pay <Price>{total}$</Price>
          </Title>
          <form id="payment-form" onSubmit={(e) => handleSubmit(e)}>
            <LinkAuthenticationElement id="link-authentication-element" onChange={(e) => setEmail(e.value.email)} />
            <PaymentElement id="payment-element" options={paymentElementOptions} onReady={handlePaymentReady} />
            <PayButton disabled={isLoading || isResponsed || !stripe || !elements}>
              {isLoading ? <Spinner></Spinner> : 'Pay now'}
            </PayButton>
            {message && <Error id="payment-message">{message}</Error>}
          </form>
        </div>
      )}
    </>
  )
}
