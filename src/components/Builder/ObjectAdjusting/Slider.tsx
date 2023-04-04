import * as SliderRadix from '@radix-ui/react-slider'
import styled from 'styled-components'

import { Text } from '@/components/Commons'

const Container = styled.div`
  width: 100%;
  transition: opacity 0.2s ease;
  position: relative;
`

const Title = styled(Text)`
  display: inline-block;
  margin-bottom: 8px;
`

const SliderWrapper = styled.div`
  width: 100%;
`

const Root = styled(SliderRadix.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
  height: 20px;
`

const Track = styled(SliderRadix.Track)`
  background-color: #372d6c;
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`

const Range = styled(SliderRadix.Range)`
  position: absolute;
  background-color: white;
  border-radius: 9999px;
  height: 100%;
`

const Thumb = styled(SliderRadix.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  /* box-shadow: 0 2px 10px var(--blackA7); */
  border-radius: 10px;

  :focus {
    outline: none;
  }
`

type SliderProps = {
  title: string
  setValue: (value: number) => void
}

export const Slider = ({ title, setValue }: SliderProps) => {
  return (
    <Container>
      <Title size="small" weight="normal">
        {title}
      </Title>
      <SliderWrapper>
        <Root aria-label={title} defaultValue={[0.5]} max={1} step={0.1} onValueChange={(value) => setValue(value[0])}>
          <Track>
            <Range />
          </Track>
          <Thumb />
        </Root>
      </SliderWrapper>
    </Container>
  )
}
