import { useHMSActions } from '@100mslive/react-sdk'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { ChatInput } from '@/components/ChatInput'
import { ChatMessage } from '@/components/ChatMessage'
import { CustomableContainer } from '@/components/Commons'
import { MultitabDetect, MultiTabWarning } from '@/components/MultitabDetect'
import { UtilitySection } from '@/components/UtilitySection'
import {
  MyInformationCard,
  MyVideo,
  Network,
  Scene,
  SingleMemberCard,
  ToolbarMiddle,
  ToolbarRight,
  VirtualSpaceNameCard,
} from '@/components/VirtualSpace'
import { FullLogo } from '@/components/VirtualSpace/FullLogo'
import { truncateText } from '@/libs'
import { MESSAGES } from '@/libs/constants'
import { useAppStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

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

const HeaderContainer = styled.section`
  pointer-events: auto;
  grid-area: header;
  padding: 16px;
  display: flex;
  gap: 8px;
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
  overflow-y: scroll;
  overflow-x: auto;
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

const SAMPLE_MEMBER_DATA = {
  handler: 'sonhaaa#1234',
  avatarUri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
  name: 'Nguyen Son Ha',
}

const VirtualSpace = () => {
  const customColor = useAppStore((state) => state.customColor)
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const [selectedUltility, chatMessages] = useVirtualSpaceStore((state) => [state.selectedUltility, state.chatMessages])
  const { spaceId } = useParams()
  const chatBottomRef = useRef<HTMLDivElement>(null)

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
    // const response = await fetch('https://prod-in2.100ms.live/hmsapi/shtest.app.100ms.live/api/token', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     // eslint-disable-next-line camelcase
    //     room_id: '638968d0aee54625da649a38',
    //     role: 'student',
    //     // eslint-disable-next-line camelcase
    //     user_id: Date.now().toString(),
    //   }),
    // })
    // const a = await response.json()
    // const config = {
    //   userName: 'SH',
    //   authToken: a.token,
    //   settings: {
    //     isAudioMuted: true,
    //     isVideoMuted: false,
    //   },
    //   metaData: JSON.stringify({ city: 'Da Nang' }),
    //   rememberDeviceSelection: true,
    // }
    // await hmsActions.join(config)
  }

  useEffect(() => {
    join()

    return () => {
      hmsActions.leave()
    }
  }, [])

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  })

  const dispatchMessage = (message: string) => {
    roomInstance?.send(MESSAGES.MEMBER.SEND_MESSAGE, {
      name: roomInstance.sessionId,
      avatar: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      timestamp: Date.now(),
      content: message.trim(),
    })
  }

  return (
    <CustomableContainer customColor={customColor}>
      <MultitabDetect fallback={<MultiTabWarning />}>
        <Container customColor={customColor}>
          <Network spaceId={spaceId} />
          <Scene />
          <OverlayContainer>
            <HeaderContainer>
              <FullLogo />
              <VirtualSpaceNameCard name="Son Ha's Wedding " spaceId="123" />
            </HeaderContainer>
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
                            {Object.values(chatMessages).map((message) => {
                              return (
                                <ChatMessage
                                  key={message.id}
                                  author={truncateText(message.name, 15)}
                                  avatarUri={message.avatar}
                                  isMine={roomInstance?.sessionId === message.sessionId}
                                  message={message.content}
                                  time={new Date(message.timestamp).toLocaleString('vn-VI', {
                                    hour12: true,
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })}
                                />
                              )
                            })}
                            <div ref={chatBottomRef}></div>
                          </ChatMessageContainer>
                          <ChatInput onSendMessage={dispatchMessage} />
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
          </OverlayContainer>
        </Container>
      </MultitabDetect>
    </CustomableContainer>
  )
}

export default VirtualSpace
