import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

const NewUpdateContainer = styled.section`
  width: 100%;
  height: auto;
  margin-top: 28px;
`

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled(Text)`
  margin: 16px 20px;
`

export const NewUpdatesSkeleton = () => {
  return (
    <NewUpdateContainer>
      <Wrapper>
        <Title size="large" weight="normal">
          New Updates
        </Title>
        <SkeletonTheme baseColor="#838383" highlightColor="#cac9c9">
          <SkeletonItem height={211} width="100%" />
        </SkeletonTheme>
      </Wrapper>
    </NewUpdateContainer>
  )
}
