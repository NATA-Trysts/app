import { ReactComponent as Chat } from '@/assets/icons/chat.svg'
import { ReactComponent as Info } from '@/assets/icons/info.svg'
import { ReactComponent as Logout } from '@/assets/icons/logout.svg'
import { ReactComponent as People } from '@/assets/icons/people.svg'
import { ReactComponent as Settingc } from '@/assets/icons/setting-c.svg'
import { Seprator, ToolbarContainer, ToolbarItem, WithTooltip } from '@/components/Toolbar'
import { Text } from '@/layouts/common'
import { useVirtualSpaceStore } from '@/stores'

export const ToolbarRight = () => {
  const [selectedUltility, setSelectedUltility] = useVirtualSpaceStore((state) => [
    state.selectedUltility,
    state.setSelectedUltility,
  ])

  return (
    <ToolbarContainer>
      <ToolbarItem>
        <WithTooltip
          active={selectedUltility === 'chat'}
          content="Chat"
          id="chat"
          onClick={() => setSelectedUltility('chat')}
        >
          <Chat />
        </WithTooltip>
      </ToolbarItem>
      <ToolbarItem>
        <WithTooltip
          active={selectedUltility === 'member'}
          content="Member"
          id="member"
          onClick={() => setSelectedUltility('member')}
        >
          <People />
          <Text size="medium" style={{ height: 16, lineHeight: '16px' }} weight="normal">
            888
          </Text>
        </WithTooltip>
      </ToolbarItem>
      <ToolbarItem>
        <WithTooltip
          active={selectedUltility === 'setting'}
          content="Setting"
          id="setting"
          onClick={() => setSelectedUltility('setting')}
        >
          <Settingc />
        </WithTooltip>
      </ToolbarItem>
      <ToolbarItem>
        <WithTooltip
          active={selectedUltility === 'info'}
          content="Info"
          id="info"
          onClick={() => setSelectedUltility('info')}
        >
          <Info />
        </WithTooltip>
      </ToolbarItem>
      <Seprator />
      <ToolbarItem>
        <WithTooltip content="Leave" customHoverColor="#FC677B" id="leave">
          <Logout />
        </WithTooltip>
      </ToolbarItem>
    </ToolbarContainer>
  )
}
