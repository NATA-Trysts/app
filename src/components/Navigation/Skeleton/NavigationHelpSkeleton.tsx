import styled from 'styled-components'

import { NavigationItemSkeleton } from './NavigationItemSkeleton'

const SkeletonWrapper = styled.div`
  width: 100%;
  margin-top: 12px;
`

export const HelpSkeleton = () => {
  return (
    <SkeletonWrapper style={{ marginTop: '12px' }}>
      <NavigationItemSkeleton />
    </SkeletonWrapper>
  )
}
