import { useEffect } from 'react'
import styled from 'styled-components'

import { exploreSpacesFromApi, HeaderDashboard, SpaceSection, useDashboard } from '@/components/Dashboard'
import { NavigationPanel } from '@/components/Navigation'
import { NotificationStack } from '@/components/Notification'
import { DeleteDialog } from '@/components/SpacePreviewCard'
import { useAxiosPrivate } from '@/hooks'
import { useDashboardStore, useMemberStore } from '@/stores'

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
  const [user] = useMemberStore((state) => [state.user])
  const [setMySpaces, setExploreSpaces, setLibrarySpaces] = useDashboardStore((state) => [
    state.setMySpaces,
    state.setExploreSpaces,
    state.setLibrarySpaces,
  ])
  const { convertSpacesToLibrarySpaces } = useDashboard()

  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    // temporary using data, will be replaced with api call
    setExploreSpaces(exploreSpacesFromApi)

    // define promise and using promise all to fetch spaces
    const mySpacesPromise = axiosPrivate.get(`/spaces/user/${user._id}`)
    const librarySpacesPromise = axiosPrivate.get(`/spaces`)

    Promise.all([mySpacesPromise, librarySpacesPromise]).then((res) => {
      setMySpaces(res[0].data)
      setLibrarySpaces(convertSpacesToLibrarySpaces(res[1].data))
    })
  }, [])

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
      <DeleteDialog />
    </>
  )
}

export default Dashboard
