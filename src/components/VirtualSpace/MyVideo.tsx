import { selectLocalPeer, useHMSStore } from '@100mslive/react-sdk'
import styled from 'styled-components'

import { VideoTile } from '@/components/VideoCall'

const MyVideoContainer = styled.div`
  width: 204px;
  aspect-ratio: 190/128;
  border-radius: 16px;
  background: var(--color-4);
  pointer-events: auto;
  cursor: pointer;
  overflow: hidden;
`

export const MyVideo = () => {
  const peer = useHMSStore(selectLocalPeer)

  return (
    <MyVideoContainer>
      <VideoTile peer={peer} />
    </MyVideoContainer>
  )
}
