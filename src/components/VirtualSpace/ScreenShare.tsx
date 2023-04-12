import { forwardRef, RefObject } from 'react'
import styled from 'styled-components'

import { ReactComponent as Cross } from '@/assets/icons/cross.svg'

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
  z-index: 1;
`

const VideoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  pointer-events: auto;

  .icon-wrapper {
    position: absolute;
    right: 12px;
    top: 12px;
  }
`

const Video = styled.video.attrs({
  autoPlay: true,
  muted: true,
  playsInline: true,
})`
  width: 720px;
  height: 500px;
  object-fit: cover;
  border: 2px solid black;
  border-radius: 16px;
`

type ScreenShareProps = {
  close: () => void
}

export const ScreenShare = forwardRef(({ close }: ScreenShareProps, ref: RefObject<HTMLVideoElement>) => {
  return (
    <Overlay>
      <VideoContainer>
        <IconWrapper
          onClick={() => {
            close()
          }}
        >
          <Cross color="#b792be" height={16} width={16} />
        </IconWrapper>
        <Video ref={ref}></Video>
      </VideoContainer>
    </Overlay>
  )
})
