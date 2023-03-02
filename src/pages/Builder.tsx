import styled from 'styled-components'

import { BuilderSettings } from '@/components/Builder'

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
    </BuilderPage>
  )
}

export default Builder
