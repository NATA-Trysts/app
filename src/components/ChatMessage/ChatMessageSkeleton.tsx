import styled from 'styled-components'

import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 6px;
`

const ContentContainer = styled.div`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--color-5);
`

export const ChatMessageSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
      <Container>
        <SkeletonItem circle height={32} width={32} />
        <ContentContainer>
          <SkeletonItem height={18} width={100} />
          <SkeletonItem height={36} width={'100%'} />
        </ContentContainer>
      </Container>
    </SkeletonTheme>
  )
}
