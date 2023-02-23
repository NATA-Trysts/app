import styled from 'styled-components'

import { ReactComponent as MultitabSvg } from '@/assets/icons/multitab.svg'

import { BasicButton } from '../Button'
import { ButtonContent } from '../Commons/Button/ButtonItem'

export const MultiTabWarning = () => {
  return (
    <WarningContainer>
      <StyledMultitabSvg></StyledMultitabSvg>
      <WarningHeader>Many tabs!</WarningHeader>
      <WarningDescription>
        Trysts supports only one active tab with the app.
        <br /> Please reload this page to continue using this tab or close it.
      </WarningDescription>
      <ReloadButton onClick={() => location.reload()}>Reload</ReloadButton>
    </WarningContainer>
  )
}

export const StyledMultitabSvg = styled(MultitabSvg)`
  & .multitab-border {
    fill: var(--color-3);
  }
`

export const WarningContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const WarningHeader = styled.h1`
  margin-top: 28px;
`
export const WarningDescription = styled.span`
  margin-top: 12px;
  width: 273px;

  font-style: normal;
  font-weight: 500;
  font-size: 9.89px;
  line-height: 13px;
  text-align: center;
  color: var(--color-1);
`

export const ReloadButton = styled(BasicButton)`
  margin-top: 38px;
  background-color: transparent;

  ${ButtonContent} {
    color: #ffffff;
  }
`
