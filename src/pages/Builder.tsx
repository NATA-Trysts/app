import { useEffect } from 'react'
import styled from 'styled-components'

import axios from '@/api/axios'
// import { BuilderPanel, BuilderSettings, BuilderToolbar, Scene as BuilderScene } from '@/components/Builder'
import { BuilderSettings, BuilderToolbar } from '@/components/Builder'
import { NotificationStack } from '@/components/Notification'
import { useBuilderStore } from '@/stores'

const BuilderPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  user-select: none;
`

const tempSpaceId = 'olrWFR6VXN389Pzq'

const space = {
  name: '',
  password: '',
  isProtected: false,
}

axios
  .get(`/spaces/${tempSpaceId}`)
  .then((res) => {
    const spaceData = res.data

    document.title = `🔨 ${spaceData.name} | Trysts`

    space.name = spaceData.name
    space.password = spaceData.password
    space.isProtected = spaceData.password !== ''
  })
  .catch((err) => {
    console.error(err)
  })

const Builder = () => {
  const [setSpaceInformation] = useBuilderStore((state) => [state.setSpaceInformation])

  useEffect(() => {
    setSpaceInformation(space)
  }, [])

  return (
    <BuilderPage>
      <BuilderSettings />
      {/* <BuilderScene /> */}
      {/* <BuilderPanel /> */}
      <BuilderToolbar />
      <NotificationStack />
    </BuilderPage>
  )
}

export default Builder
