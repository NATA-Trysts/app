import { ReactNode } from 'react'

import { Text } from '../../Text'
import {
  StepperDetailContainer as StepperDetailContainer,
  StepperDetailDescription as StepperDetailDescription,
  StepperDetailHeader as StepperDetailHeader,
} from './StepperDetailItem'

export type StepperDetailProps = {
  className?: string
  description?: ReactNode
  disabled?: boolean
  header?: ReactNode
}

export const StepperDetail = ({ disabled = false, ...props }: StepperDetailProps) => {
  return (
    <StepperDetailContainer className="stepper-content" {...props}>
      <StepperDetailHeader disbaled={disabled}>
        <Text size="large" weight="normal">
          {props.header}
        </Text>
      </StepperDetailHeader>
      <StepperDetailDescription disbaled={disabled}>
        <Text size="medium" weight="lighter">
          {props.description}
        </Text>
        <div></div>
      </StepperDetailDescription>
    </StepperDetailContainer>
  )
}
