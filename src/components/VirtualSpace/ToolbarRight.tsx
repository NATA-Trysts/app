import { ReactComponent as Chat } from '@/assets/icons/chat.svg'
import { ReactComponent as Info } from '@/assets/icons/info.svg'
import { ReactComponent as Logout } from '@/assets/icons/logout.svg'
import { ReactComponent as People } from '@/assets/icons/people.svg'
import { ReactComponent as Settingc } from '@/assets/icons/setting-c.svg'
import { Text } from '@/components/Commons'
import { AnimatedToolbarContainer, CustomToolbarItem, ToolbarItem, WithTooltip } from '@/components/Toolbar'
import { useVirtualSpaceStore } from '@/stores'

export const ToolbarRight = () => {
  const [selectedUltility, setSelectedUltility, isEditAvatar] = useVirtualSpaceStore((state) => [
    state.selectedUltility,
    state.setSelectedUltility,
    state.isEditAvatar,
  ])

  return (
    <AnimatedToolbarContainer
      animate={{
        y: isEditAvatar ? 70 : 0,
      }}
    >
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
      <CustomToolbarItem>
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
      </CustomToolbarItem>
      <CustomToolbarItem>
        <WithTooltip
          active={selectedUltility === 'setting'}
          content="Setting"
          id="setting"
          onClick={() => setSelectedUltility('setting')}
        >
          <Settingc />
        </WithTooltip>
      </CustomToolbarItem>
      <CustomToolbarItem>
        <WithTooltip
          active={selectedUltility === 'info'}
          content="Info"
          id="info"
          onClick={() => setSelectedUltility('info')}
        >
          <Info />
        </WithTooltip>
      </CustomToolbarItem>
      <CustomToolbarItem>
        <WithTooltip content="Leave" customHoverColor="#FC677B" id="leave">
          <Logout />
        </WithTooltip>
      </CustomToolbarItem>
    </AnimatedToolbarContainer>
  )
}
