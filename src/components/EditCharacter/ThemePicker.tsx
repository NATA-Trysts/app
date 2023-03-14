import { motion } from 'framer-motion'
import styled from 'styled-components'

import { useAppStore } from '@/stores'

import { CustomColor } from '../Commons'

const ThemePickerContainer = styled(motion.div)`
  position: absolute;
  left: 120px;
  pointer-events: auto;
  top: 687px;

  width: 300px;
  height: 72px;
  background-color: #191a1d;
  border-radius: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'theme1 theme2 theme3 theme4 theme5';
  align-items: center;
  justify-items: center;
`

const Theme = styled.div<{ backgroundColor: string; active: boolean }>`
  width: 40px;
  height: 40px;
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

type ThemePickerProps = {
  isEdit: boolean
}

export const ThemePicker = ({ isEdit }: ThemePickerProps) => {
  const [customColor, setCustomColor] = useAppStore((state) => [state.customColor, state.setCustomColor])
  const handleClickTheme = (color: CustomColor) => {
    setCustomColor(color)
  }

  return (
    <ThemePickerContainer
      animate={{
        x: isEdit ? 0 : -500,
      }}
    >
      <Theme active={customColor === 'pink'} backgroundColor="#C771E1" onClick={() => handleClickTheme('pink')} />
      <Theme active={customColor === 'green'} backgroundColor="#71E191" onClick={() => handleClickTheme('green')} />
      <Theme active={customColor === 'blue'} backgroundColor="#719EE1" onClick={() => handleClickTheme('blue')} />
      <Theme active={customColor === 'yellow'} backgroundColor="#E1B471" onClick={() => handleClickTheme('yellow')} />
      <Theme active={customColor === 'purple'} backgroundColor="#8E71E1" onClick={() => handleClickTheme('purple')} />
    </ThemePickerContainer>
  )
}
