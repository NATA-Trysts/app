import { useEffect } from 'react'
import styled from 'styled-components'

import { CustomableContainer } from '@/components/Commons'
import { MultitabDetect, MultiTabWarning } from '@/components/MultitabDetect'
import { ThemeScene } from '@/components/SpaceTheme/ThemeScene'
import { UtilitySection } from '@/components/UtilitySection'
import {
  CustomCharacterPanel,
  MultiplayerNetwork,
  MyInformationCard,
  MyVideo,
  ToolbarMiddle,
  ToolbarRight,
  VirtualSpaceLoading,
} from '@/components/VirtualSpace'
import { Chat, Members, Setting } from '@/components/VirtualSpace/Ultilities'
import { ULTILITY_SIZE_MAPPING } from '@/libs/constants'
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

const TestTheme = () => {
  const customColor = useAppStore((state) => state.customColor)
  const [selectedUltility] = useVirtualSpaceStore((state) => [state.selectedUltility])

  useEffect(() => {
    document.title = 'Trysts | Summer Open Call'
  }, [])

  return (
    <VirtualSpaceLoading>
      <CustomableContainer customColor={customColor}>
        <MultitabDetect fallback={<MultiTabWarning />}>
          <Container customColor={customColor}>
            <MultiplayerNetwork />
            <ThemeScene />
            <OverlayContainer>
              <Header />
              <LeftSideContainer>
                <LeftSideWrapper>
                  <MyVideo />
                  <MyInformationCard />
                </LeftSideWrapper>
              </LeftSideContainer>
              <MiddleSideContainer>
                <ToolbarMiddle />
              </MiddleSideContainer>
              <RightSideContainer>
                {selectedUltility ? (
                  <UtilitySection
                    name={ULTILITY_SIZE_MAPPING[selectedUltility].name}
                    width={ULTILITY_SIZE_MAPPING[selectedUltility].width}
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
    </VirtualSpaceLoading>
  )
}

export default TestTheme
