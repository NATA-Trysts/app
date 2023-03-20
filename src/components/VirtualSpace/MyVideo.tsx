import { selectLocalPeer, useHMSStore } from '@100mslive/react-sdk'
import styled from 'styled-components'

import { VideoTile } from '@/components/VideoCall'
import { useVirtualSpaceStore } from '@/stores'

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
  const isEditAvatar = useVirtualSpaceStore((state) => state.isEditAvatar)
  const peer = useHMSStore(selectLocalPeer)

  return (
    <>
      {peer && !isEditAvatar ? (
        <MyVideoContainer>
          <VideoTile peer={peer} />
        </MyVideoContainer>
      ) : null}
    </>
  )
}
