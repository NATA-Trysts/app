import styled from 'styled-components'
import useSWR from 'swr'

import { DashboardSkeleton, HeaderDashboard, SpaceSection } from '@/components/Dashboard'
import { NavigationPanel } from '@/components/Navigation'
import { NotificationStack } from '@/components/Notification'
import { useAxiosPrivate } from '@/hooks'

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
  const axiosPrivate = useAxiosPrivate()
  const fetcher = (url: string) => axiosPrivate.get(url).then((res) => res.data)

  const mySpaces = useSWR('/spaces/user/x1JHPP7pqxB4e45v', fetcher)
  const librarySpaces = useSWR('/spaces', fetcher)

  if (mySpaces.error || librarySpaces.error) return <div>failed to load</div>

  if (mySpaces.isLoading || librarySpaces.isLoading) return <DashboardSkeleton />

  return (
    <>
      <DashboardPage>
        <HeaderDashboard />
        <Body>
          <NavigationPanel />
          <SpaceSection librarySpaces={librarySpaces.data} mySpaces={mySpaces.data} />
        </Body>
      </DashboardPage>
      <NotificationStack />
    </>
  )
}

export default Dashboard
