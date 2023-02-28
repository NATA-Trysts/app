import { useMemo, useRef } from 'react'
import styled from 'styled-components'

import { Stepper, StepperDetail, StepperRef } from '@/components/Commons/Stepper'
import { CreateStepperContent } from '@/components/CreateContent/CreateStepperContent'
import { Header } from '@/components/Header'
import { CustomableContainer } from '@/layouts/common'
import { useAppStore } from '@/stores'

const stepDetails: { header: string; description: string }[] = [
  {
    header: 'Create your Squad',
    description:
      'Add a profile picture for your Squad (JPEG, PNG or GIF), give it a name and add a description. Give it a name and add a description',
  },
  {
    header: 'Create your Squad',
    description:
      'Add a profile picture for your Squad (JPEG, PNG or GIF), give it a name and add a description. Give it a name and add a description',
  },
  {
    header: 'Create your Squad',
    description:
      'Add a profile picture for your Squad (JPEG, PNG or GIF), give it a name and add a description. Give it a name and add a description',
  },
]

export const Create = () => {
  const customColor = useAppStore((state) => state.customColor)
  const stepperRef = useRef<StepperRef>(null)

  const steps = useMemo(
    () =>
      stepDetails.map((s, index) => {
        return {
          detail: <StepperDetail key={index} description={s.description} header={s.header} />,
          value: index,
        }
      }),
    [],
  )

  return (
    <CreateContainer customColor={customColor}>
      <Header></Header>

      <CreateSection>
        <TitleArea className="title"></TitleArea>
        <PreImageArea className="preimage"></PreImageArea>
        <StepperArea className="stepper">
          <Stepper ref={stepperRef} steps={steps}></Stepper>
        </StepperArea>
        <ContentArea className="content">
          <CreateStepperContent stepperRef={stepperRef}></CreateStepperContent>
        </ContentArea>
      </CreateSection>
    </CreateContainer>
  )
}

const CreateContainer = styled(CustomableContainer)`
  position: relative;
  height: 100vh;
`

export const CreateSection = styled.section`
  width: 1016px;
  height: 623px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: hsla(261, 46%, 9%, 1);
  border: 1px solid hsla(0, 5%, 52%, 1);
  border-radius: 30px;
  padding: 32px;
  padding-left: 42px;

  display: grid;
  grid-template-areas: 'title preimage' 'stepper content';
  grid-template-columns: 406px 474px;
  grid-template-rows: 120px 1fr;
  grid-row-gap: 32px;
  grid-column-gap: 50px;
`

export const TitleArea = styled.div`
  grid-area: title;
`

export const PreImageArea = styled.div`
  grid-area: preimage;
`

export const StepperArea = styled.div`
  grid-area: stepper;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContentArea = styled.div`
  grid-area: content;
`
