import { useState } from 'react'
import styled from 'styled-components'

import { Explores, NewUpdates, Recents } from '@/components/Dashboard'
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

type Space = {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  isActive: boolean
}

const Dashboard = () => {
  const isExpanded = useDashboardStore((state) => state.isExpanded)

  const [recentSpaces, setRecentSpaces] = useState<Space[]>([
    {
      id: '1',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '2',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '3',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '4',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
  ])

  const [exploreSpaces, setExploreSpaces] = useState<Space[]>([
    {
      id: '1',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '2',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '3',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '4',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '5',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '6',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '7',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
    {
      id: '8',
      title: 'Nguyen Son Ha Wedding',
      subtitle: 'Edited 14 hours ago',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg',
      isActive: false,
    },
  ])

  const handleClickCard = (id: string) => {
    const newRecentSpaces = recentSpaces.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: !item.isActive,
        }
      }

      return {
        ...item,
        isActive: false,
      }
    })

    setRecentSpaces(newRecentSpaces)
  }

  const handleClickExploreCard = (id: string) => {
    const newExploreSpaces = exploreSpaces.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: !item.isActive,
        }
      }

      return {
        ...item,
        isActive: false,
      }
    })

    setExploreSpaces(newExploreSpaces)
  }

  return (
    <DashboardPage>
      <Header />
      <Body>
        <NavigationPanel />
        <SpaceSection isExpanded={isExpanded}>
          <Recents list={recentSpaces} onClickCard={handleClickCard} />
          <NewUpdates updateImage="https://s3-alpha-sig.figma.com/img/9730/e208/7d616e96b8b08c1f9d7af3672c044e1f?Expires=1678665600&Signature=EessPP2nYJ2k~Jgn4SpuA--a6cn3~b1eCqU5j5C7N7wbjP3bjRxwKr4TlTVr0GOP-OtaLtrgL7FWz~uOBn7AyvR8M5BrXseXW5c48jEz9L2Ciy7F07bnREDAwUnbmrhOWfZhyODQdAd8rSagYSIhzI7JKuawSDd8ti21nVsVrS6WRtZOS7PljX9EWT5t~bGnLIouk6TLZ3t90Nj2RMQjQeSpbzse2IwApfrmuRz2uwseCkkqYLc2wgDCX4hdZZcM26OtaAWU8j9-HK8Pmim86sON9MHessuRQ9ROcK3fYep73X41LPk3nkkd8iH2ifmYICdrGIcOUyP6Fq6DnI4dzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <Explores list={exploreSpaces} onClickCard={handleClickExploreCard} />
        </SpaceSection>
      </Body>
    </DashboardPage>
  )
}

export default Dashboard
