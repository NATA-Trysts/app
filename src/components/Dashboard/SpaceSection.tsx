import styled from 'styled-components'

import axios from '@/api/axios'
import { Space as SpaceType, useDashboardStore, useNavigationStore } from '@/stores'

import { exploreSpacesFromApi } from './dummyData'
import { Explores } from './Explores'
import { useDashboard } from './hooks/useDashboard'
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

function wrapPromise(promise: Promise<any>) {
  let status = 'pending'
  let response: SpaceType[] = []

  const suspender = promise.then(
    (res) => {
      status = 'success'
      response = res
    },
    (err) => {
      status = 'error'
      response = err
    },
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

// temporary using data, will be replaced with api call
const fetchData = (data: SpaceType[]) => {
  const promise = new Promise((resolve) => {
    resolve(data)
  })

  return wrapPromise(promise)
}

const fetchDataApi = (url: string) => {
  const promise = new Promise((resolve) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        resolve(err)
      })
  })

  return wrapPromise(promise)
}

const mySpacesResourceApi = fetchDataApi('/spaces/user/x1JHPP7pqxB4e45v')
const exploreSpacesResource = fetchData(exploreSpacesFromApi)
const librariesSpacesResource = fetchDataApi('/spaces')

export const SpaceSection = () => {
  const [isExpanded] = useDashboardStore((state) => [state.isExpanded])
  const [dashboardOption] = useNavigationStore((state) => [state.dashboardOption])
  const { convertArrayToMap } = useDashboard()

  const mySpace = mySpacesResourceApi.read()
  const exploreSpace = exploreSpacesResource.read()
  const librariesSpaceMap = convertArrayToMap(librariesSpacesResource.read())

  // fixed component for each dashboard option
  const sectionComponents = {
    1: (
      <>
        <Recents spaces={mySpace} />
        <NewUpdates />
        <Explores spaces={exploreSpace} />
      </>
    ),
    2: <MyFiles spaces={mySpace} />,
    3: <Libraries librarySpaces={librariesSpaceMap} />,
  }

  return <SpaceSectionContainer isExpanded={isExpanded}>{sectionComponents[dashboardOption]}</SpaceSectionContainer>
}
