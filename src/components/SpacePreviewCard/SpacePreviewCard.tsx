import { useState } from 'react'
import styled from 'styled-components'

import { Space as SpaceType, useDashboardStore } from '@/stores/dashboard'

import { CardBackgroundShadow } from './CardBackgroundShadow'
import { PreviewCardContent } from './PreviewCardContent'

const SpacePreviewCardContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
`

type SpacePreviewCardProps = {
  item: SpaceType
  imageUrl: string
  title: string
  subtitle: string
  isActive: boolean
  onClick: () => void
}

export const SpacePreviewCard = ({ item, imageUrl, title, subtitle, isActive, onClick }: SpacePreviewCardProps) => {
  const setSelectedSpacePreview = useDashboardStore((state) => state.setSelectedSpacePreview)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <SpacePreviewCardContainer
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBackgroundShadow isActive={isActive} isHovered={isHovered} />
      <PreviewCardContent
        imageUrl={imageUrl}
        isActive={isActive}
        isHovered={isHovered}
        subtitle={subtitle}
        title={title}
        onClickThreeDots={(e) => {
          e.stopPropagation()
          setSelectedSpacePreview(item)
        }}
      />
    </SpacePreviewCardContainer>
  )
}
