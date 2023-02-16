import { StyledButtonProps } from '../../../models/ButtonProps'
import { Button } from '../Button'

export const BasicButton = ({ color = 'dark', ...otherProps }: StyledButtonProps) => {
  return <Button color={color} colorStyle="basic" {...otherProps}></Button>
}
