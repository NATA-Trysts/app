export type ToggleButtonProps = {
  id?: string
  name?: string
  optionvalue: any
  onChangeValue: (value: any) => void
  className?: string
}

export const ToggleButton = ({ onChangeValue, ...props }: ToggleButtonProps) => {
  //   console.log(props)

  return <input type="radio" onChange={() => onChangeValue(props.optionvalue)} {...props} />
}
