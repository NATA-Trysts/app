import { useEffect, useState } from 'react'
import PinInput from 'react-pin-input'
import styled from 'styled-components'

const CodeFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  setIsCompleted: (value: boolean) => void
}

export const CodeField = ({ setIsCompleted }: CodeFieldProps) => {
  const maxLength = 6
  const [otpCode, setOtpCode] = useState('')

  const handleChange = (value: string) => {
    setOtpCode(value)
  }

  useEffect(() => {
    if (otpCode.length === maxLength) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }, [otpCode, setIsCompleted])

  return (
    <CodeFieldContainer>
      <PinInput
        focus
        autoSelect={true}
        initialValue={otpCode}
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
