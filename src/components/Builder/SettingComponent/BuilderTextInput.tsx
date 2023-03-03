import styled from 'styled-components'

const Input = styled.input`
  width: 120px;
  height: 28px;
  padding: 0 8px;
  background-color: #37393e;
  border: 1px solid transparent;
  border-radius: 6px;

  font-size: 12px;
  font-weight: 500;
  color: white;

  transition: border 0.3s ease;

  :focus {
    outline: none;
    border: 1px solid #727272;
  }
`

type BuilderTextInputProps = {
  value: string
  setValue: (value: string) => void
  type: 'text' | 'password'
}

export const BuilderTextInput = ({ value, setValue, type }: BuilderTextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return <Input type={type} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
}
