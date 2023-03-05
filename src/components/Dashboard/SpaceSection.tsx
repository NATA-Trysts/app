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
          <NewUpdates />
          <Explores />
        </>
      ),
      2: <MyFiles />,
      3: <Libraries />,
    }
  }, [])

  return <SpaceSectionContainer isExpanded={isExpanded}>{sectionComponents[dashboardOption]}</SpaceSectionContainer>
}
