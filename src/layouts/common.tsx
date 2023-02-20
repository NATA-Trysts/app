import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

type TextSize = 'small' | 'medium' | 'large'
type TextWeight = 'lighter' | 'normal' | 'bold'

const textSizeMapping = {
  small: '12px',
  medium: '14px',
  large: '20px',
}

const textWeightMapping = {
  lighter: 500,
  normal: 600,
  bold: 700,
}

const handleTextSize = (size: TextSize) => textSizeMapping[size]
const handleTextWeight = (size: TextWeight) => textWeightMapping[size]

const Text = styled.span<{ size: TextSize; weight: TextWeight }>`
  font-family: var(--font-family);
  font-size: ${(props) => handleTextSize(props.size)};
  font-weight: ${(props) => handleTextWeight(props.weight)};
  letter-spacing: 0.025em;
`

type CustomColor = 'purple' | 'green' | 'blue'

const customColorHueMapping = {
  purple: 291,
  green: 137,
  blue: 216,
}

const handleCustomColor = (color: CustomColor) => customColorHueMapping[color]

const CustomableContainer = styled.div<{ customColor: CustomColor }>`
  --color-6: hsla(${(props) => handleCustomColor(props.customColor)}, 81%, 6%, 1);
  --color-5: hsla(${(props) => handleCustomColor(props.customColor)}, 79%, 11%, 1);
  --color-4: hsla(${(props) => handleCustomColor(props.customColor)}, 55%, 21%, 1);
  --color-3: hsla(${(props) => handleCustomColor(props.customColor)}, 65%, 66%, 1);
  --color-2: hsla(${(props) => handleCustomColor(props.customColor)}, 25%, 66%, 1);
  --color-1: hsla(${(props) => handleCustomColor(props.customColor)}, 31%, 75%, 1);

  background: var(--color-6);
  width: 100%;
  height: 100%;
  transition: background 0.25s ease;
  will-change: background;
`

export { Container, CustomableContainer, Text }
export type { CustomColor }
