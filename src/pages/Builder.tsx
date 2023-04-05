import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { BuilderPanel, BuilderSettings, BuilderToolbar, Scene as BuilderScene } from '@/components/Builder'
import { NotificationStack } from '@/components/Notification'
import { useAxiosPrivate } from '@/hooks'
import { useBuilderStore } from '@/stores'

const BuilderPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  user-select: none;
`

const Builder = () => {
  const [setSpaceInformation, setModels] = useBuilderStore((state) => [state.setSpaceInformation, state.setModels])
  const { fileId } = useParams()
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    let ignore = false

    axiosPrivate
      .get(`/spaces/${fileId}`)
      .then((res) => {
        if (ignore) return
        const spaceData = res.data

        document.title = `🔨 ${spaceData.name} | Trysts`

        setSpaceInformation({
          name: spaceData.name,
          password: spaceData.password,
          isProtected: spaceData.password !== '',
        })
        setModels([...spaceData.models])
      })
      .catch((err) => {
        console.error(err)
      })

    // setSpaceInformation(space)
    // setModels(models as SpaceModel[])

    return () => {
      ignore = true
    }
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
