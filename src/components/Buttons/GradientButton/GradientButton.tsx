import { ThemeProvider } from 'styled-components'

import { ButtonProps } from '../../../models/ButtonProps'
import { ButtonContainer, ButtonContent, gradientButtonThemes } from '../ButtonItem'

export const GradientButton = ({ color = 'purple', children, disabled = false, handleClick }: ButtonProps) => {
  return (
    <ThemeProvider theme={gradientButtonThemes[color]}>
      <ButtonContainer disabled={disabled} onClick={handleClick}>
        <ButtonContent>{children}</ButtonContent>
      </ButtonContainer>
    </ThemeProvider>
  )
}
