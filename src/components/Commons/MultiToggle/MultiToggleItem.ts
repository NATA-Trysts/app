import styled from 'styled-components'

import { ToggleButton } from './ToggleButton'

export const ToggleLabel = styled.label`
  box-sizing: border-box;
  padding: 8px 16px;
  outline: 1px solid #555555;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;

  transition: background-color 0.25s ease, color 0.25s ease;

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
  user-select: none;
`
export const StyledToggleButton = styled(ToggleButton)`
  width: 0;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  opacity: 0;
`

export const ToggleContainer = styled.div``

export const ToggleGroup = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 8px;
`
