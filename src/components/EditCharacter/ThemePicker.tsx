import styled from 'styled-components'

import { useEditCharacterStore } from '@/stores'

const ThemePickerContainer = styled.div`
  position: absolute;
  left: 120px;
  bottom: 51px;
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

export const ThemePicker = () => {
  const [theme, setTheme] = useEditCharacterStore((state) => [state.theme, state.setTheme])

  const handleClickTheme = (color: string) => {
    setTheme(color)
  }

  return (
    <ThemePickerContainer>
      <Theme active={theme === '#C771E1'} backgroundColor="#C771E1" onClick={() => handleClickTheme('#C771E1')} />
      <Theme active={theme === '#71E191'} backgroundColor="#71E191" onClick={() => handleClickTheme('#71E191')} />
      <Theme active={theme === '#719EE1'} backgroundColor="#719EE1" onClick={() => handleClickTheme('#719EE1')} />
      <Theme active={theme === '#E1B471'} backgroundColor="#E1B471" onClick={() => handleClickTheme('#E1B471')} />
      <Theme active={theme === '#8E71E1'} backgroundColor="#8E71E1" onClick={() => handleClickTheme('#8E71E1')} />
    </ThemePickerContainer>
  )
}
