import { useHMSActions } from '@100mslive/react-sdk'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { CustomableContainer } from '@/components/Commons'
import { MultitabDetect, MultiTabWarning } from '@/components/MultitabDetect'
import { UtilitySection } from '@/components/UtilitySection'
import {
  CustomCharacterPanel,
  MyInformationCard,
  MyVideo,
  Network,
  Scene,
  ToolbarMiddle,
  ToolbarRight,
} from '@/components/VirtualSpace'
import { Chat, Members, Setting } from '@/components/VirtualSpace/Ultilities'
import { useAppStore, useVirtualSpaceStore } from '@/stores'

import { Header } from './Header'

//#region Styles
const Container = styled(CustomableContainer)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  background: white;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
`

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  position: absolute;
  top: 0;
  display: grid;
  grid-template:
    'header header right'
    'left middle right';
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px 1fr;
  pointer-events: none;
  overflow: hidden; // CAUTION: not sure if this is a good idea, use this for avoid scroll on mobile
`

const LeftSideContainer = styled.section`
  grid-area: left;
  padding: 16px;
  gap: 6px;
`

const MiddleSideContainer = styled.section`
  grid-area: middle;
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const RightSideContainer = styled.section`
  grid-area: right;
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 6px;
`

const LeftSideWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
`

//#endregion

const VirtualSpace = () => {
  const customColor = useAppStore((state) => state.customColor)
  const [selectedUltility] = useVirtualSpaceStore((state) => [state.selectedUltility])
  const { spaceId } = useParams()

  const ultilityMapping = {
    chat: {
      name: 'Chat',
      width: '70%',
    },
    member: {
      name: 'Member',
      width: '60%',
    },
    setting: {
      name: 'Setting',
      width: '60%',
    },
  }

  const hmsActions = useHMSActions()

  const join = async () => {
    const response = await fetch('https://prod-in2.100ms.live/hmsapi/shtest.app.100ms.live/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // eslint-disable-next-line camelcase
        room_id: '638968d0aee54625da649a38',
        role: 'student',
        // eslint-disable-next-line camelcase
        user_id: Date.now().toString(),
      }),
    })
    const a = await response.json()
    const config = {
      userName: 'SH',
      authToken: a.token,
      settings: {
        isAudioMuted: true,
        isVideoMuted: true,
      },
      metaData: JSON.stringify({ city: 'Da Nang' }),
      rememberDeviceSelection: true,
    }

    await hmsActions.join(config)
  }

  useEffect(() => {
    try {
      join()
    } catch (error) {
      console.error(error)
    }

    return () => {
      hmsActions.leave()
    }
  }, [])

  return (
    <CustomableContainer customColor={customColor}>
      <MultitabDetect fallback={<MultiTabWarning />}>
        <Container customColor={customColor}>
          <Network spaceId={spaceId} />
          <Scene />
          <OverlayContainer>
            <Header />
            <LeftSideContainer>
              <LeftSideWrapper>
                <MyVideo />
                <MyInformationCard
                  avatar="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  handler="sonhaaa#1234"
                  name="Hoang Tien Thinh"
                />
              </LeftSideWrapper>
            </LeftSideContainer>
            <MiddleSideContainer>
              <ToolbarMiddle />
            </MiddleSideContainer>
            <RightSideContainer>
              {selectedUltility ? (
                <UtilitySection
                  name={ultilityMapping[selectedUltility].name}
                  width={ultilityMapping[selectedUltility].width}
                >
                  {
                    {
                      chat: <Chat />,
                      member: <Members />,
                      setting: <Setting />,
                    }[selectedUltility]
                  }
                </UtilitySection>
              ) : (
                <></>
              )}
              <ToolbarRight />
            </RightSideContainer>

            <CustomCharacterPanel />
          </OverlayContainer>
        </Container>
      </MultitabDetect>
    </CustomableContainer>
  )
}

export default VirtualSpace
