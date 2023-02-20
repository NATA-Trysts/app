import { ThemeProvider } from 'styled-components'

import { ButtonContainer, ButtonContent, ButtonThemes } from './ButtonItem'
import { BaseButtonProps } from './models/ButtonProps'

export const Button = ({
  colorStyle = 'default',
  color = 'default',
  disabled = false,
  ...otherProps
}: BaseButtonProps) => {
  if (!ButtonThemes[colorStyle][color]) {
    color = Object.keys(ButtonThemes[colorStyle])[0]
  }

  return (
    <ThemeProvider theme={ButtonThemes[colorStyle][color]}>
      <ButtonContainer className={otherProps.className} disabled={disabled} onClick={otherProps.onClick}>
        <ButtonContent className="button-content">{otherProps.children}</ButtonContent>
      </ButtonContainer>
    </ThemeProvider>
  )
}
