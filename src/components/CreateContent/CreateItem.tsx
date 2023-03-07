import styled from 'styled-components'

import { Text } from '@/layouts/common'

export const CreateForm = styled.div`
  & ${Text} {
    display: block;
  }
`
export const CreateFormHeader = styled.div`
  color: #ffffff;
  margin-bottom: 28px;
`

export const CreateInput = styled.input`
  width: 100%;
  height: 44px;
  background-color: hsla(262, 26%, 22%, 1);
  padding: 10px 16px;
  border-radius: 12px;
  border-width: 0px;
  color: #ffffff;
  user-select: none;

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
  width: fit-content;
  user-select: none;

  & ${Text} {
    padding: 0 0 8px 8px;
  }
`
