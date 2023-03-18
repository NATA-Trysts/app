import styled from 'styled-components'

import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

const Wrapper = styled.div`
  width: 100%;
  padding: 8px;
  background: var(--color-5);
  display: grid;
  grid-template-columns: 40px 1fr;
  border-radius: 8px;
`

const TextWrapper = styled.div`
  width: 80%;
  margin-left: 8px;
  z-index: 0;
  position: relative;
`

export const SingleCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
      <Wrapper>
        <SkeletonItem circle height={40} width={40} />
        <TextWrapper>
          <SkeletonItem height={18} width={160} />
          <SkeletonItem height={14} width={100} />
        </TextWrapper>
      </Wrapper>
    </SkeletonTheme>
  )
}
