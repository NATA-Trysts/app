import { selectPeers, useHMSStore } from '@100mslive/react-sdk'
import React from 'react'

import { VideoTile } from './VideoTile'

export const Conference = () => {
  const peers = useHMSStore(selectPeers)

  return (
    <>
      {peers.map((peer) => (
        <VideoTile key={peer.id} peer={peer} />
      ))}
    </>
  )
}
