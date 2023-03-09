import { CSSProperties, ReactNode, useCallback, useContext } from 'react'
import styled from 'styled-components'

import { SliderMarkContext } from './SliderContext'
import { convertValueToPercentage, getThumbInBoundsOffset } from './SliderUtils'

export type SliderMarkProps = {
  value: number
  className?: string
  children?: ReactNode
  style?: CSSProperties
  onClick?: (value: number) => void
}

export const SliderMark = ({ value, onClick = () => {}, ...props }: SliderMarkProps) => {
  const { min, max, inverted, currentValues } = useContext(SliderMarkContext)

  const { head, tail } = {
    head: currentValues.length == 1 ? 0 : currentValues[0],
    tail: currentValues[currentValues.length - 1],
  }

  const convertValueToMarkPosition = useCallback(
    (value: number): string => {
      const percent = convertValueToPercentage(value, min, max)
      const offset = getThumbInBoundsOffset(8, percent, inverted ? -1 : 1)

      return `left: calc(${percent}% + ${offset}px);`
    },
    [inverted, min, max],
  )

  const currentValue = currentValues[0]

  const dataAttributes = {
    'data-highlighted': value >= head && value <= tail ? '' : undefined,
    'data-thumb-touched': value === currentValue ? '' : undefined,
  }

  return (
    <StyledMark
      {...dataAttributes}
      {...props}
      position={convertValueToMarkPosition(value)}
      onClickCapture={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick(value)
      }}
    />
  )
}

export const StyledMark = styled.div<{ position?: string }>`
  position: absolute;
  transform: translateX(-50%);
  ${(props) => props.position}
  z-index: 0;

  &[data-thumb-touched] {
    pointer-events: none;
  }
`
