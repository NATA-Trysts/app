import styled from 'styled-components'

import { Text } from '@/layouts/common'

export const CreateFormContainer = styled.div`
  & ${Text} {
    display: block;
  }
`

export const CreateInput = styled.input`
  width: 100%;
  height: 44px;
  background-color: hsla(262, 26%, 22%, 1);
  padding: 10px 16px;
  border-radius: 12px;
  border-width: 0px;
  color: #ffffff;

  font-weight: 500;
  font-size: 16px;

  &:focus,
  &:focus-visible {
    outline-width: 0px;
  }
`

export const CreateField = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const CreateLabel = styled.label`
  display: block;

  & ${Text} {
    padding: 0 0 8px 8px;
  }
`

export const CreateHeader = styled.div`
  color: #ffffff;
  margin-bottom: 28px;
`
