import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Shadow = styled.div<{ isActive: boolean; isDisplayed: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 158px;
  height: 127px;
  background: #7b9ac8;
  filter: blur(50px);
  border-radius: 8px;
  z-index: 1;
  opacity: ${({ isDisplayed }) => (isDisplayed ? 1 : 0)};
  transition: opacity 0.2s ease;

  ${({ isActive }) =>
    isActive && {
      opacity: 1,
    }}
`

type CardBackgroundShadowProps = {
  isActive: boolean
  isHovered: boolean
}

export const CardBackgroundShadow = ({ isActive, isHovered }: CardBackgroundShadowProps) => {
  const [isDisplayed, setIsDisplayed] = useState(false)

  // delay 100ms to avoid flickering
  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setIsDisplayed(true)
      }, 50)

      return () => clearTimeout(timer)
    } else {
      setIsDisplayed(false)
    }
  }, [isHovered])

  return <Shadow isActive={isActive} isDisplayed={isDisplayed} />
}
