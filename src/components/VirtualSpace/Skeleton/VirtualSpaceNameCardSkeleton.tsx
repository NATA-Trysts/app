import styled from 'styled-components'

import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

const Container = styled.div`
  padding: 16px;
  width: 240px;
  border-radius: 16px;
  background: var(--color-5);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VirtualSpaceNameCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
      <Container>
        <SkeletonItem height={18} width={240} />
      </Container>
    </SkeletonTheme>
  )
}
