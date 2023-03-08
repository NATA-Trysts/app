import styled from 'styled-components'

type TextSize = 'small' | 'medium' | 'large' | 'x-large'
type TextWeight = 'lighter' | 'normal' | 'bold'

const textSizeMapping = {
  small: '12px',
  medium: '14px',
  large: '20px',
  'x-large': '40px',
}

const textWeightMapping = {
  lighter: 500,
  normal: 600,
  bold: 700,
}

const handleTextSize = (size: TextSize) => textSizeMapping[size]
const handleTextWeight = (size: TextWeight) => textWeightMapping[size]

export const Text = styled.span<{ size: TextSize; weight: TextWeight }>`
  font-family: var(--font-family);
  font-size: ${(props) => handleTextSize(props.size)};
  font-weight: ${(props) => handleTextWeight(props.weight)};
  letter-spacing: 0.025em;
`
