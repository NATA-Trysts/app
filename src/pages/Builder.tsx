import styled from 'styled-components'

import { BuilderPanel } from '@/components/Builder'

const BuilderPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Builder = () => {
  return (
    <BuilderPage>
      <BuilderPanel />
    </BuilderPage>
  )
}

export default Builder
