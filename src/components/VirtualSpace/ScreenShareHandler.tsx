import {
  selectIsLocalScreenShared,
  selectLocalPeerID,
  selectPeerScreenSharing,
  selectScreenShareByPeerID,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'
import { useEffect } from 'react'

import { MESSAGES } from '@/libs/constants'
import { useNetworkStore, useVirtualSpaceStore } from '@/stores'

import { useIframeDialog } from './IframeDialog/IframeDialogContext'
import { ScreenShare } from './ScreenShare'

export const ScreenShareHandler = () => {
  const [viewScreenShare, openScreenShare, closeScreenShare, screenShares] = useVirtualSpaceStore((state) => [
    state.viewScreenShare,
    state.openViewScreenShare,
    state.closeViewScreenShare,
    state.screenShares,
  ])

  const [openIframe, closeIframe] = useIframeDialog()
  const presenter = useHMSStore(selectPeerScreenSharing)
  const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared)
  const screenVideoTrack = useHMSStore(selectScreenShareByPeerID(viewScreenShare.peerId))
  const localPeerId = useHMSStore(selectLocalPeerID)
  const hmsActions = useHMSActions()
  const roomInstance = useNetworkStore((state) => state.roomInstance)

  useEffect(() => {
    if (isLocalScreenShared) {
      if (presenter) openScreenShare(presenter.id)
    } else {
      closeIframe()
    }
  }, [isLocalScreenShared, presenter])

  useEffect(() => {
    if (viewScreenShare.isOpenScreenShare) {
      if (screenVideoTrack) {
        openIframe(<ScreenShare trackId={screenVideoTrack.id} />, {
          onClose: closeScreenShare,
        })
      }
    } else {
      if (isLocalScreenShared) {
        hmsActions.setScreenShareEnabled(false)
        const findScreenShare = [...screenShares.values()].find((s) => s.screenSharePeerId === localPeerId)

        if (findScreenShare) {
          roomInstance?.send(MESSAGES.SCREENSHARE.CLOSE, {
            furnitureIframeId: findScreenShare.furnitureIframeId,
          })
        }
      }
    }
  }, [viewScreenShare.isOpenScreenShare])

  return <></>
}
