import { ReactNode } from 'react'
import styled from 'styled-components'

export type ChipProps = {
  color?: string
  children?: ReactNode
}

export const Chip = ({ color, children }: ChipProps) => {
  return <StyledChip color={color}>{children}</StyledChip>
}

const StyledChip = styled.span<{ color?: string }>`
  height: 20px;
  padding: 3px 8px;
  border-radius: 50px;
  border: 1px solid ${(props) => props.color ?? 'hsla(0, 0%, 100%, 1)'};
  color: ${(props) => props.color ?? 'hsla(0, 0%, 100%, 1)'};

  display: inline-block;
  overflow: hidden;

  font-weight: 500;
  font-size: 10px;
  line-height: 14px;

  vertical-align: middle;
`
