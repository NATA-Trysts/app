import { useState } from 'react'
import { useNavigate } from 'react-router'
import { createSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { useSpacePreviewStore } from '@/stores'

import { CardBackgroundShadow } from './CardBackgroundShadow'
import { PreviewCardContent } from './PreviewCardContent'

const ThemePreviewCardContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
`

type ThemePreviewCardProps = {
  id: string
  theme: string
  imageUrl: string
  title: string
  subtitle: string
}

export const ThemePreviewCard = ({ id, theme, imageUrl, title, subtitle }: ThemePreviewCardProps) => {
  const [selectedCardPreview, setSelectedCardPreview] = useSpacePreviewStore((state) => [
    state.selectedCardPreview,
    state.setSelectedCardPreview,
  ])
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {}
  const handleDoubleClick = () => {
    navigate({ pathname: '/create', search: `?${createSearchParams({ theme })}` })
  }
  const navigate = useNavigate()

  const handleCreateSpaceWithTheme = () => {
    window.open(`/create?${createSearchParams({ theme })}`, '_blank')
  }

  return (
    <ThemePreviewCardContainer
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBackgroundShadow isActive={id === selectedCardPreview} isHovered={isHovered} />
      <PreviewCardContent
        imageUrl={imageUrl}
        isActive={id === selectedCardPreview}
        isHovered={isHovered}
        options={[
          {
            customHoverBackgroundColor: '#C771E1',
            title: 'Use this theme',
            onClick: () => {
              handleCreateSpaceWithTheme()
            },
          },
        ]}
        subtitle={subtitle}
        title={title}
        onClickThreeDots={(e) => {
          e.stopPropagation()
          setSelectedCardPreview(id)
        }}
      />
    </ThemePreviewCardContainer>
  )
}
