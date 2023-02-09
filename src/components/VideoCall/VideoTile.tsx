import { HMSPeer, useVideo } from '@100mslive/react-sdk'
import { useEffect } from 'react'
import styled from 'styled-components'

const Video = styled.video`
  width: 320px;
  height: 180px;
  padding: 8px;
  border-radius: 12px;
  object-fit: cover;
  background: var(--color-3);
`

export const VideoTile = ({ peer }: { peer: HMSPeer }) => {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  })

  useEffect(() => {}, [peer])

  return <Video ref={videoRef} autoPlay muted playsInline></Video>
}
