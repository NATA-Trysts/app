import { Button, StyledButtonProps } from '@/components/Commons'

export const BasicButton = ({ color = 'default', ...otherProps }: StyledButtonProps) => {
  return <Button color={color} colorStyle="basic" {...otherProps}></Button>
}
