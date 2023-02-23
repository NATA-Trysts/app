import { useState } from 'react'
import styled from 'styled-components'

import { CardBackgroundShadow } from './CardBackgroundShadow'
import { PreviewCardContent } from './PreviewCardContent'

const SpacePreviewCardContainer = styled.div`
  position: relative;
  width: 261px;
  cursor: pointer;
  transition: all 0.2s ease;
`

type SpacePreviewCardProps = {
  imageUrl: string
  title: string
  subtitle: string
}

export const SpacePreviewCard = ({ imageUrl, title, subtitle }: SpacePreviewCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <SpacePreviewCardContainer
      onClick={() => setIsActive((prev) => !prev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PreviewCardContent
        imageUrl={imageUrl}
        isActive={isActive}
        isHovered={isHovered}
        subtitle={subtitle}
        title={title}
      />
      <CardBackgroundShadow isActive={isActive} isHovered={isHovered} />
    </SpacePreviewCardContainer>
  )
}
