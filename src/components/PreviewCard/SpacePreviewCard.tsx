import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useCopyToClipboard } from '@/hooks'
import { Space } from '@/models/Space'
import { useMemberStore, useSpacePreviewStore } from '@/stores'

import { CardBackgroundShadow } from './CardBackgroundShadow'
import { CardOptions, Owner } from './CardOptions'
import { PreviewCardContent } from './PreviewCardContent'

const SpacePreviewCardContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
`

type SpacePreviewCardProps = {
  space: Space
  imageUrl: string
  title: string
  subtitle: string
}

export const SpacePreviewCard = ({ space, imageUrl, title, subtitle }: SpacePreviewCardProps) => {
  const [selectedSpacePreview, setSelectedSpacePreview] = useSpacePreviewStore((state) => [
    state.selectedCardPreview,
    state.setSelectedCardPreview,
  ])
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const [user] = useMemberStore((state) => [state.user])

  const handleClick = () => {
    if (space._id === selectedSpacePreview) {
      setSelectedSpacePreview(null)
    } else {
      setSelectedSpacePreview(space._id)
    }
  }

  const handleDoubleClick = () => {
    if (ownerStatus === 'owner') {
      navigate(`/files/${space._id}`)
    } else {
      navigate(`/${space.code}`)
    }
  }

  const { copy } = useCopyToClipboard()
  const [ownerStatus, setOwnerStatus] = useState<Owner>('owner')

  const handleHostClick = () => {
    navigate(`/${space.code}`)
  }

  const handleOpenInNewTabClick = () => {
    window.open(`/${space.code}`, '_blank')
  }

  const handleEditSpaceClick = () => {
    navigate(`/files/${space.code}`)
  }

  const handleCopyUrlClick = () => {
    // temp local host url
    copy(`http://127.0.0.1:5173/${space.code}`)
  }

  const optionsMap = new Map<Owner, CardOptions[]>([
    [
      'owner',
      [
        { customHoverBackgroundColor: '#C771E1', title: 'Host', onClick: handleHostClick },
        { customHoverBackgroundColor: '#C771E1', title: 'Open in new tab', onClick: handleOpenInNewTabClick },
        { customHoverBackgroundColor: '#C771E1', title: 'Edit space', onClick: handleEditSpaceClick },
        { customHoverBackgroundColor: '#C771E1', title: 'Copy URL', onClick: handleCopyUrlClick },
        { customHoverBackgroundColor: '#FC677B', title: 'Delete space', onClick: () => {} },
      ],
    ],
    [
      'guest',
      [
        { customHoverBackgroundColor: '#C771E1', title: 'Open in new tab', onClick: handleOpenInNewTabClick },
        { customHoverBackgroundColor: '#C771E1', title: 'Duplicate', onClick: () => {} },
        { customHoverBackgroundColor: '#C771E1', title: 'Copy URL', onClick: handleCopyUrlClick },
      ],
    ],
  ])

  useEffect(() => {
    setOwnerStatus(
      (typeof space.author === 'string' ? space.author : space.author._id) === user._id ? 'owner' : 'guest',
    )
  }, [space.author, user._id])

  return (
    <SpacePreviewCardContainer
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBackgroundShadow isActive={space._id === selectedSpacePreview} isHovered={isHovered} />
      <PreviewCardContent
        imageUrl={imageUrl}
        isActive={space._id === selectedSpacePreview}
        isHovered={isHovered}
        options={optionsMap.get(ownerStatus)}
        subtitle={subtitle}
        title={title}
        onClickThreeDots={(e) => {
          e.stopPropagation()
          setSelectedSpacePreview(space._id)
        }}
      />
    </SpacePreviewCardContainer>
  )
}
