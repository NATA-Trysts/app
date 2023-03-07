import { forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'

import { StyledToggleButton, ToggleContainer, ToggleGroup, ToggleLabel, ToggleLableContent } from './MultiToggleItem'

export type MultiToggleOption = {
  value: any
  display?: ReactNode
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

export type MultiToggleRef = {
  uncheck: () => void
}

function getValue(option: MultiToggleOption) {
  if (!option) return

  return option.value
}

function getDisplayName(option: MultiToggleOption) {
  return option.display ?? getValue(option)
}

export const MultiToggle = forwardRef<MultiToggleRef, MultiToggleProps>(
  ({ name = 'radio-button', handleSelectedChange, selected, options, ...props }: MultiToggleProps, ref) => {
    const [selectedOption, setSelectedOption] = useState<MultiToggleOption>({ value: selected })

    useImperativeHandle(ref, () => ({
      uncheck: () => {
        setSelectedOption({ value: undefined })
      },
    }))

    const checkSelected = useCallback(
      (option: MultiToggleOption) => {
        if (!selectedOption) return false

        return option.value == selectedOption.value
      },
      [selectedOption],
    )

    const tryGetSelectedClass = useCallback(
      (option: MultiToggleOption) => {
        return checkSelected(option) ? 'selected' : ''
      },
      [checkSelected],
    )

    function handleChange(value: MultiToggleOption) {
      setSelectedOption(value)
    }

    useEffect(() => {
      const value = getValue(selectedOption)

      if (value) handleSelectedChange?.(value)
    }, [selectedOption, handleSelectedChange])

    const toggles: any[] = useMemo(() => {
      let toogleOptions = options

      if (toogleOptions.some((o) => typeof o == 'string')) {
        toogleOptions = (toogleOptions as string[]).map<MultiToggleOption>((o): MultiToggleOption => {
          return { value: o, display: o }
        })
      }

      return (toogleOptions as MultiToggleOption[]).map((option: MultiToggleOption, index: number) => {
        return (
          <ToggleContainer key={index}>
            <ToggleLabel className={tryGetSelectedClass(option)}>
              <ToggleLableContent>{getDisplayName(option)}</ToggleLableContent>
              <StyledToggleButton
                checked={checkSelected(option)}
                id={`${name}-${index}`}
                name={name}
                optionvalue={option}
                onChangeValue={handleChange}
              ></StyledToggleButton>
            </ToggleLabel>
          </ToggleContainer>
        )
      })
    }, [name, options, checkSelected, tryGetSelectedClass])

    return <ToggleGroup {...props}>{toggles}</ToggleGroup>
  },
)
