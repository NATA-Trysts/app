import styled from 'styled-components'

import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

const Container = styled.div`
  display: flex;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 132px;
`

const Wrapper = styled.div`
  gap: 8px;
  border-radius: 16px;
  display: flex;
  padding: 12px;
  align-items: center;
  background: var(--color-5);
`

export const MyInformationCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
      <Container>
        <Wrapper>
          <SkeletonItem circle height={40} width={40} />
          <NameContainer>
            <SkeletonItem height={16} width={132} />
            <SkeletonItem height={14} width={100} />
          </NameContainer>
        </Wrapper>
      </Container>
    </SkeletonTheme>
  )
}
