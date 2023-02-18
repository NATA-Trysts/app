import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'
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

const MobileBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MobileOrSmallVersion = ({ message }: { message: string }) => {
  return (
    <MobilePage>
      <MobileBackgroundImage alt="Mobile background" src={MobileBackground} />
      <Container>
        <LogoIcon />
        <Text size="medium" weight="lighter">
          {message}
        </Text>
      </Container>
    </MobilePage>
  )
}

const Mobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallWidth, setIsSmallWidth] = useState(false)
  const [message, setMessage] = useState('We are not in mobile yet!')

  useEffect(() => {
    if (isSmallWidth && !isMobile) setMessage('Make screen wider to continue experience Trysts')
    else if (isMobile || isSmallWidth) setMessage('We are not in mobile yet!')
    else setMessage('We are not in mobile yet!')
  }, [isMobile, isSmallWidth])

  return (
    <MobileDetect
      fallback={<MobileOrSmallVersion message={message} />}
      isMobile={isMobile}
      isSmallWidth={isSmallWidth}
      setIsMobile={setIsMobile}
      setIsSmallWidth={setIsSmallWidth}
    >
      <MobilePage>
        <h1>Desktop version</h1>
      </MobilePage>
    </MobileDetect>
  )
}

export default Mobile
