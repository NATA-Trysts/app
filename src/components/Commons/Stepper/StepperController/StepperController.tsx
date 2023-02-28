import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { BasicButton } from '@/components/Button'

import { StepperRef } from '../Stepper'

export type StepperControllerProps = {
  canNext?: boolean
  stepperRef: RefObject<StepperRef>
  onNext?: (step: number) => void
  onPrevious?: (step: number) => void
  onChange?: (step: number) => void
  onSubmit?: () => void
}

export const StepperController = ({
  canNext = true,
  stepperRef,
  onNext,
  onPrevious,
  onChange,
  onSubmit,
}: StepperControllerProps) => {
  const [currentStep, setCurrentStep] = useState<number | undefined>()
  const previousStep = useRef<number | undefined>()
  const maxStep = stepperRef.current?.max
  const canSubmit = currentStep == (maxStep ?? 0) - 1
  const canPrevious = currentStep != 0

  console.log('controller render ' + canNext)

  const handleChange = useCallback(() => {
    console.log(`change from ${previousStep.current} to ${currentStep}`)

    if (currentStep != undefined) {
      onChange?.(currentStep)
      if (currentStep > (previousStep.current ?? -1)) onNext?.(currentStep)
      else if (currentStep < (previousStep.current ?? -1)) onPrevious?.(currentStep)
    }
  }, [currentStep, onChange, onNext, onPrevious])

  const setCurrentStepWithPrevious = useCallback((step: number) => {
    setCurrentStep((previous) => {
      previousStep.current = previous

      return step
    })
  }, [])

  useEffect(() => {
    console.log('handle current change')

    handleChange()
  }, [handleChange])

  useEffect(() => {
    console.log('init controller', stepperRef.current)

    setCurrentStepWithPrevious(stepperRef.current?.current ?? 0)
    stepperRef.current?.subscribeChange((current) => setCurrentStepWithPrevious(current))
  }, [stepperRef, setCurrentStepWithPrevious])

  const handleNext = () => {
    stepperRef.current?.next()
  }

  const handlePrevious = () => {
    stepperRef.current?.previous()
  }

  const handleSubmit = () => {
    onSubmit?.()
  }

  return (
    <StepperControllerContainer>
      <BasicButton disabled={!canPrevious} onClick={handlePrevious}>
        Previous
      </BasicButton>
      {canSubmit ? (
        <BasicButton disabled={!canNext || !canSubmit} onClick={handleSubmit}>
          Submit
        </BasicButton>
      ) : (
        <BasicButton disabled={!canNext} onClick={handleNext}>
          Next
        </BasicButton>
      )}
    </StepperControllerContainer>
  )
}

export const StepperControllerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`
