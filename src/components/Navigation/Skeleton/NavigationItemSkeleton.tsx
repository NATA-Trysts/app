import styled from 'styled-components'

import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

const SkeletonContainer = styled.div`
  margin: 6px 0;
`

export const NavigationItemSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
        <SkeletonItem height={32} width={196} />
      </SkeletonTheme>
    </SkeletonContainer>
  )
}
