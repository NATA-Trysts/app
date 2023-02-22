import styled from 'styled-components'

import { MobileDetect } from '@/components/MobileDetect'

const MobilePage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0d041f;
  position: relative;
`

const Mobile = () => {
  return (
    <MobileDetect>
      <MobilePage>
        <h1>Desktop version</h1>
      </MobilePage>
    </MobileDetect>
  )
}

export default Mobile
