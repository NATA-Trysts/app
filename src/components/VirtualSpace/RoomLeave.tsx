import React, { useEffect } from 'react'

import { useNetworkStore } from '@/stores'

export const RoomLeave = () => {
  const roomInstance = useNetworkStore((state) => state.roomInstance)

  useEffect(() => {
    return () => {
      roomInstance?.leave()
    }
  }, [roomInstance])

  return <></>
}
