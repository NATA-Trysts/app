import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Play } from '@/assets/icons/play.svg'
import { ReactComponent as Save } from '@/assets/icons/save.svg'
import { ToolbarContainer, ToolbarItem, WithTooltip } from '@/components/Toolbar'

import { ZoomTool } from './ZoomTool'

const Container = styled.div`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  --color-5: #191a1d;
  --color-4: #212225;
  --color-3: #696969;
`

export const BuilderToolbar = () => {
  return (
    <Container>
      <ToolbarContainer>
        <ToolbarItem>
          <WithTooltip content="Save" id="save">
            <Save />
          </WithTooltip>
        </ToolbarItem>
        <ToolbarItem>
          <ZoomTool />
        </ToolbarItem>
        <ToolbarItem>
          <WithTooltip content="Host space" id="host-space">
            <Play />
          </WithTooltip>
        </ToolbarItem>
      </ToolbarContainer>
    </Container>
  )
}
