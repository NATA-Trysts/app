import {
  Slider as ChakraSlider,
  SliderFilledTrack as ChakraSliderFilledTrack,
  SliderMark as ChakraSliderMark,
  SliderProps as ChakraSliderProps,
  SliderThumb as ChakraSliderThumb,
  SliderTrack as ChakraSliderTrack,
} from '@chakra-ui/slider'
import { isValidElement, ReactNode, useMemo } from 'react'
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

export const Slider = ({ marks, thumbSize = 8, onChange = () => {}, ...props }: SliderProps) => {
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
    onChange(value)
  }

  return (
    <StyledSlider onChange={hanldeValueChange} {...props}>
      {markList.map(({ value, style, label }) => {
        return (
          <SliderMark key={value} style={style} value={value}>
            <SliderMarkPoint />
            <SliderMarkLabel>{label}</SliderMarkLabel>
          </SliderMark>
        )
      })}
      <SliderMainTrack>
        <SliderFilledTrack />
      </SliderMainTrack>
      <SlidderThumb thumbsize={thumbSize} />
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

export const SliderMarkPoint = styled.div`
  height: 8px;
  width: 8px;
  background: hsla(261, 19%, 40%, 1);
  border-radius: 50%;

  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 20px;

  pointer-events: auto !important;
  cursor: pointer;

  [data-highlighted] & {
    background-color: hsla(284, 72%, 55%, 1);
  }
`

export const SliderMarkLabel = styled.span`
  pointer-events: none;
  position: relative;
`

export const SlidderThumb = styled(ChakraSliderThumb)<{ thumbsize: number }>`
  ${(props) => `height: ${props.thumbsize}px; width: ${props.thumbsize}px;`}

  background: hsla(284, 72%, 55%, 1);
  border-radius: 50%;
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
