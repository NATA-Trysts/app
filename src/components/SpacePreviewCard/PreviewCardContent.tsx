import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as ThreeDot } from '@/assets/icons/three-dot.svg'
import { Option, Popover } from '@/components/Popover'
import { Text } from '@/layouts/common'

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

const MemberContainer = styled.div`
  padding: 8px;
  border-radius: 12px;
  background: #212225;
  width: 164px;
`

type PreviewCardContentProps = {
  isActive: boolean
  isHovered: boolean
  title: string
  subtitle: string
  imageUrl: string
  onClickThreeDots: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const PreviewCardContent = ({
  isActive,
  isHovered,
  title,
  subtitle,
  imageUrl,
  onClickThreeDots,
}: PreviewCardContentProps) => {
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
        <Popover
          align="center"
          content={
            <MemberContainer>
              <Option customHoverBackgroundColor="#C771E1" title="Open in new tab" onClick={() => {}} />
              <Option customHoverBackgroundColor="#C771E1" title="Edit space" onClick={() => {}} />
              <Option customHoverBackgroundColor="#C771E1" title="Copy URL" onClick={() => {}} />
              <Option customHoverBackgroundColor="#FC677B" title="Delete space" onClick={() => {}} />
            </MemberContainer>
          }
          side="right"
          sideOffset={28}
        >
          <div onClick={(e) => onClickThreeDots(e)}>
            <ThreeDot />
          </div>
        </Popover>
      </CardBody>
    </CardContentContainer>
  )
}
