import { selectIsLocalAudioEnabled, selectIsLocalVideoEnabled, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import { toggleSession } from '@react-three/xr'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as CameraOff } from '@/assets/icons/camera-off.svg'
import { ReactComponent as Micro } from '@/assets/icons/mic.svg'
import { ReactComponent as MicroOff } from '@/assets/icons/mic-off.svg'
import { ReactComponent as ShareScreen } from '@/assets/icons/share-screen.svg'
import { ReactComponent as VirtualGlasses } from '@/assets/icons/virtual-glasses.svg'
import { ReactComponent as Writing } from '@/assets/icons/writing.svg'
import { NameBox, RandomAvatar } from '@/components/EditCharacter'
import { ListAudio, ListCamera } from '@/components/ListDevice'
import { Popover } from '@/components/Popover'
import { AnimatedToolbarContainer, ToolbarItem, WithTooltip } from '@/components/Toolbar'
import { useMember, useScreenShare } from '@/hooks'
import { MESSAGES } from '@/libs/constants'
import { useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

import { useIframeDialog } from './IframeDialog/IframeDialogContext'
import { WhiteBoard } from './WhiteBoard'

const Condition = styled(motion.div)`
  display: flex;
  gap: 8px;
`

const OpeningNotification = styled.div`
  position: absolute;
  bottom: 72px;
  width: 310px;
  height: 40px;
  border-radius: 16px;
  background-color: var(--color-5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-size: 12px;
`

export const ToolbarMiddle = () => {
  const [isEditAvatar, isHostOpenWhiteBoard] = useVirtualSpaceStore((state) => [
    state.isEditAvatar,
    state.isHostWhiteBoardOpen,
  ])
  const mainMember = useMemberStore((state) => state.mainMember)
  const isHost = mainMember?.isHost
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const roomId = roomInstance?.id
  const { hostMember } = useMember()
  const [openScreenShare] = useVirtualSpaceStore((state) => [state.openViewScreenShare])

  const hmsActions = useHMSActions()
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled)
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled)
  const { isHostScreenSharing } = useScreenShare()
  // const presenter = useHMSStore(selectPeerScreenSharing)
  // const screenShareVideoTrack = useHMSStore(selectScreenShareByPeerID(presenter ? presenter.id : ''))

  const [openIframe] = useIframeDialog()

  const [isOpenCameraSetting, setIsOpenCameraSetting] = useState(false)
  const [isOpenMicSetting, setIsOpenMicSetting] = useState(false)
  // const [isOpenShareScreen, setIsOpenShareScreen] = useState(false)
  const [isEnteredVR, setIsEnteredVR] = useState(false)

  const toggleAudio = async () => await hmsActions.setLocalAudioEnabled(!audioEnabled)

  const toggleVideo = async () => await hmsActions.setLocalVideoEnabled(!videoEnabled)

  const shareScreen = async () => {
    try {
      if (isHost) {
        await hmsActions.setScreenShareEnabled(true)
      }
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

  // const openPoker = () => {
  //   openIframe(<Poker id={'53007769639138993570'} />, { onClose: closePoker })
  // }

  // const closePoker = () => {}

  const onPressZToOpenWhiteBoard = (e: KeyboardEvent) => {
    if (e.key === 'z') {
      openWhiteBoard()
    }
  }

  const onPressZToOpenShareScreen = (e: KeyboardEvent) => {
    if (e.key === 'z') {
      if (hostMember) openScreenShare(hostMember.peerId)
    }
  }

  const toggleVR = async () => {
    const session = await toggleSession('immersive-vr')

    if (session) {
      setIsEnteredVR(true)

      const button = document.createElement('button')

      // TODO: It's not a good way to append element, need update
      button.innerText = 'Exit VR'
      button.id = 'exit-vr-btn'

      button.style.padding = '8px 16px'
      button.style.border = 'none'
      button.style.position = 'absolute'
      button.style.bottom = '0'
      button.style.zIndex = '999999'
      button.style.left = '50%'
      button.style.transform = 'translate(-50%, -24px)'
      button.style.cursor = 'pointer'
      button.addEventListener('click', toggleVR)
      document.body.appendChild(button)
    } else {
      document.body.removeChild(document.querySelector('#exit-vr-btn') as Node)
      setIsEnteredVR(false)
    }
  }

  useEffect(() => {
    if (!isHost) {
      if (isHostOpenWhiteBoard) window.addEventListener('keypress', onPressZToOpenWhiteBoard)
      else window.removeEventListener('keypress', onPressZToOpenWhiteBoard)
    }

    return () => window.removeEventListener('keypress', onPressZToOpenWhiteBoard)
  }, [roomInstance, isHostOpenWhiteBoard, mainMember])

  useEffect(() => {
    if (!isHost) {
      if (isHostScreenSharing) window.addEventListener('keypress', onPressZToOpenShareScreen)
      else window.removeEventListener('keypress', onPressZToOpenShareScreen)
    }

    return () => window.removeEventListener('keypress', onPressZToOpenShareScreen)
  }, [mainMember, isHostScreenSharing])

  // useEffect(() => {
  //   if (screenShareVideoTrack && videoRef.current) {
  //     hmsActions.attachVideo(screenShareVideoTrack.id, videoRef.current)
  //   }
  // }, [screenShareVideoTrack])

  return (
    <>
      {!isHost && isHostOpenWhiteBoard && (
        <OpeningNotification>
          <span>
            The host is opening a white board, press <b>Z</b> to join
          </span>
        </OpeningNotification>
      )}
      {!isHost && isHostScreenSharing && (
        <OpeningNotification>
          <span>
            The host is sharing screen, press <b>Z</b> to join
          </span>
        </OpeningNotification>
      )}
      {/* {presenter && isOpenShareScreen && (
        <ScreenShare close={closeShareScreen} trackId={screenShareVideoTrack.id}></ScreenShare>
      )} */}

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
        {/* <ToolbarItem onClick={openPoker}>
          <WithTooltip content="Start Poker" id="poker">
            <Writing />
          </WithTooltip>
        </ToolbarItem> */}
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
        <ToolbarItem onClick={() => toggleVR()}>
          <WithTooltip content={isEnteredVR ? 'Exit VR' : 'Enter VR'} id="toggle-vr">
            <VirtualGlasses />
          </WithTooltip>
        </ToolbarItem>
      </AnimatedToolbarContainer>
      <NameBox isEdit={isEditAvatar} />
      <RandomAvatar isEdit={isEditAvatar} />
    </>
  )
}
