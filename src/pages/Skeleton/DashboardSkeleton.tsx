import styled from 'styled-components'

import { HeaderDashboard } from '@/components/Dashboard'
import { SpaceSectionSkeleton } from '@/components/Dashboard/Skeleton/SpaceSectionSkeleton'
import { NavigationPanelSkeleton } from '@/components/Navigation'

const DashboardSkeletonPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #121316;
`

const Body = styled.div`
  width: 100%;
  position: relative;
  top: 72px;
  height: calc(100vh - 88px);
  display: grid;
  grid-template-columns: 1fr auto;
`

const DashboardSkeleton = () => {
  return (
    <DashboardSkeletonPage>
      <HeaderDashboard />
      <Body>
        <NavigationPanelSkeleton />
        <SpaceSectionSkeleton />
      </Body>
    </DashboardSkeletonPage>
  )
}

export default DashboardSkeleton
