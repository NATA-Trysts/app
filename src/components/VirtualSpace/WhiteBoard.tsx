import styled from 'styled-components'

import { ReactComponent as Cross } from '@/assets/icons/cross.svg'

import { WhiteBoardMembers } from './WhiteBoardMembers'

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  z-index: 999999;
  pointer-events: auto;
`

const WhiteBoardDialog = styled.div`
  width: 1368px;
  height: 730px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const IframeContainer = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 20px;
  overflow: hidden;
  pointer-events: auto;
  position: relative;
  background-color: #fff;

  iframe {
    width: inherit;
    height: inherit;
  }

  .icon-wrapper {
    position: absolute;
    right: 12px;
    top: 12px;
  }
`

const IconWrapper = styled.div.attrs({
  className: 'icon-wrapper',
})`
  background: #4e1957;
  border-radius: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
`

const SharedButtonMask = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  width: 100px;
  height: 52px;
  background: #f9fafb;
`

const HelpButtonmask = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 52px;
  background: #f9fafb;
`

export const WhiteBoard = (props: { id: string; close: () => void }) => {
  return (
    <Overlay>
      <WhiteBoardDialog>
        <IconWrapper
          onClick={() => {
            props.close()
          }}
        >
          <Cross color="#b792be" height={16} width={16} />
        </IconWrapper>
        <IframeContainer>
          <SharedButtonMask></SharedButtonMask>
          <HelpButtonmask></HelpButtonmask>
          <iframe src={`https://beta.tldraw.com/r/${props.id}`}></iframe>
        </IframeContainer>
        <WhiteBoardMembers whiteboardId={props.id}></WhiteBoardMembers>
      </WhiteBoardDialog>
    </Overlay>
  )
}
