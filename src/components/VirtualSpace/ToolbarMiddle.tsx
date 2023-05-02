import {
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectPeerScreenSharing,
  selectScreenShareByPeerID,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as CameraOff } from '@/assets/icons/camera-off.svg'
import { ReactComponent as Micro } from '@/assets/icons/mic.svg'
import { ReactComponent as MicroOff } from '@/assets/icons/mic-off.svg'
import { ReactComponent as ShareScreen } from '@/assets/icons/share-screen.svg'
import { ReactComponent as Writing } from '@/assets/icons/writing.svg'
import { NameBox, RandomAvatar } from '@/components/EditCharacter'
import { ListAudio, ListCamera } from '@/components/ListDevice'
import { Popover } from '@/components/Popover'
import { AnimatedToolbarContainer, ToolbarItem, WithTooltip } from '@/components/Toolbar'
import { MESSAGES } from '@/libs/constants'
import { useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

import { useIframeDialog } from './IframeDialog/IframeDialogContext'
import { ScreenShare } from './ScreenShare'
import { WhiteBoard } from './WhiteBoard'

const Condition = styled(motion.div)`
  display: flex;
  gap: 8px;
`

const OpeningNotification = styled.div`
  transform: translateY(-72px);
  width: 310px;
  height: 40px;
  border-radius: 16px;
  background-color: #2d0634;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-size: 12px;
`

export const ToolbarMiddle = () => {
  const [isEditAvatar, isHostWhiteBoardOpen] = useVirtualSpaceStore((state) => [
    state.isEditAvatar,
    state.isHostWhiteBoardOpen,
  ])
  const mainMember = useMemberStore((state) => state.mainMember)
  const isHost = mainMember?.isHost
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const roomId = roomInstance?.id

  const hmsActions = useHMSActions()
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled)
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled)
  const presenter = useHMSStore(selectPeerScreenSharing)
  const screenShareVideoTrack = useHMSStore(selectScreenShareByPeerID(presenter ? presenter.id : ''))

  const [openIframe] = useIframeDialog()

  const [isOpenCameraSetting, setIsOpenCameraSetting] = useState(false)
  const [isOpenMicSetting, setIsOpenMicSetting] = useState(false)
  const [isOpenShareScreen, setIsOpenShareScreen] = useState(false)

  const toggleAudio = async () => await hmsActions.setLocalAudioEnabled(!audioEnabled)

  const toggleVideo = async () => await hmsActions.setLocalVideoEnabled(!videoEnabled)

  const shareScreen = async () => {
    try {
      if (isHost) {
        await hmsActions.setScreenShareEnabled(true)
      }
      openShareScreen()
    } catch (error) {
      console.error(error)
    }
  }

  const openWhiteBoard = () => {
    if (isHost) {
      roomInstance?.send(MESSAGES.WHITEBOARD.HOST_OPEN, { whiteboardId: roomId })
    } else {
      roomInstance?.send(MESSAGES.WHITEBOARD.JOIN, {
        whiteboardId: roomId,
      })
    }

    openIframe(<WhiteBoard id={roomInstance?.id || ''} />, { onClose: closeWhiteBoard })
  }

  const closeWhiteBoard = () => {
    if (isHost) {
      roomInstance?.send(MESSAGES.WHITEBOARD.HOST_CLOSE, { whiteboardId: roomId })
    } else {
      roomInstance?.send(MESSAGES.WHITEBOARD.LEAVE, {
        whiteboardId: roomId,
      })
    }
  }

  const openShareScreen = () => {
    setIsOpenShareScreen(true)
  }

  const closeShareScreen = () => {
    setIsOpenShareScreen(false)

    hmsActions.setScreenShareEnabled(false)
  }

  const onPressZToOpenWhiteBoard = (e: KeyboardEvent) => {
    if (e.key === 'z') {
      openWhiteBoard()
    }
  }

  const onPressZToOpenShareScreen = (e: KeyboardEvent) => {
    if (e.key === 'z') {
      openShareScreen()
    }
  }

  useEffect(() => {
    if (isHostWhiteBoardOpen) {
      if (!isHost) window.addEventListener('keypress', onPressZToOpenWhiteBoard)
    } else {
      window.removeEventListener('keypress', onPressZToOpenWhiteBoard)
    }

    return () => window.removeEventListener('keypress', onPressZToOpenWhiteBoard)
  }, [roomInstance, isHostWhiteBoardOpen, mainMember])

  useEffect(() => {
    if (presenter) {
      if (!isHost) window.addEventListener('keypress', onPressZToOpenShareScreen)
    } else {
      closeShareScreen()
      window.removeEventListener('keypress', onPressZToOpenShareScreen)
    }

    return () => window.removeEventListener('keypress', onPressZToOpenShareScreen)
  }, [presenter, isOpenShareScreen, mainMember])

  // useEffect(() => {
  //   if (screenShareVideoTrack && videoRef.current) {
  //     hmsActions.attachVideo(screenShareVideoTrack.id, videoRef.current)
  //   }
  // }, [screenShareVideoTrack])

  return (
    <>
      {!isHost && isHostWhiteBoardOpen && (
        <OpeningNotification>
          <span>The host is opening a white board, press to join</span>
        </OpeningNotification>
      )}
      {!!presenter && !isHost && (
        <OpeningNotification>
          <span>
            The host is sharing screen, press <b>Z</b> to join
          </span>
        </OpeningNotification>
      )}
      {presenter && isOpenShareScreen && (
        <ScreenShare close={closeShareScreen} trackId={screenShareVideoTrack.id}></ScreenShare>
      )}

      <AnimatedToolbarContainer
        layout
        transition={{
          opacity: { ease: 'linear' },
          layout: { duration: 0.3 },
        }}
      >
        <ToolbarItem>
          <WithTooltip content={audioEnabled ? 'Mute' : 'Unmute'} id="micro" onClick={toggleAudio}>
            {audioEnabled ? <Micro /> : <MicroOff />}
          </WithTooltip>
          <Popover
            align="center"
            content={<ListAudio setIsPopoverOpen={setIsOpenMicSetting} />}
            handleClickTrigger={() => setIsOpenMicSetting(!isOpenMicSetting)} // ISSUE: does not close
            handleInteractOutside={() => setIsOpenMicSetting(false)}
            isPopoverOpen={isOpenMicSetting}
            side="top"
            sideOffset={10}
          >
            <div>
              <WithTooltip content="Mic setting" id="micro-setting">
                <ArrowUp />
              </WithTooltip>
            </div>
          </Popover>
        </ToolbarItem>
        <ToolbarItem>
          <WithTooltip content={`${videoEnabled ? 'Off' : 'On'} camera`} id="camera" onClick={toggleVideo}>
            {videoEnabled ? <Camera /> : <CameraOff />}
          </WithTooltip>
          <Popover
            align="center"
            content={<ListCamera setIsPopoverOpen={setIsOpenCameraSetting} />}
            handleClickTrigger={() => setIsOpenCameraSetting(!isOpenCameraSetting)} // ISSUE: does not close
            handleInteractOutside={() => setIsOpenCameraSetting(false)}
            isPopoverOpen={isOpenCameraSetting}
            side="top"
            sideOffset={10}
          >
            <div>
              <WithTooltip content="Camera setting" id="camera-setting">
                <ArrowUp />
              </WithTooltip>
            </div>
          </Popover>
        </ToolbarItem>
        {isHost && (
          <Condition
            layout
            animate={{
              opacity: isEditAvatar ? 0 : 1,
              width: isEditAvatar ? 0 : '100%',
            }}
            initial={{
              width: 0,
              opacity: 0,
            }}
            transition={{
              opacity: { ease: 'linear', duration: isEditAvatar ? 0.1 : 0.25 },
              width: { duration: isEditAvatar ? 0.25 : 0.1 },
            }}
          >
            <>
              <ToolbarItem onClick={shareScreen}>
                <WithTooltip content="Share screen" id="share-screen">
                  <ShareScreen />
                </WithTooltip>
              </ToolbarItem>
              <ToolbarItem>
                <WithTooltip content="White Board" id="white-board" onClick={() => openWhiteBoard()}>
                  <Writing />
                </WithTooltip>
              </ToolbarItem>
            </>
          </Condition>
        )}
      </AnimatedToolbarContainer>
      <NameBox isEdit={isEditAvatar} />
      <RandomAvatar isEdit={isEditAvatar} />
    </>
  )
}
