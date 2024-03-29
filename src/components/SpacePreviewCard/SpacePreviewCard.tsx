// @ts-nocheck

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Space as SpaceType, useMemberStore, useSpacePreviewStore } from '@/stores'

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
}

export const SpacePreviewCard = ({ item, imageUrl, title, subtitle }: SpacePreviewCardProps) => {
  const [selectedSpacePreview, setSelectedSpacePreview] = useSpacePreviewStore((state) => [
    state.selectedSpacePreview,
    state.setSelectedSpacePreview,
  ])
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const [user] = useMemberStore((state) => [state.user])

  const handleClick = () => {
    if (item._id === selectedSpacePreview?._id) {
      setSelectedSpacePreview(null)
    } else {
      setSelectedSpacePreview(item)
    }
  }

  const handleDoubleClick = () => {
    if (item.author._id === user._id) {
      navigate(`/files/${item._id}`)
    } else {
      navigate(`/${item.code}`)
    }
  }

  return (
    <SpacePreviewCardContainer
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBackgroundShadow isActive={item._id === selectedSpacePreview?._id} isHovered={isHovered} />
      <PreviewCardContent
        imageUrl={imageUrl}
        isActive={item._id === selectedSpacePreview?._id}
        isHovered={isHovered}
        spaceAuthorId={(item.author as any)._id}
        spaceCode={item.code}
        spaceId={item._id}
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
