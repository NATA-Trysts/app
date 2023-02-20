import { Button, StyledButtonProps } from '@/components/Commons'

export const BasicButton = ({ color = 'dark', ...otherProps }: StyledButtonProps) => {
  return <Button color={color} colorStyle="basic" {...otherProps}></Button>
}
