import styled from 'styled-components'

import { useDashboardStore } from '@/stores'

import { NavigationArrow } from '../NavigationArrow'
import { HelpSkeleton } from './NavigationHelpSkeleton'
import { NavigationItemSkeleton } from './NavigationItemSkeleton'
import { ProfileSkeleton } from './NavigationProfileSkeleton'

const NavigationPanelSkeletonContainer = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  width: ${({ isExpanded }) => (isExpanded ? '224px' : '60px')};
  height: 100%;
  left: 16px;
  background-color: #191a1d;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease;
`

const Body = styled.div<{ isExpanded: boolean }>`
  width: ${({ isExpanded }) => (isExpanded ? '200px' : '36px')};
  height: 100%;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
`

const Upper = styled.div``

const Lower = styled.div``

export const NavigationPanelSkeleton = () => {
  const isExpanded = useDashboardStore((state) => state.isExpanded)

  return (
    <NavigationPanelSkeletonContainer isExpanded={isExpanded}>
      <Body isExpanded={isExpanded}>
        <Upper>
          <NavigationItemSkeleton />
          <NavigationItemSkeleton />
          <NavigationItemSkeleton />
        </Upper>
        <Lower>
          <ProfileSkeleton isExpanded={isExpanded} />
          <HelpSkeleton />
        </Lower>
      </Body>
      <NavigationArrow />
    </NavigationPanelSkeletonContainer>
  )
}
