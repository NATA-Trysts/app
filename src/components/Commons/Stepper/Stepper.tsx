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

export type ConnectorAttribute = {
  height: number
  position: {
    top: number
  }
}

export const Stepper = forwardRef<StepperRef, StepperProps>(
  ({ currentStep: crr = 0, steps, onStepChange: handleStepChange, ...props }: StepperProps, ref) => {
    const [currentStep, setCurrentStep] = useState(crr)
    const maxStep = steps.length
    const changeObserver = useRef<onChangeAction>()
    const stepRefs = useRef<Array<HTMLDivElement | null>>([])
    const stepContainerRef = useRef<HTMLDivElement>(null)
    const [connectorSize, setConnectorSize] = useState<ConnectorAttribute | undefined>()

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

    useEffect(() => {
      stepRefs.current = stepRefs.current.slice(0, steps.length)
    }, [steps])

    const stepsElements = useMemo(
      () =>
        steps.map((step, index) => {
          return (
            <StepperStep key={index} ref={(r) => (stepRefs.current[index] = r)}>
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

    useEffect(() => {
      const stepLenght = stepRefs.current.length

      if (!stepLenght) return

      const containerHeight = stepContainerRef.current?.clientHeight ?? 0
      const firstItemSubtractedHeight = (stepRefs.current[0]?.clientHeight ?? 0) / 2
      const lastItemSubtractedHeight = (stepRefs.current[stepLenght - 1]?.clientHeight ?? 0) / 2
      const subtractedStepHeight = firstItemSubtractedHeight + lastItemSubtractedHeight
      const connectorHeight = containerHeight - subtractedStepHeight

      const connectorAtt: ConnectorAttribute = { height: connectorHeight, position: { top: firstItemSubtractedHeight } }

      setConnectorSize(connectorAtt)
    }, [stepsElements])

    return (
      <StepperContainer {...props}>
        <StepperStepContainer ref={stepContainerRef}>
          <StepperConnector style={{ height: connectorSize?.height, top: connectorSize?.position.top }} />
          {stepsElements}
        </StepperStepContainer>
      </StepperContainer>
    )
  },
)
