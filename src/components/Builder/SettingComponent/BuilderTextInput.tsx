import styled from 'styled-components'

const Input = styled.input`
  width: 120px;
  height: 28px;
  padding-left: 8px;
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

export const BuilderTextInput = () => {
  return <Input />
}
