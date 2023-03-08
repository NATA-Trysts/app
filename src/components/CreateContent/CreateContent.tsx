import { ReactNode, RefObject, useCallback, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import {
  StepperContent,
  StepperContentAction,
  StepperContentContainer,
  StepperController,
  StepperRef,
} from '@/components/Commons/Stepper'

import { SelectTheme, SpaceInfo } from '.'

export type CreateContentProps = {
  stepperRef: RefObject<StepperRef>
  onThemeChange?: (theme: ReactNode) => void
}

export type CanNextCreateContentProps = {
  onCanNext?: (canNext: boolean) => void
}

export const CreateContent = ({ stepperRef, onThemeChange }: CreateContentProps) => {
  const [canStepperNext, setStepperNext] = useState(false)
  const [content, setContent] = useState<ReactNode>(null)
  const methods = useForm({ mode: 'onChange' })

  const handleCanNext = useCallback((canNext: boolean) => setStepperNext(canNext), [])

  const contentRef = useRef([
    <SelectTheme key={'select-theme'} onCanNext={handleCanNext} onThemeSelected={onThemeChange} />,
    <SpaceInfo key={'space-info'} onCanNext={handleCanNext} />,
  ])

  const handleChange = useCallback((step: number) => {
    setContent(contentRef.current[step])
  }, [])

  return (
    <FormProvider {...methods}>
      <StepperContent>
        <StepperContentContainer>{content}</StepperContentContainer>
        <StepperContentAction>
          <StepperController
            canNext={canStepperNext}
            stepperRef={stepperRef}
            onChange={handleChange}
            onSubmit={methods.handleSubmit((data) => console.log(data))}
          />
        </StepperContentAction>
      </StepperContent>
    </FormProvider>
  )
}
