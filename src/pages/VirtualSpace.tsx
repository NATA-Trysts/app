import React from 'react'
import styled from 'styled-components'

import { Icon } from '@/components/Commons'
import { Scene } from '@/components/Scene'
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

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
  top: 0;
  display: grid;
  grid-template:
    'header header header'
    'left middle right';
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px 1fr;
  pointer-events: none;
`

const HeaderContainer = styled.section`
  grid-area: header;
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
`

const MyVideoContainer = styled.div`
  width: 190px;
  height: 128px;
  border-radius: 16px;
  background: green;
  pointer-events: auto;
`

const MyInformationCard = styled.div`
  width: 190px;
  height: 64px;
  border-radius: 16px;
  background: green;
`

const ToolbarContainer = styled.div`
  display: flex;
  gap: 8px;
  border-radius: 16px;
  background: var(--color-5);
  padding: 8px;
`

const ToolbarItem = styled.button`
  padding: 8px;
  background: var(--color-4);
  border: none;
  border-radius: 8px;
  display: flex;
  gap: 8px;
`

const Seprator = styled.div`
  width: 1px;
  height: 16px;
  background: var(--color-2);
  border-radius: 1px;
`

//#endregion

const VirtualSpace = () => {
  const customColor = useAppStore((state) => state.customColor)

  return (
    <Container customColor={customColor}>
      <Scene />
      <OverlayContainer>
        <HeaderContainer>
          <div>abc</div>
        </HeaderContainer>
        <LeftSideContainer>
          <MyVideoContainer></MyVideoContainer>
          <MyInformationCard></MyInformationCard>
        </LeftSideContainer>
        <MiddleSideContainer>
          <ToolbarContainer>
            <ToolbarItem>
              <Icon name="micro" />
              <Seprator />
              <Icon name="arrow-up" />
            </ToolbarItem>
            <ToolbarItem>
              <Icon name="camera" />
              <Seprator />
              <Icon name="arrow-up" />
            </ToolbarItem>
          </ToolbarContainer>
        </MiddleSideContainer>
        <RightSideContainer>
          <ToolbarContainer></ToolbarContainer>
        </RightSideContainer>
      </OverlayContainer>
    </Container>
  )
}

export default VirtualSpace
