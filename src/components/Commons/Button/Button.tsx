import { ThemeProvider } from 'styled-components'

import { BaseButtonProps } from '@/components/Commons/Button/models/ButtonProps'

import { ButtonContainer, ButtonContent, ButtonThemes } from './ButtonItem'

export const Button = ({
  colorStyle = 'gradient',
  color = 'purple',
  disabled = false,
  ...otherProps
}: BaseButtonProps) => {
  if (!ButtonThemes[colorStyle]) {
    colorStyle = 'gradient'
    color = 'purple'
  } else if (!ButtonThemes[colorStyle][color]) {
    color = Object.keys(ButtonThemes[colorStyle])[0]
  }

  return (
    <ThemeProvider theme={ButtonThemes[colorStyle][color]}>
      <ButtonContainer disabled={disabled} onClick={otherProps.onClick}>
        <ButtonContent className="button-content">{otherProps.children}</ButtonContent>
      </ButtonContainer>
    </ThemeProvider>
  )
}
