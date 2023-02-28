import { ReactNode, RefObject, useCallback, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { StepperContent, StepperContentAction, StepperController, StepperRef } from '../Commons/Stepper'
import { CreateSpace } from '.'

export type CreateStepperContentProps = {
  stepperRef: RefObject<StepperRef>
}

export const CreateStepperContent = ({ stepperRef }: CreateStepperContentProps) => {
  const [canStepperNext, setStepperNext] = useState(false)
  const [content, setContent] = useState<ReactNode>(null)
  const methods = useForm()

  const contentRef = useRef([
    <CreateSpace
      key={0}
      doValidate={(value) => value == `space-${0}`}
      name={`space-${0}`}
      value={'space-0'}
      onValidate={(valid) => setStepperNext(valid)}
    />,
    <CreateSpace
      key={1}
      doValidate={(value) => value === `space-${1}`}
      name={`space-${1}`}
      onValidate={(valid) => setStepperNext(valid)}
    />,
    <CreateSpace
      key={2}
      doValidate={(value) => value === `space-${2}`}
      name={`space-${2}`}
      onValidate={(valid) => setStepperNext(valid)}
    />,
  ])

  const handleChange = useCallback((step: number) => {
    setContent(contentRef.current[step])
  }, [])

  return (
    <FormProvider {...methods}>
      <StepperContent>
        {content}
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
