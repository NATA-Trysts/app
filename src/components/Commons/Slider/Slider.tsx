import * as RadixSlider from '@radix-ui/react-slider'
import { CSSProperties, isValidElement, ReactNode, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { SliderMarkContext } from './SliderContext'
import { SliderMark } from './SliderMark'
import { SliderThumbLabel } from './SliderThumbLabel'

export type TrystsSliderProps = RadixSlider.SliderProps & {
  marks?: Record<string | number, ReactNode | Mark>
}

export type Mark = {
  style?: CSSProperties
  label?: ReactNode
}

export type MarkObj = Mark & {
  value: number
}

export const Slider = ({
  marks,
  name,
  min = 0,
  max = 100,
  step = 1,
  orientation = 'horizontal',
  disabled = false,
  minStepsBetweenThumbs = 0,
  defaultValue = [min],
  onValueChange = () => {},
  onValueCommit = () => {},
  inverted = false,
  ...props
}: TrystsSliderProps) => {
  const sliderRef = useRef<HTMLSpanElement>(null)
  const [values, setValues] = useState(defaultValue)

  const handleValueChange = (values: number[]) => {
    setValues(values)
    onValueChange(values)
  }

  const handleMarkClick = (value: number) => {
    setValues((prevValues) => {
      const hasChanged = prevValues[0] !== value

      // console.log(hasChanged ? [value, ...(prevValues.shift(), prevValues)] : prevValues)

      return hasChanged ? [value, ...(prevValues.shift(), prevValues)] : prevValues
    })
  }

  const markList = useMemo<MarkObj[]>(() => {
    const keys = Object.keys(marks || {})

    return keys
      .map((key) => {
        const markValue = Number(key)

        const markObj: MarkObj = {
          value: markValue,
        }

        const mark = marks?.[key]

        if (mark && typeof mark === 'object' && !isValidElement(mark) && ('label' in mark || 'style' in mark)) {
          markObj.style = mark.style
          markObj.label = mark.label
        } else {
          markObj.label = mark as ReactNode
        }

        return markObj
      })
      .filter(({ label }) => label || typeof label === 'number')
      .sort((a, b) => a.value - b.value)
  }, [marks])

  return (
    <SliderContainer>
      <SliderMarkContext.Provider
        value={{ min: min, max: max, currentValues: values, inverted: inverted, marks: markList }}
      >
        {markList.map((mark) => {
          return (
            <SliderPointMark
              key={`pointmark-${mark.value}`}
              style={mark.style}
              value={mark.value}
              onClick={handleMarkClick}
            />
          )
        })}
        {markList.map((mark) => {
          return (
            <SliderLabelMark key={`labelmark-${mark.value}`} style={mark.style} value={mark.value}>
              <SliderText>{mark.label}</SliderText>
            </SliderLabelMark>
          )
        })}
        <SliderRoot
          ref={sliderRef}
          disabled={disabled}
          inverted={inverted}
          max={max}
          min={min}
          minStepsBetweenThumbs={minStepsBetweenThumbs}
          name={name}
          orientation={orientation}
          step={step}
          value={values}
          onValueChange={handleValueChange}
          onValueCommit={onValueCommit}
          {...props}
        >
          <SliderTrack className="SliderTrack">
            <SliderRange className="SliderRange" />
          </SliderTrack>
          <SliderThumbLabel>{values[0]}</SliderThumbLabel>
          <SliderThumb className="SliderThumb" />
        </SliderRoot>
      </SliderMarkContext.Provider>
    </SliderContainer>
  )
}

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
`

export const SliderRoot = styled(RadixSlider.Root)`
  margin-top: 16px;
  padding: 3px 0;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
`

export const SliderTrack = styled(RadixSlider.Track)`
  position: relative;
  height: 2px;
  background: hsla(261, 26%, 22%, 1);
  border-radius: 9999px;
  flex-grow: 1;
`

export const SliderRange = styled(RadixSlider.Range)`
  position: absolute;
  height: 2px;
  border-radius: 9999px;
  background: hsla(284, 72%, 55%, 1);
`

export const SliderThumb = styled(RadixSlider.Thumb)`
  display: block;
  height: 8px;
  width: 8px;
  background: hsla(284, 72%, 55%, 1);
  border-radius: 50%;

  transition: background 0.25s ease;

  &:hover {
    background: hsla(284, 72%, 45%, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px hsla(284, 72%, 45%, 0.22);
  }
`

export const SliderText = styled.span`
  display: block;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`

export const SliderPointMark = styled(SliderMark)`
  height: 8px;
  width: 8px;
  background: hsla(261, 19%, 40%, 1);
  border-radius: 50%;
  transition: background-color 0.1s linear;
  z-index: 99;
  cursor: pointer;

  &[data-highlighted] {
    background-color: hsla(284, 72%, 55%, 1);
  }
`

export const SliderLabelMark = styled(SliderMark)`
  top: 0%;
  transform: translate(-50%, -100%);
  pointer-events: none;
`

export const SliderThumblMark = styled(SliderMark)`
  width: 22px;
  border-radius: 4px;
  background-color: hsla(284, 72%, 55%, 1);

  font-size: 12px;
  text-align: center;
  color: #ffffff;

  transform: translate(-50%, 100%);
  top: 1px;
  z-index: 1;

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

  &[data-mark-highlighted] {
    opacity: 0;
  }
`
