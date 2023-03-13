import { ReactNode, useCallback, useContext } from 'react'
import styled from 'styled-components'

import { SliderMarkContext } from './SliderContext'
import { convertValueToPercentage, getThumbInBoundsOffset } from './SliderUtils'

export type SliderThumbLabelProps = {
  className?: string
  children?: ReactNode
}

export const SliderThumbLabel = ({ ...props }: SliderThumbLabelProps) => {
  const { min, max, inverted, currentValues, marks } = useContext(SliderMarkContext)

  const convertValueToMarkPosition = useCallback(
    (value: number): string => {
      const percent = convertValueToPercentage(value, min, max)
      const offset = getThumbInBoundsOffset(8, percent, inverted ? -1 : 1)

      return `left: calc(${percent}% + ${offset}px);`
    },
    [inverted, min, max],
  )

  const value = currentValues[0]

  const dataAttributes = {
    'data-mark-touched': marks?.find((mark) => mark.value === value) !== undefined ? '' : undefined,
  }

  return <StyledThumbLabel {...dataAttributes} {...props} position={convertValueToMarkPosition(currentValues[0])} />
}

export const StyledThumbLabel = styled.div<{ position?: string }>`
  position: absolute;
  transform: translate(-50%, 100%);
  ${(props) => props.position}
  top: 1px;
  z-index: 1;

  width: 22px;
  border-radius: 4px;
  background-color: hsla(284, 72%, 55%, 1);

  font-size: 12px;
  text-align: center;
  color: #ffffff;

  opacity: 1;
  transition: opacity 0.5s ease;

  &::before {
    position: absolute;
    content: '';
    display: block;
    left: 50%;
    top: -2px;
    transform: translate(-50%, -50%);
    z-index: 0;

    border-bottom: 5px solid hsla(284, 72%, 55%, 1);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  &[data-mark-touched] {
    opacity: 0;
  }
`
