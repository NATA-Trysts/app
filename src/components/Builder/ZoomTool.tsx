import React from 'react'
import styled from 'styled-components'

import { Option, Popover } from '@/components/Popover'
import { WithTooltip } from '@/components/Toolbar'
import { Text } from '@/layouts/common'
import { useBuilderStore } from '@/stores'

const ZoomOptionContainer = styled.div`
  padding: 8px;
  border-radius: 12px;
  background: #212225;
  width: 180px;
  z-index: 999;
`

const CustomText = styled(Text)`
  width: 100px;
`

export const ZoomTool = () => {
  const [zoom, setZoom] = useBuilderStore((state) => [state.zoom, state.setZoom])

  return (
    <Popover
      align="center"
      content={
        <ZoomOptionContainer>
          <Option customHoverBackgroundColor="#C771E1" title="50%" onClick={() => setZoom(50)} />
          <Option customHoverBackgroundColor="#C771E1" title="100%" onClick={() => setZoom(100)} />
          <Option customHoverBackgroundColor="#C771E1" title="Zoom in" onClick={() => setZoom(zoom + 10)} />
          <Option customHoverBackgroundColor="#C771E1" title="Zoom out" onClick={() => setZoom(zoom - 10)} />
        </ZoomOptionContainer>
      }
      side="bottom"
      sideOffset={12}
    >
      <div>
        <WithTooltip content="Zoom" id="zoom">
          <CustomText size="medium" weight="normal">
            {zoom}%
          </CustomText>
        </WithTooltip>
      </div>
    </Popover>
  )
}
