import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { Logo } from '../Commons/Logo'

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
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const MobileBackgroundImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 321px;
  height: 112.53px;
  background: #613da4;
  filter: blur(148.063px);
`

export const MobileOrSmallVersion = ({ message }: { message: string }) => {
  return (
    <MobilePage>
      <MobileBackgroundImage />
      <Container>
        <Logo width={92} />
        <Text size="medium" weight="lighter">
          {message}
        </Text>
      </Container>
    </MobilePage>
  )
}
