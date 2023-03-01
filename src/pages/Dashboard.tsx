import { useEffect } from 'react'
import styled from 'styled-components'

import { exploreSpacesFromApi, librariesSpacesFromApi, mySpacesFromApi, SpaceSection } from '@/components/Dashboard'
import { Header } from '@/components/Header'
import { NavigationPanel } from '@/components/Navigation'
import { useDashboardStore } from '@/stores/dashboard'

const DashboardPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #121316;
`

const Body = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;
`

const Dashboard = () => {
  const [setMySpaces, setExploreSpaces, setLibrarySpaces] = useDashboardStore((state) => [
    state.setMySpaces,
    state.setExploreSpaces,
    state.setLibrarySpaces,
  ])

  useEffect(() => {
    setMySpaces(mySpacesFromApi)
    setExploreSpaces(exploreSpacesFromApi)
    setLibrarySpaces(librariesSpacesFromApi)
  }, [setMySpaces, setExploreSpaces, setLibrarySpaces])

  return (
    <DashboardPage>
      <Header />
      <Body>
        <NavigationPanel />
        <SpaceSection />
      </Body>
    </DashboardPage>
  )
}

export default Dashboard
