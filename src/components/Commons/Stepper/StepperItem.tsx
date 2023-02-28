import styled from 'styled-components'

import { Button, ButtonContent } from '../Button'

export const StepperContainer = styled.section``

export const StepperStepContainer = styled.section`
  width: 100%;
  padding-right: 4px;
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
  border-color: red;
  border-left-width: 2px;
  border-left-style: dashed;
`

export const StepperContent = styled.section`
  width: 474px;
  height: 408px;
  padding: 20px 32px;
  border-radius: 20px;
  background-color: hsla(260, 30%, 15%, 1);

  display: flex;
  flex-direction: column;
`

export const StepperContentAction = styled.div`
  margin-top: auto;
`
