import styled from 'styled-components'

export type CustomColor = 'purple' | 'green' | 'blue' | 'yellow' | 'pink'

export const customColorHueMapping = {
  pink: 291,
  green: 137,
  blue: 216,
  yellow: 36,
  purple: 256,
}

const handleCustomColor = (color: CustomColor) => customColorHueMapping[color]

export const CustomableContainer = styled.div<{ customColor: CustomColor }>`
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
