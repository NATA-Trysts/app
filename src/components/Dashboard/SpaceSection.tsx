import { useMemo } from 'react'
import styled from 'styled-components'

import { useDashboardStore } from '@/stores/dashboard'

import { Explores } from './Explores'
import { Libraries } from './Libraries'
import { MyFiles } from './MyFiles'
import { NewUpdates } from './NewUpdates'
import { Recents } from './Recents'

const SpaceSectionContainer = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  right: 35px;
  width: ${({ isExpanded }) => (isExpanded ? 'calc(100vw - 300px)' : 'calc(100vw - 140px)')};
  height: 100%;
  transition: width 0.3s ease;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const SpaceSection = () => {
  const [isExpanded, dashboardOption] = useDashboardStore((state) => [state.isExpanded, state.dashboardOption])

  // fixed component for each dashboard option
  const sectionComponents = useMemo(() => {
    return {
      1: (
        <>
          <Recents />
          <NewUpdates updateImage="https://s3-alpha-sig.figma.com/img/9730/e208/7d616e96b8b08c1f9d7af3672c044e1f?Expires=1678665600&Signature=EessPP2nYJ2k~Jgn4SpuA--a6cn3~b1eCqU5j5C7N7wbjP3bjRxwKr4TlTVr0GOP-OtaLtrgL7FWz~uOBn7AyvR8M5BrXseXW5c48jEz9L2Ciy7F07bnREDAwUnbmrhOWfZhyODQdAd8rSagYSIhzI7JKuawSDd8ti21nVsVrS6WRtZOS7PljX9EWT5t~bGnLIouk6TLZ3t90Nj2RMQjQeSpbzse2IwApfrmuRz2uwseCkkqYLc2wgDCX4hdZZcM26OtaAWU8j9-HK8Pmim86sON9MHessuRQ9ROcK3fYep73X41LPk3nkkd8iH2ifmYICdrGIcOUyP6Fq6DnI4dzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <Explores />
        </>
      ),
      2: <MyFiles />,
      3: <Libraries />,
    }
  }, [])

  return <SpaceSectionContainer isExpanded={isExpanded}>{sectionComponents[dashboardOption]}</SpaceSectionContainer>
}
