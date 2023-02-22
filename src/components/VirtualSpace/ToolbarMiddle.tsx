import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { ReactComponent as Micro } from '@/assets/icons/micro.svg'
import { ReactComponent as ShareScreen } from '@/assets/icons/share-screen.svg'
import { ReactComponent as Whiteboard } from '@/assets/icons/whiteboard.svg'
import { ToolbarContainer, ToolbarItem, WithTooltip } from '@/components/Toolbar'

export const ToolbarMiddle = () => {
  // const tooltip = [
  //   {
  //     id: 1,
  //     icon: <ArrowUp />,
  //   },
  //   {
  //     id: 2,
  //     icon: <Camera />,
  //   },
  // ]

  return (
    <ToolbarContainer>
      <ToolbarItem>
        <WithTooltip content="Mute" id="micro">
          <Micro />
        </WithTooltip>
        <WithTooltip content="Mic setting" id="micro-setting">
          <ArrowUp />
        </WithTooltip>
      </ToolbarItem>
      <ToolbarItem>
        <WithTooltip content="Off camera" id="camera">
          <Camera />
        </WithTooltip>
        <WithTooltip content="Camera setting" id="camera-setting">
          <ArrowUp />
        </WithTooltip>
      </ToolbarItem>
      <ToolbarItem>
        <WithTooltip content="Share screen" id="share-screen">
          <ShareScreen />
        </WithTooltip>
      </ToolbarItem>
      <ToolbarItem>
        <WithTooltip content="Whiteboard" id="whiteboard">
          <Whiteboard />
        </WithTooltip>
      </ToolbarItem>
      {/* {tooltip.map((tool) => (
        <ToolbarItem key={tool.id}>
          <WithTooltip content="Emoji" id="emoji">
            {tool.icon}
          </WithTooltip>
        </ToolbarItem>
      ))} */}
      <ToolbarItem>
        <WithTooltip content="Emoji" id="emoji">
          <Emoji />
        </WithTooltip>
      </ToolbarItem>
    </ToolbarContainer>
  )
}
