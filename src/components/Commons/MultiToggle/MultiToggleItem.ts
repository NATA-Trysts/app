import styled from 'styled-components'

import { ToggleButton } from './ToggleButton'

export const ToggleLabel = styled.label`
  box-sizing: border-box;
  padding: 8px 16px;
  outline: 1px solid #555555;
  border-radius: 8px;
  background: transparent;

  transition: background-color 1s ease, color 1s ease;

  &.selected {
    outline: 0px;
  }

  &:hover {
    background: #212121;
  }

  display: flex;
  position: relative;

  &.selected {
    background: #ffffff;
  }
`

export const ToggleLableContent = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #696969;
  cursor: pointer;
`
export const StyledToggleButton = styled(ToggleButton)`
  width: 0%;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  opacity: 0;
`

export const ToggleContainer = styled.div``

export const ToggleGroup = styled.div`
  display: flex;
  gap: 8px;
`
