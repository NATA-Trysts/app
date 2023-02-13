import { HMSRoomProvider } from '@100mslive/react-sdk'
import styled from 'styled-components'

import { ColorPicker } from '@/components/ColorPicker'
import { VideoCall } from '@/components/VideoCall'
import { CustomableContainer } from '@/layouts/common'
import { useAppStore } from '@/stores/app'

//#region Styles
const Container = styled(CustomableContainer)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
`

const InteractSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
`
//#endregion

const Test = () => {
  const customColor = useAppStore((state) => state.customColor)

  return (
    <HMSRoomProvider>
      <Container customColor={customColor}>
        <InteractSection>
          <VideoCall />
          <ColorPicker />
        </InteractSection>
      </Container>
    </HMSRoomProvider>
  )
}

export default Test

