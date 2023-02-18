import { Button, StyledButtonProps } from '@/components/Commons'
export const GradientButton = ({ color = 'dark', ...otherProps }: StyledButtonProps) => {
  return <Button color={color} colorStyle="gradient" {...otherProps}></Button>
}
