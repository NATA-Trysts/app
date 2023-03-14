import { useHMSActions } from '@100mslive/react-sdk'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { ChatInput } from '@/components/ChatInput'
import { ChatMessage } from '@/components/ChatMessage'
import { CustomableContainer } from '@/components/Commons'
import { MultitabDetect, MultiTabWarning } from '@/components/MultitabDetect'
import { UtilitySection } from '@/components/UtilitySection'
import {
  CustomCharacterPanel,
  MyInformationCard,
  MyVideo,
  Network,
  SingleMemberCard,
  ToolbarMiddle,
  ToolbarRight,
} from '@/components/VirtualSpace'
import { truncateText } from '@/libs'
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

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  gap: 8px;
`

const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 16px * 2 - 48px - 6px - 16px - 52px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
`

const MemberContainer = styled(ChatContainer)`
  overflow: auto;
  justify-content: flex-start;
`

const LeftSideWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
`

//#endregion

const SAMPLE_MESSAGE_DATA = {
  author: 'sonhaaa',
  avatarUri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
  isMine: true,
  message: 'This is the first time I try Trysts. I love it! This is the first time I try Trysts.',
  time: '12:34 pm',
}

const SAMPLE_MEMBER_DATA = {
  handler: 'sonhaaa#1234',
  avatarUri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
  name: 'Nguyen Son Ha',
}

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
    info: {
      name: 'Info',
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
        isVideoMuted: false,
      },
      metaData: JSON.stringify({ city: 'Da Nang' }),
      rememberDeviceSelection: true,
    }

    await hmsActions.join(config)
  }

  useEffect(() => {
    join()

    return () => {
      hmsActions.leave()
    }
  }, [])

  return (
    <CustomableContainer customColor={customColor}>
      <MultitabDetect fallback={<MultiTabWarning />}>
        <Container customColor={customColor}>
          <Network spaceId={spaceId} />
          {/* <Scene /> */}
          <OverlayContainer>
            <Header />
            <LeftSideContainer>
              <LeftSideWrapper>
                <MyVideo />
                <MyInformationCard
                  avatar="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  handler="sasonhaaa#1234"
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
                      chat: (
                        <ChatContainer>
                          <ChatMessageContainer>
                            {Array(10)
                              .fill(SAMPLE_MESSAGE_DATA)
                              .map((message: typeof SAMPLE_MESSAGE_DATA, index) => (
                                <ChatMessage
                                  key={index}
                                  author={truncateText(message.author, 15)}
                                  avatarUri={message.avatarUri}
                                  isMine={false}
                                  message={message.message}
                                  time={message.time}
                                />
                              ))}
                          </ChatMessageContainer>
                          <ChatInput />
                        </ChatContainer>
                      ),
                      member: (
                        <MemberContainer>
                          {Array(20)
                            .fill(SAMPLE_MEMBER_DATA)
                            .map((member: typeof SAMPLE_MEMBER_DATA, index) => (
                              <SingleMemberCard
                                key={index}
                                avatar={member.avatarUri}
                                handler={member.handler}
                                name={member.name}
                              />
                            ))}
                        </MemberContainer>
                      ),
                      info: <></>,
                      setting: <></>,
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
