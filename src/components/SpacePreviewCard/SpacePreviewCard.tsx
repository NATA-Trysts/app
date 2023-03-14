import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Space as SpaceType, useDashboardStore } from '@/stores'

import { CardBackgroundShadow } from './CardBackgroundShadow'
import { PreviewCardContent } from './PreviewCardContent'
import { Skeleton } from './Skeleton'

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

// temp
const currentUserId = '1234'

export const SpacePreviewCard = ({ item, imageUrl, title, subtitle }: SpacePreviewCardProps) => {
  const [selectedSpacePreview, setSelectedSpacePreview] = useDashboardStore((state) => [
    state.selectedSpacePreview,
    state.setSelectedSpacePreview,
  ])
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // for testing skeleton

  const navigate = useNavigate()

  const handleClick = () => {
    if (item.id === selectedSpacePreview?.id) {
      setSelectedSpacePreview(null)
    } else {
      setSelectedSpacePreview(item)
    }
  }

  const handleDoubleClick = () => {
    if (item.authorId === currentUserId) {
      navigate(`/files/${item.id}`)
    } else {
      navigate(`/${item.id}`)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <SpacePreviewCardContainer
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <CardBackgroundShadow isActive={item.id === selectedSpacePreview?.id} isHovered={isHovered} />
          <PreviewCardContent
            imageUrl={imageUrl}
            isActive={item.id === selectedSpacePreview?.id}
            isHovered={isHovered}
            spaceAuthorId={item.authorId || '1234'} // temp
            spaceId={item.id}
            subtitle={subtitle}
            title={title}
            onClickThreeDots={(e) => {
              e.stopPropagation()
              setSelectedSpacePreview(item)
            }}
          />
        </>
      )}
    </SpacePreviewCardContainer>
  )
}
