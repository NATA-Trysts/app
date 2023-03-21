import styled from 'styled-components'

import { HeaderDashboard, SpaceSection } from '@/components/Dashboard'
import { NavigationPanel } from '@/components/Navigation'
import { NotificationStack } from '@/components/Notification'

const DashboardPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #121316;
`

const Body = styled.div`
  width: 100%;
  top: 72px;
  height: calc(100vh - 88px);
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;
`

const Dashboard = () => {
  return (
    <>
      <DashboardPage>
        <HeaderDashboard />
        <Body>
          <NavigationPanel />
          <SpaceSection />
        </Body>
      </DashboardPage>
      <NotificationStack />
    </>
  )
}

export default Dashboard
