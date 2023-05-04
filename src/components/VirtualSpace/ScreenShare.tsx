import { useVideo } from '@100mslive/react-sdk'
import styled from 'styled-components'

const VideoContainer = styled.div`
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
  width: 1368px;
  height: 730px;
  object-fit: cover;
  border: 2px solid black;
  border-radius: 16px;
`

type ScreenShareProps = {
  trackId: string
}

export const ScreenShare = ({ trackId }: ScreenShareProps) => {
  const { videoRef: screenShareRef } = useVideo({ trackId })

  return (
    <VideoContainer>
      <Video ref={screenShareRef}></Video>
    </VideoContainer>
  )
}
