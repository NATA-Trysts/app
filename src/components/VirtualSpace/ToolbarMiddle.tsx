import React from 'react'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import { ReactComponent as Emoji } from '@/assets/icons/emoji.svg'
import { ReactComponent as Micro } from '@/assets/icons/micro.svg'
import { ReactComponent as ShareScreen } from '@/assets/icons/share-screen.svg'
import { ReactComponent as Whiteboard } from '@/assets/icons/whiteboard.svg'
import { Seprator, ToolbarContainer, ToolbarItem } from '@/components/Toolbar'
import { SVGClickable } from '@/layouts/common'

export const ToolbarMiddle = () => {
  return (
    <ToolbarContainer>
      <ToolbarItem>
        <SVGClickable>
          <Micro />
        </SVGClickable>
        <Seprator />
        <SVGClickable>
          <ArrowUp />
        </SVGClickable>
      </ToolbarItem>
      <ToolbarItem>
        <SVGClickable>
          <Camera />
        </SVGClickable>
        <Seprator />
        <SVGClickable>
          <ArrowUp />
        </SVGClickable>
      </ToolbarItem>
      <ToolbarItem>
        <SVGClickable>
          <ShareScreen />
        </SVGClickable>
      </ToolbarItem>
      <ToolbarItem>
        <SVGClickable>
          <Whiteboard />
        </SVGClickable>
      </ToolbarItem>
      <ToolbarItem>
        <SVGClickable>
          <Emoji />
        </SVGClickable>
      </ToolbarItem>
    </ToolbarContainer>
  )
}
