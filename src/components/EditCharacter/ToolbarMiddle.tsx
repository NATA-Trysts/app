import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { ReactComponent as Micro } from '@/assets/icons/micro.svg'
import { WithTooltip } from '@/components/Toolbar'

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
`

const ToolbarContainer = styled.div`
  display: flex;
  gap: 8px;
  border-radius: 16px;
  background: #2d0634;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`

const ToolbarItem = styled.div`
  background: #4e1957;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  .react-tooltip {
    background: #191a1d;
    text-transform: capitalize;
  }
`

export const ToolbarMiddle = () => {
  return (
    <Container>
      <ToolbarContainer>
        <ToolbarItem>
          <WithTooltip active={true} content="Mute" id="micro">
            <Micro />
          </WithTooltip>
          <WithTooltip active={true} content="Mic setting" id="micro-setting">
            <ArrowUp />
          </WithTooltip>
        </ToolbarItem>
        <ToolbarItem>
          <WithTooltip active={true} content="Off camera" id="camera">
            <Camera />
          </WithTooltip>
          <WithTooltip active={true} content="Camera setting" id="camera-setting">
            <ArrowUp />
          </WithTooltip>
        </ToolbarItem>
        <ToolbarItem>
          <WithTooltip active={true} content="Emoji" id="emoji">
            <Emoji />
          </WithTooltip>
        </ToolbarItem>
      </ToolbarContainer>
    </Container>
  )
}
