import { motion } from 'framer-motion'
import { useEffect } from 'react'
import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { ReactComponent as Micro } from '@/assets/icons/micro.svg'
import { ReactComponent as ShareScreen } from '@/assets/icons/share-screen.svg'
import { ReactComponent as Whiteboard } from '@/assets/icons/whiteboard.svg'
import { ToolbarItem, WithTooltip } from '@/components/Toolbar'
import { useVirtualSpaceStore } from '@/stores'

const Condition = styled(motion.div)`
  display: flex;
  gap: 8px;
`

const AnimatedToolbarContainer = styled(motion.div)`
  display: flex;
  border-radius: 16px;
  background: var(--color-5);
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`

const CustomToolbarItem = styled(ToolbarItem)`
  margin-left: 8px;
`

export const ToolbarMiddle = () => {
  const isEditAvatar = useVirtualSpaceStore((state) => state.isEditAvatar)

  useEffect(() => {
    console.log(isEditAvatar)
  }, [isEditAvatar])

  return (
    <AnimatedToolbarContainer
      layout
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.3 },
      }}
    >
      <ToolbarItem>
        <WithTooltip content="Mute" id="micro">
          <Micro />
        </WithTooltip>
        <WithTooltip content="Mic setting" id="micro-setting">
          <ArrowUp />
        </WithTooltip>
      </ToolbarItem>
      <CustomToolbarItem>
        <WithTooltip content="Off camera" id="camera">
          <Camera />
        </WithTooltip>
        <WithTooltip content="Camera setting" id="camera-setting">
          <ArrowUp />
        </WithTooltip>
      </CustomToolbarItem>
      <Condition
        layout
        animate={{
          opacity: isEditAvatar ? 0 : 1,
          width: isEditAvatar ? 0 : 80,
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
        <WithTooltip content="Emoji" id="emoji">
          <Emoji />
        </WithTooltip>
      </CustomToolbarItem>
    </AnimatedToolbarContainer>
  )
}
