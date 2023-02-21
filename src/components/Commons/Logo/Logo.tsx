import './logo.style.scss'

import styled from 'styled-components'

import { ReactComponent as LogoSvg } from '@/assets/icons/logo.svg'

const LogoContainer = styled.div<{ width: number; aspectRatio: string }>`
  width: ${(props) => `${props.width}px`};
  display: flex;
  position: relative;
  aspect-ratio: ${(props) => props.aspectRatio};

  &:before {
    content: '';
    width: ${(props) => `${(props.width * 22.55) / 66}px`};
    aspect-ratio: 22.55/12;
    display: block;
    position: absolute;
    top: 33.33%;
    left: 10%;

    background: linear-gradient(90deg, rgba(255, 147, 138, 0.6) 1.24%, rgba(255, 110, 136, 0.6) 42.49%);
    filter: blur(7.13644px);
    filter: blur(${(props) => `${(props.width * 7.13644) / 66}px`});
  }
`

const StyleLogo = styled(LogoSvg)``

export const Logo = ({
  width = 65,
  aspectRatio = { x: 65, y: 19 },
}: {
  width?: number
  aspectRatio?: { x: number; y: number }
}) => {
  const svgSize = { width: width, height: (width * aspectRatio.y) / aspectRatio.x }

  return (
    <LogoContainer aspectRatio={`${aspectRatio.x}/${aspectRatio.y}`} width={width}>
      {/* <StyleLogo /> */}
      <StyleLogo height={svgSize.height} viewBox={`0 0 ${aspectRatio.x} ${aspectRatio.y}`} width={svgSize.width} />
    </LogoContainer>
  )
}
