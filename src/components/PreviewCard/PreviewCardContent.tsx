import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useDashboardStore } from '@/stores'

import { CardOptions } from './CardOptions'

const CardContentContainer = styled.div<{ isActive: boolean; isDisplayed: boolean }>`
  position: relative;
  background-color: ${({ isDisplayed }) => (isDisplayed ? '#212225' : 'transparent')};
  border-radius: 12px;
  overflow: hidden;
  padding: 1px;
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

  span {
    text-transform: capitalize;
  }
`

const CardImageContainer = styled.div`
  width: 94%;
  height: 90%;
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;
  transition: width, height 0.2s ease;
`

const CardImage = styled.img<{ isExpanded: boolean }>`
  width: 100%;
  height: 168px;
  object-fit: cover;
  transform: ${({ isExpanded }) => (isExpanded ? 'scale(1)' : 'scale(1.1)')};
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
  options?: CardOptions[]
  onClickThreeDots: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const PreviewCardContent = ({
  isActive,
  isHovered,
  title,
  subtitle,
  imageUrl,
  onClickThreeDots,
  options,
}: PreviewCardContentProps) => {
  const [isDisplayed, setIsDisplayed] = useState(false)
  const isExpanded = useDashboardStore((state) => state.isExpanded)

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
        <CardImage alt="Preview" isExpanded={isExpanded} loading="lazy" src={imageUrl} />
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
        <CardOptions options={options} onClickThreeDots={onClickThreeDots} />
      </CardBody>
    </CardContentContainer>
  )
}
