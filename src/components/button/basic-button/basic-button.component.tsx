import { ThemeProvider } from 'styled-components'

import { ButtonProps } from '../../../models/ButtonProps'
import { basicButtonThemes, ButtonContainer, ButtonContent } from '../button.style'

export const Button = ({ color = 'dark', children, disabled = false, handleClick }: ButtonProps) => {
  return (
    <ThemeProvider theme={basicButtonThemes[color]}>
      <ButtonContainer disabled={disabled} onClick={handleClick}>
        <ButtonContent>{children}</ButtonContent>
      </ButtonContainer>
    </ThemeProvider>
  )
}
