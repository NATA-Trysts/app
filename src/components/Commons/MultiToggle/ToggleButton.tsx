export type ToggleButtonProps = {
  id?: string
  name?: string
  optionvalue: any
  onChangeValue: (value: any) => void
  className?: string
  multiSelect?: boolean
}

export const ToggleButton = ({ multiSelect = false, onChangeValue, ...props }: ToggleButtonProps) => {
  //   console.log(props)

  return (
    <input
      type={`${multiSelect ? 'radio' : 'checkbox'}`}
      onChange={() => onChangeValue(props.optionvalue)}
      {...props}
    />
  )
}
