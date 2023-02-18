import styled from 'styled-components'

import LogoImg from '@/assets/logo.png'
import MobileBackground from '@/assets/mobile-background.png'
import { MobileDetect } from '@/components/MobileDetect'
import { Text } from '@/layouts/common'

const MobilePage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0d041f;
  position: relative;
`

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LogoImage = styled.img`
  width: 91.08px;
  height: auto;
`

const MobileBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MobileVersion = () => {
  return (
    <MobilePage>
      <MobileBackgroundImage alt="Mobile background" src={MobileBackground} />
      <Container>
        <LogoImage alt="Logo" src={LogoImg} />
        <Text size="medium" weight="lighter">
          We are not in mobile yet!
        </Text>
      </Container>
    </MobilePage>
  )
}

const SmallWidthVersion = () => {
  return (
    <MobilePage>
      <MobileBackgroundImage alt="Mobile background" src={MobileBackground} />
      <Container>
        <LogoImage alt="Logo" src={LogoImg} />
        <Text size="medium" weight="lighter">
          Make screen wider to continue experience Trysts
        </Text>
      </Container>
    </MobilePage>
  )
}

const Mobile = () => {
  return (
    <MobileDetect fallback={<MobileVersion />} fallbackSmallWidth={<SmallWidthVersion />}>
      <MobilePage>
        <h1>Desktop version</h1>
      </MobilePage>
    </MobileDetect>
  )
}

export default Mobile
