import { HMSPeer, useVideo } from '@100mslive/react-sdk'
import styled from 'styled-components'

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: var(--color-5);
`

export const VideoTile = ({ peer }: { peer: HMSPeer | undefined }) => {
  const { videoRef } = useVideo({
    trackId: peer?.videoTrack,
  })

  return <>{peer ? <Video ref={videoRef} autoPlay muted playsInline></Video> : null}</>
}
