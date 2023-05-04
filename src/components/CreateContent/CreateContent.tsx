import { AxiosResponse } from 'axios'
import { ReactNode, RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSearchParam } from 'react-use'

import { axiosPrivate } from '@/api/axios'
import {
  StepperContent,
  StepperContentAction,
  StepperContentContainer,
  StepperController,
  StepperRef,
} from '@/components/Commons/Stepper'
import { CustomableTheme, isCustomableTheme, Space, SpaceTheme } from '@/models/Space'

import { CreateSpaceTheme, SelectTheme, SpaceInfo } from '.'

export type CreateContentProps = {
  stepperRef: RefObject<StepperRef>
  onThemeChange?: (theme: ReactNode) => void
}

export type CanNextCreateContentProps = {
  onCanNext?: (canNext: boolean) => void
}

type CreateSpaceSubmitType = {
  name: string
  password?: string
  models?: []
  theme: SpaceTheme
}

export const CreateContent = ({ stepperRef, onThemeChange }: CreateContentProps) => {
  const [canStepperNext, setStepperNext] = useState(false)
  const [content, setContent] = useState<ReactNode>(null)
  const methods = useForm({ mode: 'onChange' })
  const navigate = useNavigate()
  const theme = useSearchParam('theme') as CustomableTheme

  const handleCanNext = useCallback((canNext: boolean) => setStepperNext(canNext), [])

  const contentRef = useRef([
    <SelectTheme key={'select-theme'} defaultTheme={theme} onCanNext={handleCanNext} onThemeSelected={onThemeChange} />,
    <SpaceInfo key={'space-info'} onCanNext={handleCanNext} />,
  ])

  useEffect(() => {
    if (isCustomableTheme(theme)) stepperRef.current?.next()
  }, [])

  const handleChange = useCallback((step: number) => {
    setContent(contentRef.current[step])
  }, [])

  const handleSubmit = () => {
    methods.handleSubmit(
      (data) => {
        console.log(data)
        const theme = data.theme as CreateSpaceTheme
        const isCustom = theme === 'custom'

        axiosPrivate
          .post<Space, AxiosResponse<Space>, CreateSpaceSubmitType>('/spaces', {
            name: data.name,
            password: data.password,
            models: [],
            theme: isCustom ? false : theme,
          })
          .then((res) => {
            const createdSpace = res.data as Space

            if (createdSpace.theme) navigate(`/${createdSpace.code}`)
            else navigate(`/files/${createdSpace._id}`)
          })
      },
      (errors) => {
        console.log(errors)
      },
    )()
  }

  return (
    <FormProvider {...methods}>
      <StepperContent>
        <StepperContentContainer>{content}</StepperContentContainer>
        <StepperContentAction>
          <StepperController
            canNext={canStepperNext}
            stepperRef={stepperRef}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </StepperContentAction>
      </StepperContent>
    </FormProvider>
  )
}
