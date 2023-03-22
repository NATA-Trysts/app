import { memo, ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { Text } from '@/components/Commons'
import { Stepper, StepperDetail, StepperRef } from '@/components/Commons/Stepper'
import { CreateContent } from '@/components/CreateContent/CreateContent'
import { CreateHeader } from '@/components/CreateContent/CreateHeader'

const stepDetails: { header: string; description: string }[] = [
  {
    header: 'Select theme',
    description: `We provide some prebuild themes, you can quickly start your own virtual space.
    We aren’t confident about our design so you can build your own.`,
  },
  {
    header: 'Space information',
    description: `Provide some information and space password if needed.
    Limit up to 50 members in your space, upgrade plan to increase the limit.`,
  },
]

const ContentMemo = memo(CreateContent)
const StepperMemo = memo(Stepper)

const Create = () => {
  const stepperRef = useRef<StepperRef>(null)
  const [preImage, setPreImage] = useState<ReactNode>()

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

  const handleThemeChange = useCallback((theme: ReactNode) => {
    // const newTheme = cloneElement(theme as ReactElement, { key: Date.now() })

    // setPreImage(newTheme)
    setPreImage(theme)
  }, [])

  return (
    <CreateContainer>
      <CreateHeader />

      <CreateSection>
        <TitleArea className="title">
          <TitleText size="x-large" weight="normal">
            Create <strong>Virtual Space</strong> in a few clicks
          </TitleText>
        </TitleArea>
        <PreImageArea className="preimage">
          <PreImageContent>{preImage}</PreImageContent>
        </PreImageArea>
        <StepperArea className="stepper">
          <StepperMemo ref={stepperRef} steps={steps}></StepperMemo>
        </StepperArea>
        <ContentArea className="content">
          <ContentMemo stepperRef={stepperRef} onThemeChange={handleThemeChange}></ContentMemo>
        </ContentArea>
      </CreateSection>
    </CreateContainer>
  )
}

export default Create

export const CreateContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: hsla(261, 92%, 5%, 1);
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

export const TitleArea = styled.section`
  grid-area: title;
`

export const TitleText = styled(Text)`
  line-height: 54px;
  letter-spacing: 0;
  color: #ffffff;

  strong {
    background: linear-gradient(92.2deg, #65bcff 1.17%, #a4edfc 99.63%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const PreImageArea = styled.section`
  grid-area: preimage;
`

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const PreImageContent = styled.div`
  width: 474px;
  height: 120px;

  & img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    object-position: top center;
    animation: ${appear} 0.5s ease;
  }
`

export const StepperArea = styled.section`
  grid-area: stepper;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`

export const ContentArea = styled.section`
  grid-area: content;
`
