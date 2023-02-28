import { StepperState } from '../Stepper'
import { stateColor, StepperNodeIcon } from './StepperNodeItem'

export type StepperNodeProps = {
  state?: StepperState
}

export const StepperNode = ({ state = 'default' }: StepperNodeProps) => {
  return <StepperNodeIcon color={stateColor[state]}></StepperNodeIcon>
}
