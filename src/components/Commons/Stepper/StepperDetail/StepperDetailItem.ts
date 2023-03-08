import styled from 'styled-components'

import { Text } from '../../Text'

export const StepperDetailContainer = styled.div``

export const StepperDetailHeader = styled.div<{ disbaled?: boolean }>`
  text-align: left;

  & ${Text} {
    color: ${(props) => (props.disbaled ? 'hsla(0, 0%, 66%, 1)' : 'hsla(0, 0%, 100%, 1)')};
  }
`

export const StepperDetailDescription = styled.div<{ disbaled?: boolean }>`
  margin-top: 4px;
  text-align: left;

  & ${Text} {
    letter-spacing: 0;
    color: ${(props) => (props.disbaled ? 'hsla(0, 0%, 39%, 1)' : 'hsla(260, 25%, 70%, 1)')};
  }
`
