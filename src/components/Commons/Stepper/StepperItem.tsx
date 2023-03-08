import styled, { keyframes } from 'styled-components'

import borderImage from '@/assets/stepper-border.png'
import { Button, ButtonContent } from '@/components/Commons/Button'

export const StepperContainer = styled.div`
  padding-right: 4px;
`

export const StepperStepContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: relative;
`

export const StepperStep = styled.div`
  position: relative;
`

export const StepperDetailCard = styled.article`
  flex: 1;
  background-color: hsla(260, 43%, 14%, 1);
  border: 1px solid hsla(260, 23%, 34%, 1);
  border-radius: 20px;
  padding: 12px 20px 16px;
`

export const StepperStepButton = styled(Button)`
  width: 372px;
  height: fit-content;
  padding: 0;
  margin-left: auto;
  border-radius: 0;
  background-color: transparent;

  & ${ButtonContent} {
    width: 100%;
  }

  &:disabled ${StepperDetailCard} {
    background-color: transparent;
    border-color: transparent;
  }
`

export const StepperNodeContainer = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const StepperConnector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  /* border-color: hsla(260, 30%, 32%, 1); */
  border-left-width: 2px;
  border-left-style: solid;
  border-image: url(${borderImage}) 3 round;
`

export const StepperContent = styled.section`
  width: 474px;
  height: 408px;
  padding: 22px 32px;
  border-radius: 20px;
  background-color: hsla(260, 30%, 15%, 1);

  display: flex;
  flex-direction: column;
`

const contentAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px)
  }

  to {
    opacity: 1;
    transform: translateY(0px)
  }
`

export const StepperContentContainer = styled.div`
  & > * {
    animation: ${contentAppear} 0.5s ease;
  }
`

export const StepperContentAction = styled.div`
  margin-top: auto;
`
