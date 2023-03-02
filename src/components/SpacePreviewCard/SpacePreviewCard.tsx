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
  isActive?: boolean
  onClick?: () => void
}

export const SpacePreviewCard = ({ item, imageUrl, title, subtitle }: SpacePreviewCardProps) => {
  const [selectedSpacePreview, setSelectedSpacePreview] = useDashboardStore((state) => [
    state.selectedSpacePreview,
    state.setSelectedSpacePreview,
  ])
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (item.id === selectedSpacePreview?.id) {
      setSelectedSpacePreview(null)
    } else {
      setSelectedSpacePreview(item)
    }
  }

  return (
    <SpacePreviewCardContainer
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBackgroundShadow isActive={item.id === selectedSpacePreview?.id} isHovered={isHovered} />
      <PreviewCardContent
        imageUrl={imageUrl}
        isActive={item.id === selectedSpacePreview?.id}
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
