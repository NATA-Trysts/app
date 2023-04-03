import { useEffect } from 'react'
import styled from 'styled-components'

import axios from '@/api/axios'
import { BuilderPanel, BuilderSettings, BuilderToolbar, Scene as BuilderScene } from '@/components/Builder'
// import { BuilderSettings, BuilderToolbar } from '@/components/Builder'
import { NotificationStack } from '@/components/Notification'
import { SpaceModel, useBuilderStore } from '@/stores'

const BuilderPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  user-select: none;
`

const tempSpaceId = 'Dvhq09IY6CFwpj75'

const space = {
  name: '',
  password: '',
  isProtected: false,
}
let models: SpaceModel[] = []

axios
  .get(`/spaces/${tempSpaceId}`)
  .then((res) => {
    const spaceData = res.data

    document.title = `🔨 ${spaceData.name} | Trysts`

    space.name = spaceData.name
    space.password = spaceData.password
    space.isProtected = spaceData.password !== ''
    models = [...spaceData.models]
  })
  .catch((err) => {
    console.error(err)
  })

const Builder = () => {
  const [setSpaceInformation, setModels] = useBuilderStore((state) => [state.setSpaceInformation, state.setModels])

  useEffect(() => {
    setSpaceInformation(space)
    setModels(models as SpaceModel[])
  }, [])

  return (
    <BuilderPage>
      <BuilderSettings />
      <BuilderScene />
      <BuilderPanel />
      <BuilderToolbar />
      <NotificationStack />
    </BuilderPage>
  )
}

export default Builder
