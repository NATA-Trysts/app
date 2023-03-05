import styled from 'styled-components'

import { BuilderSettings } from '@/components/Builder'
import { NotificationStack } from '@/components/Notification'

const BuilderPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Builder = () => {
  return (
    <BuilderPage>
      {/* <BuilderPanel /> */}
      {/* <BuilderScene /> */}
      {/* <BuilderToolbar /> */}
      <BuilderSettings />
      <NotificationStack />
    </BuilderPage>
  )
}

export default Builder
