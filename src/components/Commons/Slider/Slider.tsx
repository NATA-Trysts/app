import { createContext } from '@chakra-ui/react-utils'
import {
  Slider as ChakraSlider,
  SliderFilledTrack as ChakraSliderFilledTrack,
  SliderMark as ChakraSliderMark,
  SliderMarkProps,
  SliderProps as ChakraSliderProps,
  SliderThumb as ChakraSliderThumb,
  SliderTrack as ChakraSliderTrack,
  useSliderContext,
} from '@chakra-ui/slider'
import { forwardRef } from '@chakra-ui/system'
import { isValidElement, ReactNode, useMemo, useState } from 'react'
import styled, { CSSProperties } from 'styled-components'

export type SliderProps = ChakraSliderProps & {
  marks?: Record<string | number, ReactNode | Mark>
  thumbSize?: number
}

export type Mark = {
  style?: CSSProperties
  label?: ReactNode
}

export type MarkObj = Mark & {
  value: number
}

export type MarkContextType = {
  marks: number[]
}

const [MarkSliderProvider, useMarkSliderContext] = createContext<MarkContextType>({
  name: `MarkSliderContext`,
})

export const Slider = ({
  marks,
  thumbSize = 8,
  onChange = () => {},
  min = 0,
  max = 100,
  defaultValue = min,
  ...props
}: SliderProps) => {
  const [sliderValue, setSliderValue] = useState(defaultValue)

  const markList = useMemo<MarkObj[]>(() => {
    const keys = Object.keys(marks || {})

    return keys
      .map((key) => {
        const mark = marks?.[key]
        const markObj: MarkObj = {
          value: Number(key),
        }

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

  const hanldeValueChange = (value: number) => {
    setSliderValue(value)
    onChange(value)
  }

  return (
    <StyledSlider defaultValue={defaultValue} max={max} min={min} onChange={hanldeValueChange} {...props}>
      <MarkSliderProvider value={{ marks: markList.map((mark) => mark.value) }}>
        {markList.map(({ value, style, label }) => {
          return (
            <SliderMark key={value} style={style} value={value}>
              <SliderMarkPoint />
              <SliderMarkPointDisplay>{label}</SliderMarkPointDisplay>
            </SliderMark>
          )
        })}
        <SliderLabel value={sliderValue}>{sliderValue}</SliderLabel>
        <SliderMainTrack>
          <SliderFilledTrack />
        </SliderMainTrack>
        <SlidderThumb thumbsize={thumbSize} />
      </MarkSliderProvider>
    </StyledSlider>
  )
}

export const StyledSlider = styled(ChakraSlider)`
  margin-top: 16px;
`

export const SliderMark = styled(ChakraSliderMark)`
  margin-top: -12px;
  font-size: 12px;
  color: #ffffff;
  position: relative;
  transform: translate(-50%, -50%);
  z-index: 1;
`

export const SliderLabel = forwardRef<SliderMarkProps, 'div'>((props, ref) => {
  const { getMarkerProps } = useSliderContext()
  const { marks } = useMarkSliderContext()

  const markProps = getMarkerProps(props, ref)

  const labelData = {
    'data-mark-highlighted': marks.find((mark) => mark === markProps.value) !== undefined ? '' : undefined,
  }

  return <StyledSliderLabel {...markProps} {...labelData}></StyledSliderLabel>
})

export const StyledSliderLabel = styled(ChakraSliderMark)`
  width: 22px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: hsla(284, 72%, 55%, 1);

  font-size: 12px;
  text-align: center;
  color: #ffffff;

  position: relative;
  transform: translate(-50%, -50%);
  z-index: 2;

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

export const SliderMarkPoint = styled.div`
  height: 8px;
  width: 8px;
  background: hsla(261, 19%, 40%, 1);
  border-radius: 50%;

  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 20px;

  pointer-events: auto !important;
  cursor: pointer;

  [data-highlighted] & {
    background-color: hsla(284, 72%, 55%, 1);
  }
`

export const SliderMarkPointDisplay = styled.span`
  pointer-events: none;
  position: relative;
`

export const SlidderThumb = styled(ChakraSliderThumb)<{ thumbsize: number }>`
  ${(props) => `height: ${props.thumbsize}px; width: ${props.thumbsize}px;`}

  background: hsla(284, 72%, 55%, 1);
  border-radius: 50%;

  z-index: 2;

  transform: translateY(-50%);
  transition: background 0.25s ease;

  &:hover {
    background: hsla(284, 72%, 45%, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px hsla(284, 72%, 45%, 0.22);
  }
`

export const SliderMainTrack = styled(ChakraSliderTrack)`
  height: 2px;
  background: hsla(261, 26%, 22%, 1);
  border-radius: 9999px;
`

export const SliderFilledTrack = styled(ChakraSliderFilledTrack)`
  height: 2px;
  border-radius: 9999px;
  background: hsla(284, 72%, 55%, 1);
`
