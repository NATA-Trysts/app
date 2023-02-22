import { ReactElement, useEffect, useState } from 'react'

import { StyledToggleButton, ToggleContainer, ToggleGroup, ToggleLabel, ToggleLableContent } from './MultiToggleItem'

export type MultiToggleOption = {
  value: any
  display?: string | ReactElement
  optionClass?: string
}

export type MultiToggleProps = {
  options: MultiToggleOption[] | string[]
  name?: string
  selected?: any
  handleSelectedChange?: (seleted: any) => void
  className?: string
  [key: string]: any
}

export const MultiToggle = ({ name = 'radio-button', ...props }: MultiToggleProps) => {
  const [selectedOption, setSelectedOption] = useState(props.selected)

  function getDisplayName(option: MultiToggleOption | string) {
    return typeof option === 'string' ? option : option.display ?? option.value
  }

  function getValue(option: MultiToggleOption | string) {
    if (!option) return

    return typeof option === 'string' ? option : option.value
  }

  function tryGetSelectedClass(option: MultiToggleOption | string) {
    return checkSelected(option) ? 'selected' : ''
  }

  function checkSelected(option: MultiToggleOption | string) {
    if (!selectedOption) return false

    if (typeof option === 'string') {
      return option === selectedOption
    } else if ('value' in selectedOption) {
      return option.value === selectedOption.value
    } else return false
  }

  function handleChange(value: MultiToggleOption | string) {
    setSelectedOption(value)
  }

  useEffect(() => {
    if (props.handleSelectedChange) props.handleSelectedChange(getValue(selectedOption))
  }, [selectedOption, props])

  const toggles: any[] = []

  props.options.forEach((option: MultiToggleOption | string, index: number) => {
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
