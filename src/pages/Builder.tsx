import styled from 'styled-components'

import { BuilderPanel, BuilderScene, BuilderToolbar } from '@/components/Builder'

const BuilderPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Builder = () => {
  return (
    <BuilderPage>
      <BuilderPanel />
      <BuilderScene />
      <BuilderToolbar />
    </BuilderPage>
  )
}

export default Builder
