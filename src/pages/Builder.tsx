import { useEffect } from 'react'
import styled from 'styled-components'

import { BuilderPanel, BuilderSettings, BuilderToolbar, Scene as BuilderScene } from '@/components/Builder'
import { NotificationStack } from '@/components/Notification'

const BuilderPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  user-select: none;
`

const Builder = () => {
  useEffect(() => {
    document.title = '🔨 Summer Open Call | Trysts'
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
