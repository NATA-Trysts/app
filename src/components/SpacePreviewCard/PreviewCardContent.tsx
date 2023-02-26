import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as ThreeDot } from '@/assets/icons/three-dot.svg'
import { Text } from '@/layouts/common'

const CardContentContainer = styled.div<{ isActive: boolean; isDisplayed: boolean }>`
  position: relative;
  width: 261px;
  background-color: ${({ isDisplayed }) => (isDisplayed ? '#212225' : 'transparent')};
  border-radius: 12px;
  overflow: hidden;
  padding: 1px;
  z-index: 2;
  transition: all 0.2s ease;

  ${({ isActive }) =>
    isActive && {
      background: '#212225 !important',
    }}

  svg {
    width: 20px;
    height: 20px;
    object-fit: cover;
    padding: 2px;
    border-radius: 50%;
    background-color: transparent;
    opacity: ${({ isDisplayed }) => (isDisplayed ? 1 : 0)};
    transition: all 0.2s ease;

    ${({ isActive }) =>
      isActive && {
        opacity: 1,
      }}

    &:hover {
      background-color: #191a1d;
    }
  }
`

const CardImageContainer = styled.div`
  width: 245px;
  height: 165px;
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;
`

const CardImage = styled.img<{ isDisplayed: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${({ isDisplayed }) => (isDisplayed ? 'scale(1)' : 'scale(1.1)')};
  transition: all 0.4s ease;
`

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px 16px 16px;
  z-index: 2;
`

const CardBodyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span:last-child {
    color: #7d7d7d;
  }
`

type PreviewCardContentProps = {
  isActive: boolean
  isHovered: boolean
  title: string
  subtitle: string
  imageUrl: string
}

export const PreviewCardContent = ({ isActive, isHovered, title, subtitle, imageUrl }: PreviewCardContentProps) => {
  const [isDisplayed, setIsDisplayed] = useState(false)

  // delay 100ms to prevent flickering
  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        setIsDisplayed(false)
      }, 50)

      return () => clearTimeout(timer)
    } else {
      setIsDisplayed(true)
    }
  }, [isHovered])

  return (
    <CardContentContainer isActive={isActive} isDisplayed={isDisplayed}>
      <CardImageContainer>
        <CardImage alt="Preview" isDisplayed={isDisplayed} loading="lazy" src={imageUrl} />
      </CardImageContainer>
      <CardBody>
        <CardBodyText>
          <Text size="medium" weight="normal">
            {title}
          </Text>
          <Text size="small" weight="normal">
            {subtitle}
          </Text>
        </CardBodyText>
        <ThreeDot />
      </CardBody>
    </CardContentContainer>
  )
}
