import { selectIsLocalAudioEnabled, selectIsLocalVideoEnabled, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as CameraOff } from '@/assets/icons/camera-off.svg'
import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { ReactComponent as Micro } from '@/assets/icons/mic.svg'
import { ReactComponent as MicroOff } from '@/assets/icons/mic-off.svg'
import { ReactComponent as ShareScreen } from '@/assets/icons/share-screen.svg'
import { ReactComponent as Whiteboard } from '@/assets/icons/whiteboard.svg'
import { NameBox } from '@/components/EditCharacter'
import { EmojiContent } from '@/components/EmojiContent'
import { ListAudio, ListCamera } from '@/components/ListDevice'
import { Popover } from '@/components/Popover'
import { AnimatedToolbarContainer, ToolbarItem, WithTooltip } from '@/components/Toolbar'
import { useVirtualSpaceStore } from '@/stores'

const Condition = styled(motion.div)`
  display: flex;
  gap: 8px;
`

const CustomToolbarItem = styled(ToolbarItem)`
  margin-left: 8px;
`

export const ToolbarMiddle = () => {
  const isEditAvatar = useVirtualSpaceStore((state) => state.isEditAvatar)
  const hmsActions = useHMSActions()

  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled)
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled)

  const [isOpenCameraSetting, setIsOpenCameraSetting] = useState(false)
  const [isOpenMicSetting, setIsOpenMicSetting] = useState(false)
  const [isOpenEmoji, setIsOpenEmoji] = useState(false)

  const toggleAudio = async () => await hmsActions.setLocalAudioEnabled(!audioEnabled)

  const toggleVideo = async () => await hmsActions.setLocalVideoEnabled(!videoEnabled)

  const shareScreen = async () => {
    try {
      await hmsActions.setScreenShareEnabled(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
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
        <CustomToolbarItem>
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
        </CustomToolbarItem>
        <Condition
          layout
          animate={{
            opacity: isEditAvatar ? 0 : 1,
            width: isEditAvatar ? 0 : 80,
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
          <CustomToolbarItem
            style={{
              marginLeft: 8,
            }}
            onClick={shareScreen}
          >
            <WithTooltip content="Share screen" id="share-screen">
              <ShareScreen />
            </WithTooltip>
          </CustomToolbarItem>
          <ToolbarItem>
            <WithTooltip content="Whiteboard" id="whiteboard">
              <Whiteboard />
            </WithTooltip>
          </ToolbarItem>
        </Condition>
        <CustomToolbarItem
          style={{
            marginLeft: 8,
          }}
        >
          <Popover
            align="center"
            content={<EmojiContent setIsPopoverOpen={setIsOpenEmoji} />}
            handleClickTrigger={() => setIsOpenEmoji(!isOpenEmoji)} // ISSUE: does not close
            handleInteractOutside={() => setIsOpenEmoji(false)}
            isPopoverOpen={isOpenEmoji}
            side="top"
            sideOffset={10}
          >
            <div>
              <WithTooltip content="Emoji" id="emoji">
                <Emoji />
              </WithTooltip>
            </div>
          </Popover>
        </CustomToolbarItem>
      </AnimatedToolbarContainer>
      <NameBox isEdit={isEditAvatar} name="abc" />
    </>
  )
}
