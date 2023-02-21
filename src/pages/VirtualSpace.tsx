import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as Chat } from '@/assets/icons/chat.svg'
import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { ReactComponent as Info } from '@/assets/icons/info.svg'
import { ReactComponent as Logout } from '@/assets/icons/logout.svg'
import { ReactComponent as Micro } from '@/assets/icons/micro.svg'
import { ReactComponent as People } from '@/assets/icons/people.svg'
import { ReactComponent as Settingc } from '@/assets/icons/setting-c.svg'
import { ReactComponent as ShareScreen } from '@/assets/icons/share-screen.svg'
import { ReactComponent as Whiteboard } from '@/assets/icons/whiteboard.svg'
import { ChatInput } from '@/components/ChatInput'
import { ChatMessage } from '@/components/ChatMessage'
import { Icon } from '@/components/Commons'
import { Logo } from '@/components/Commons/Logo'
import { UtilitySection } from '@/components/UtilitySection'
import { CustomableContainer, SVGClickable, Text } from '@/layouts/common'
import { truncateText } from '@/libs'
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
  background: white;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

const MyVideoContainer = styled.div`
  width: 190px;
  height: 128px;
  border-radius: 16px;
  background: var(--color-4);
  pointer-events: auto;
`

const MyInformationCardContainer = styled.div`
  display: flex;
`

const MyInformationCard = styled.div`
  gap: 8px;
  border-radius: 16px;
  display: flex;
  padding: 12px;
  align-items: center;
  background: var(--color-5);
`

const ToolbarContainer = styled.div`
  display: flex;
  gap: 8px;
  border-radius: 16px;
  background: var(--color-5);
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`

const ToolbarItem = styled.div`
  background: var(--color-4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Seprator = styled.div`
  width: 1.25px;
  height: 16px;
  background: var(--color-2);
  border-radius: 1px;
`

const LogoContainer = styled.div`
  padding: 14px 16px;
  border-radius: 16px;
  background: var(--color-5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const SpaceNameContainer = styled.div`
  padding: 8px 8px;
  width: 240px;
  border-radius: 16px;
  background: var(--color-5);
  display: flex;
  justify-content: space-between;
`

const SpaceName = styled.div`
  width: 200px;
  max-width: 200px;
  display: flex;
  align-items: center;
  margin: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MyAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const MyNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 118px;
`

const MyHandler = styled(Text)`
  color: var(--color-3);
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

const FullLogo = styled(Logo)`
  /* margin-top: 2px; */
  aspect-ratio: unset;
`

//#endregion

const SAMPLE_DATA = {
  author: ' sonhaaa',
  avatarUri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
  isMine: true,
  message: 'This is the first time I try Trysts. I love it! This is the first time I try Trysts.',
  time: '12:34 pm',
}

const VirtualSpace = () => {
  const customColor = useAppStore((state) => state.customColor)
  const a = [true, false]

  return (
    <Container customColor={customColor}>
      {/* <Scene /> */}
      <OverlayContainer>
        <HeaderContainer>
          {/* <ColorPicker /> */}
          <LogoContainer>
            <FullLogo />
          </LogoContainer>
          <SpaceNameContainer>
            <SpaceName>
              <Text
                size="medium"
                style={{ textOverflow: 'ellipsis', width: 200, overflow: 'hidden', display: 'block' }}
                weight="lighter"
              >
                {truncateText('Son Ha Wedding Son Ha Wedding', 20)}
              </Text>
            </SpaceName>
            <SVGClickable>
              <Icon name="copy" />
            </SVGClickable>
          </SpaceNameContainer>
        </HeaderContainer>
        <LeftSideContainer>
          <MyVideoContainer></MyVideoContainer>
          <MyInformationCardContainer>
            <MyInformationCard>
              <MyAvatar
                alt="Sonha avatar"
                loading="lazy"
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              />
              <MyNameContainer>
                <Text size="medium" weight="normal">
                  Nguyen Son Ha
                </Text>
                <MyHandler size="medium" weight="lighter">
                  sonhaaa#1234
                </MyHandler>
              </MyNameContainer>
            </MyInformationCard>
          </MyInformationCardContainer>
        </LeftSideContainer>
        <MiddleSideContainer>
          <ToolbarContainer>
            <ToolbarItem>
              <SVGClickable>
                <Micro />
              </SVGClickable>
              <Seprator />
              <SVGClickable>
                <ArrowUp />
              </SVGClickable>
            </ToolbarItem>
            <ToolbarItem>
              <SVGClickable>
                <Camera />
              </SVGClickable>
              <Seprator />
              <SVGClickable>
                <ArrowUp />
              </SVGClickable>
            </ToolbarItem>
            <ToolbarItem>
              <SVGClickable>
                <ShareScreen />
              </SVGClickable>
            </ToolbarItem>
            <ToolbarItem>
              <SVGClickable>
                <Whiteboard />
              </SVGClickable>
            </ToolbarItem>
            <ToolbarItem>
              <SVGClickable>
                <Emoji />
              </SVGClickable>
            </ToolbarItem>
          </ToolbarContainer>
        </MiddleSideContainer>
        <RightSideContainer>
          <UtilitySection name="Chat">
            <ChatContainer>
              <ChatMessageContainer>
                {Array(10)
                  .fill(SAMPLE_DATA)
                  .map((message, index) => (
                    <ChatMessage
                      key={index}
                      author={message.author}
                      avatarUri={message.avatarUri}
                      isMine={a[Math.floor(Math.random() * a.length)]}
                      message={message.message}
                      time={message.time}
                    />
                  ))}
              </ChatMessageContainer>
              <ChatInput />
            </ChatContainer>
          </UtilitySection>

          <ToolbarContainer id="right-toolbar">
            <ToolbarItem>
              <SVGClickable>
                <Chat />
              </SVGClickable>
            </ToolbarItem>
            <ToolbarItem>
              <SVGClickable>
                <People />
                <Text size="medium" style={{ height: 16, lineHeight: '16px' }} weight="normal">
                  888
                </Text>
              </SVGClickable>
            </ToolbarItem>
            <ToolbarItem>
              <SVGClickable>
                <Settingc />
              </SVGClickable>
            </ToolbarItem>
            <ToolbarItem>
              <SVGClickable>
                <Info />
              </SVGClickable>
            </ToolbarItem>
            <Seprator />
            <ToolbarItem>
              <SVGClickable>
                <Logout />
              </SVGClickable>
            </ToolbarItem>
          </ToolbarContainer>
        </RightSideContainer>
      </OverlayContainer>
    </Container>
  )
}

export default VirtualSpace
