import styled from 'styled-components'

import { ReactComponent as StepperNodeSvg } from '@/assets/icons/stepper-node.svg'

export const stateColor = {
  default: 'hsla(260, 12%, 29%, 1)',
  done: 'hsla(137, 72%, 55%, 1)',
  current: 'hsla(284, 72%, 55%, 1)',
}

export const StepperNodeIcon = styled(StepperNodeSvg)<{ color: string }>`
  & .outer-circle {
    transition: stroke 0.5s ease;
    stroke: ${(props) => props.color};
  }
`
