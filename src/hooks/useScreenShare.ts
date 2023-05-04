import { selectIsLocalScreenShared, selectPeerScreenSharing, useHMSStore } from '@100mslive/react-sdk'

import { useMember } from './useMember'

export const useScreenShare = () => {
  const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared)
  const presenter = useHMSStore(selectPeerScreenSharing)
  const { hostMember } = useMember()

  const isHostScreenSharing = presenter?.id && presenter?.id === hostMember?.peerId

  return { isLocalScreenShared, isHostScreenSharing }
}
