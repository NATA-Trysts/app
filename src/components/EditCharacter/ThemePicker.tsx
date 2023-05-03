import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useAppStore } from '@/stores'

import { CustomColor } from '../Commons'

const ThemePickerContainer = styled(motion.div)`
  position: absolute;
  right: 100px;
  pointer-events: auto;
  top: 96px;

  width: 300px;
  height: 580px;
  background-color: #191a1d;
  border-radius: 16px;
  padding: 0 20px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'theme1 theme2 theme3 theme4';
  align-items: center;
  justify-items: center;
  grid-gap: 16px;
`

const Theme = styled.div<{ backgroundColor: string; active: boolean }>`
  width: 52px;
  height: 52px;
  background: ${({ backgroundColor }) => backgroundColor};
  border: 3px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: border 0.3s ease;

  &:hover {
    border: 3px solid #ffffff;
  }

  ${({ active }) =>
    active &&
    `
    border: 3px solid #ffffff;
  `}
`

const Title = styled(Text)`
  font-size: 16px;
  padding-top: 16px;
  padding-bottom: 12px;
  display: block;
`

type ThemePickerProps = {
  isEdit?: boolean
}

export const ThemePicker = ({ isEdit = false }: ThemePickerProps) => {
  const [customColor, setCustomColor] = useAppStore((state) => [state.customColor, state.setCustomColor])
  const handleClickTheme = (color: CustomColor) => {
    setCustomColor(color)
  }

  return (
    <ThemePickerContainer
      animate={{
        x: isEdit ? 0 : 500,
      }}
      transition={{
        type: 'spring',
        bounce: 0.3,
        delay: isEdit ? 0.15 : 0,
      }}
    >
      <Title size="medium" weight="normal">
        Theme
      </Title>
      <Wrapper>
        <Theme active={customColor === 'pink'} backgroundColor="#C771E1" onClick={() => handleClickTheme('pink')} />
        <Theme active={customColor === 'green'} backgroundColor="#71E191" onClick={() => handleClickTheme('green')} />
        <Theme active={customColor === 'blue'} backgroundColor="#719EE1" onClick={() => handleClickTheme('blue')} />
        <Theme active={customColor === 'yellow'} backgroundColor="#E1B471" onClick={() => handleClickTheme('yellow')} />
        <Theme active={customColor === 'purple'} backgroundColor="#8E71E1" onClick={() => handleClickTheme('purple')} />
      </Wrapper>
    </ThemePickerContainer>
  )
}
