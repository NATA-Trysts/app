import styled from 'styled-components'

import { useDashboardStore } from '@/stores'

import { ExploresSkeleton } from './ExploresSkeleton'
import { NewUpdatesSkeleton } from './NewUpdatesSkeleton'
import { RecentSkeleton } from './RecentSkeleton'

const SpaceSkeletonContainer = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  right: 35px;
  width: ${({ isExpanded }) => (isExpanded ? 'calc(100vw - 300px)' : 'calc(100vw - 140px)')};
  height: 100%;
  transition: width 0.3s ease;
  overflow: hidden;
`

export const SpaceSectionSkeleton = () => {
  const [isExpanded] = useDashboardStore((state) => [state.isExpanded])

  return (
    <SpaceSkeletonContainer isExpanded={isExpanded}>
      <RecentSkeleton />
      <NewUpdatesSkeleton />
      <ExploresSkeleton />
    </SpaceSkeletonContainer>
  )
}
