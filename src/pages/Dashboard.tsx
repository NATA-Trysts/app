import { useEffect } from 'react'
import styled from 'styled-components'

import { Explores, exploreSpacesFromApi, mySpacesFromApi, NewUpdates, Recents } from '@/components/Dashboard'
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

const SpaceSection = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  right: 35px;
  width: ${({ isExpanded }) => (isExpanded ? 'calc(100vw - 300px)' : 'calc(100vw - 140px)')};
  height: 100%;
  transition: width 0.3s ease;
  overflow-x: hidden;
  overflow-y: scroll;
`

const Dashboard = () => {
  const [isExpanded, setMySpaces, setExploreSpaces] = useDashboardStore((state) => [
    state.isExpanded,
    state.setMySpaces,
    state.setExploreSpaces,
  ])

  useEffect(() => {
    setMySpaces(mySpacesFromApi)
    setExploreSpaces(exploreSpacesFromApi)
  }, [setMySpaces, setExploreSpaces])

  return (
    <DashboardPage>
      <Header />
      <Body>
        <NavigationPanel />
        <SpaceSection isExpanded={isExpanded}>
          <Recents />
          <NewUpdates updateImage="https://s3-alpha-sig.figma.com/img/9730/e208/7d616e96b8b08c1f9d7af3672c044e1f?Expires=1678665600&Signature=EessPP2nYJ2k~Jgn4SpuA--a6cn3~b1eCqU5j5C7N7wbjP3bjRxwKr4TlTVr0GOP-OtaLtrgL7FWz~uOBn7AyvR8M5BrXseXW5c48jEz9L2Ciy7F07bnREDAwUnbmrhOWfZhyODQdAd8rSagYSIhzI7JKuawSDd8ti21nVsVrS6WRtZOS7PljX9EWT5t~bGnLIouk6TLZ3t90Nj2RMQjQeSpbzse2IwApfrmuRz2uwseCkkqYLc2wgDCX4hdZZcM26OtaAWU8j9-HK8Pmim86sON9MHessuRQ9ROcK3fYep73X41LPk3nkkd8iH2ifmYICdrGIcOUyP6Fq6DnI4dzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <Explores />
        </SpaceSection>
      </Body>
    </DashboardPage>
  )
}

export default Dashboard
