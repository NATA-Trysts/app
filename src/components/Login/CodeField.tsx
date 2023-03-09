import { useEffect } from 'react'
import PinInput from 'react-pin-input'
import styled from 'styled-components'

const CodeFieldContainer = styled.div<{ isDisabled: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.7 : 1)};
  transition: opacity 0.3s ease;
`

const CodeFieldInput = {
  backgroundColor: '#ffffff',
  border: '1px solid',
  borderColor: '#C6C6C6',
  borderRadius: '12px',
  width: '45px',
  height: '52px',
  color: 'black',
  fontFamily: 'var(--font-family)',
  fontWeight: '500',
  fontSize: '16px',
  margin: '0 6px',
}

type CodeFieldProps = {
  disabled?: boolean
  otp: string
  setOtp: (value: string) => void
  setIsCompleted: (value: boolean) => void
}

export const CodeField = ({ disabled = false, otp, setOtp, setIsCompleted }: CodeFieldProps) => {
  const maxLength = 6

  const handleChange = (value: string) => {
    setOtp(value)
  }

  useEffect(() => {
    if (otp.length === maxLength) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }, [otp, setIsCompleted])

  return (
    <CodeFieldContainer isDisabled={disabled}>
      <PinInput
        focus
        autoSelect={true}
        disabled={disabled}
        initialValue={otp}
        inputFocusStyle={{ borderColor: '#CC22E8' }}
        inputMode="number"
        inputStyle={CodeFieldInput}
        length={maxLength}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        type="numeric"
        onChange={handleChange}
      />
    </CodeFieldContainer>
  )
}
