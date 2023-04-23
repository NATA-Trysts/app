import styled from 'styled-components'

import { WhiteBoardMembers } from './WhiteBoardMembers'

const WhiteBoardContainer = styled.div`
  width: 1368px;
  height: 730px;
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

export const WhiteBoard = (props: { id: string }) => {
  return (
    <WhiteBoardContainer className="whiteboard" id={`whiteboard-${props.id}`}>
      <IframeContainer>
        <SharedButtonMask></SharedButtonMask>
        <HelpButtonmask></HelpButtonmask>
        <iframe src={`https://beta.tldraw.com/r/${props.id}`}></iframe>
      </IframeContainer>
      <WhiteBoardMembers whiteboardId={props.id}></WhiteBoardMembers>
    </WhiteBoardContainer>
  )
}
