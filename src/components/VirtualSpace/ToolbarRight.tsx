import React from 'react'

import { ReactComponent as Chat } from '@/assets/icons/chat.svg'
import { ReactComponent as Info } from '@/assets/icons/info.svg'
import { ReactComponent as Logout } from '@/assets/icons/logout.svg'
import { ReactComponent as People } from '@/assets/icons/people.svg'
import { ReactComponent as Settingc } from '@/assets/icons/setting-c.svg'
import { Seprator, ToolbarContainer, ToolbarItem } from '@/components/Toolbar'
import { SVGClickable, Text } from '@/layouts/common'

export const ToolbarRight = () => {
  return (
    <ToolbarContainer>
      <ToolbarItem>
        <SVGClickable>
          <Chat />
        </SVGClickable>
      </ToolbarItem>
      <ToolbarItem>
        <SVGClickable>
          <People />
          <Text size="medium" style={{ height: 16, lineHeight: '16px' }} weight="normal">
            888
          </Text>
        </SVGClickable>
      </ToolbarItem>
      <ToolbarItem>
        <SVGClickable>
          <Settingc />
        </SVGClickable>
      </ToolbarItem>
      <ToolbarItem>
        <SVGClickable>
          <Info />
        </SVGClickable>
      </ToolbarItem>
      <Seprator />
      <ToolbarItem>
        <SVGClickable>
          <Logout />
        </SVGClickable>
      </ToolbarItem>
    </ToolbarContainer>
  )
}
