import React from 'react'
import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as Chat } from '@/assets/icons/chat.svg'
import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { ReactComponent as FullLogo } from '@/assets/icons/full-logo.svg'
import { ReactComponent as Logout } from '@/assets/icons/logout.svg'
import { ReactComponent as Micro } from '@/assets/icons/micro.svg'
import { ReactComponent as People } from '@/assets/icons/people.svg'
import { ReactComponent as Settingc } from '@/assets/icons/setting-c.svg'
import { ReactComponent as ShareScreen } from '@/assets/icons/share-screen.svg'
import { ReactComponent as Whiteboard } from '@/assets/icons/whiteboard.svg'
import { ColorPicker } from '@/components/ColorPicker'
// import { ColorPicker } from '@/components/ColorPicker'
import { Icon } from '@/components/Commons'
// import { Scene } from '@/components/Scene'
import { CustomableContainer, Text } from '@/layouts/common'
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
`

const ToolbarItem = styled.div`
  background: var(--color-4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Clickable = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  background: var(--color-4);
  pointer-events: auto;
  display: flex;
  gap: 8px;
  /* transition: all 0.25s ease;
  will-change: all; */

  svg {
    path {
      stroke: var(--color-3);
    }
    rect {
      stroke: var(--color-3);
    }

    ellipse {
      stroke: var(--color-3);
    }
  }

  :hover {
    svg {
      path {
        stroke: #fff;
      }
      rect {
        stroke: #fff;
      }

      ellipse {
        stroke: #fff;
      }
    }

    background: var(--color-3);
  }
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

  /* svg {
    display: flex;
    align-items: center;
    justify-content: center;
  } */
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

const RightSideWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
`

const UtilitySection = styled.section`
  width: 100%;
  height: 100%;
  background: var(--color-6);
  border-radius: 16px;
  padding: 12px;
`

const UtilityWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const UtilityHeader = styled.div``

// const ControlSvgColor = styled.
//#endregion

const VirtualSpace = () => {
  const customColor = useAppStore((state) => state.customColor)

  return (
    <Container customColor={customColor}>
      {/* <Scene /> */}
      <OverlayContainer>
        <HeaderContainer>
          <ColorPicker />
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
            <Clickable>
              <Icon name="copy" />
            </Clickable>
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
              <Clickable>
                <Micro />
              </Clickable>
              <Seprator />
              <Clickable>
                <ArrowUp />
              </Clickable>
            </ToolbarItem>
            <ToolbarItem>
              <Clickable>
                <Camera />
              </Clickable>
              <Seprator />
              <Clickable>
                <ArrowUp />
              </Clickable>
            </ToolbarItem>
            <ToolbarItem>
              <Clickable>
                <ShareScreen />
              </Clickable>
            </ToolbarItem>
            <ToolbarItem>
              <Clickable>
                <Whiteboard />
              </Clickable>
            </ToolbarItem>
            <ToolbarItem>
              <Clickable>
                <Emoji />
              </Clickable>
            </ToolbarItem>
          </ToolbarContainer>
        </MiddleSideContainer>
        <RightSideContainer>
          <RightSideWrapper>
            <UtilitySection>
              <UtilityWrapper>
                <UtilityHeader>{/* <Text weight="normal" /> */}</UtilityHeader>
              </UtilityWrapper>
            </UtilitySection>
            <ToolbarContainer>
              <ToolbarItem>
                <Clickable>
                  <Chat />
                </Clickable>
              </ToolbarItem>
              <ToolbarItem>
                <Clickable>
                  <People />
                  <Text size="medium" weight="normal">
                    20
                  </Text>
                </Clickable>
              </ToolbarItem>
              <ToolbarItem>
                <Clickable>
                  <Settingc />
                </Clickable>
              </ToolbarItem>
              <ToolbarItem>
                <Clickable>
                  <Logout />
                </Clickable>
              </ToolbarItem>
              <ToolbarItem>
                <Clickable>
                  <Logout />
                </Clickable>
              </ToolbarItem>
            </ToolbarContainer>
          </RightSideWrapper>
        </RightSideContainer>
      </OverlayContainer>
    </Container>
  )
}

export default VirtualSpace
