import { StyledButtonProps } from '../../../models/ButtonProps'
import { Button } from '../Button'

export const GradientButton = ({ color = 'dark', ...otherProps }: StyledButtonProps) => {
  return <Button color={color} colorStyle="gradient" {...otherProps}></Button>
}
