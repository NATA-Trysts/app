import { ReactElement, useEffect, useState } from 'react'

import { StyledToggleButton, ToggleContainer, ToggleGroup, ToggleLabel, ToggleLableContent } from './MultiToggleItem'

export type MultiToggleOption = {
  value: any
  display?: string | ReactElement
}

export type MultiToggleProps = {
  [key: string]: any
  options: MultiToggleOption[] | string[]
  name?: string
  selected?: any
  multiSelect?: boolean
  className?: string
  handleSelectedChange?: (seleted: any) => void
}

export const MultiToggle = ({ name = 'radio-button', handleSelectedChange, ...props }: MultiToggleProps) => {
  const [selectedOption, setSelectedOption] = useState<MultiToggleOption>({ value: props.selected })

  function getValue(option: MultiToggleOption) {
    if (!option) return

    return option.value
  }

  function getDisplayName(option: MultiToggleOption) {
    return option.display ?? getValue(option)
  }

  function tryGetSelectedClass(option: MultiToggleOption) {
    return checkSelected(option) ? 'selected' : ''
  }

  function checkSelected(option: MultiToggleOption) {
    if (!selectedOption) return false

    return option.value == selectedOption.value
  }

  function handleChange(value: MultiToggleOption) {
    setSelectedOption(value)
  }

  useEffect(() => {
    if (handleSelectedChange) handleSelectedChange(getValue(selectedOption))
  }, [selectedOption, handleSelectedChange])

  const toggles: any[] = []

  if (props.options.some((o) => typeof o == 'string')) {
    props.options = (props.options as string[]).map<MultiToggleOption>((o): MultiToggleOption => {
      return { value: o, display: o }
    })
  }

  ;(props.options as MultiToggleOption[]).forEach((option: MultiToggleOption, index: number) => {
    toggles.push(
      <ToggleContainer key={index}>
        <ToggleLabel className={tryGetSelectedClass(option)}>
          <ToggleLableContent>{getDisplayName(option)}</ToggleLableContent>
          <StyledToggleButton
            id={`${name}-${index}`}
            name={name}
            optionvalue={option}
            onChangeValue={handleChange}
          ></StyledToggleButton>
        </ToggleLabel>
      </ToggleContainer>,
    )
  })

  return <ToggleGroup {...props}>{toggles}</ToggleGroup>
}
