export type ToggleButtonProps = {
  id?: string
  name?: string
  optionvalue: any
  onChangeValue: (value: any) => void
  className?: string
  multiSelect?: boolean
  checked?: boolean
}

export const ToggleButton = ({ multiSelect = false, onChangeValue, ...props }: ToggleButtonProps) => {
  //   console.log(props)

  return (
    <input
      checked={props.checked}
      type={`${multiSelect ? 'checkbox' : 'radio'}`}
      onChange={() => onChangeValue(props.optionvalue)}
      {...props}
    />
  )
}
