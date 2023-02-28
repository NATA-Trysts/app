import { forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

import { StepperNode } from '.'
import {
  StepperConnector,
  StepperContainer,
  StepperDetailCard,
  StepperNodeContainer,
  StepperStep,
  StepperStepButton,
  StepperStepContainer,
} from './StepperItem'

export type StepperState = 'default' | 'done' | 'current'

export type Step = {
  detail: ReactNode
  value: ReactNode
}

export type StepperProps = {
  className?: string
  currentStep?: number
  steps: Step[]
  onStepChange?: (value: any) => void
}

export type onChangeAction = (current: number) => void

export type StepperRef = {
  current: number
  max: number
  subscribeChange: (onChange: onChangeAction) => void
  next: () => void
  previous: () => void
}

export const Stepper = forwardRef<StepperRef, StepperProps>(
  ({ currentStep: crr = 0, steps, onStepChange: handleStepChange, ...props }: StepperProps, ref) => {
    const [currentStep, setCurrentStep] = useState(crr)
    const maxStep = steps.length
    const changeObserver = useRef<onChangeAction>()

    console.log(`currentStep: ${currentStep}, maxStep: ${maxStep}`)

    useImperativeHandle(
      ref,
      () => ({
        current: currentStep,
        max: maxStep,
        subscribeChange(onChange) {
          changeObserver.current = onChange
        },
        next() {
          const newCurrentStep = currentStep + 1

          if (newCurrentStep == maxStep) return

          setCurrentStep(newCurrentStep)
        },
        previous() {
          const newCurrentStep = currentStep - 1

          if (newCurrentStep < 0) return

          setCurrentStep(newCurrentStep)
        },
      }),
      [currentStep, maxStep],
    )

    useEffect(() => {
      handleStepChange?.(steps[currentStep].value)
      changeObserver.current?.(currentStep)
    }, [handleStepChange, steps, currentStep])

    const handleStepButtonClick = useCallback(
      (index: number) => {
        if (index != currentStep) {
          setCurrentStep(index)
        }
      },
      [currentStep],
    )

    const getState = useCallback(
      (index: number): StepperState => {
        return index == currentStep ? 'current' : index <= currentStep ? 'done' : 'default'
      },
      [currentStep],
    )

    const getDisabled = useCallback(
      (index: number): boolean => {
        return index > currentStep
      },
      [currentStep],
    )

    const stepsElements = useMemo(
      () =>
        steps.map((step, index) => {
          return (
            <StepperStep key={index}>
              <StepperNodeContainer>
                <StepperNode state={getState(index)}></StepperNode>
              </StepperNodeContainer>
              <StepperStepButton disabled={getDisabled(index)} onClick={() => handleStepButtonClick(index)}>
                <StepperDetailCard>{step.detail}</StepperDetailCard>
              </StepperStepButton>
            </StepperStep>
          )
        }),
      [steps, getState, getDisabled, handleStepButtonClick],
    )

    return (
      <StepperContainer {...props}>
        <StepperStepContainer>
          <StepperConnector />
          {stepsElements}
        </StepperStepContainer>
      </StepperContainer>
    )
  },
)
