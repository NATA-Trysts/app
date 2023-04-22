import { AvatarPanel, BackButton, JoinButton, ThemePicker } from '@/components/EditCharacter'
// import { useUpdateAvatar } from '@/hooks'
import { MESSAGES } from '@/libs/constants'
import { useEditCharacterStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

export const CustomCharacterPanel = () => {
  const [isEditAvatar, setIsEditAvatar] = useVirtualSpaceStore((state) => [state.isEditAvatar, state.setIsEditAvatar])
  // const { updateAvatar } = useUpdateAvatar()
  const [categorySelectedItemIds] = useEditCharacterStore((state) => [state.categorySelectedItemIds])
  const roomInstance = useNetworkStore((state) => state.roomInstance)

  const join = () => {
    // updateAvatar()
    const avatar = {
      skin: categorySelectedItemIds.get('skin'),
      hair: categorySelectedItemIds.get('hair'),
      upper: categorySelectedItemIds.get('upper'),
      lower: categorySelectedItemIds.get('lower'),
      shoe: categorySelectedItemIds.get('shoe'),
      accessory: categorySelectedItemIds.get('accessory'),
      tattoo: categorySelectedItemIds.get('tattoo'),
    }

    roomInstance?.send(MESSAGES.MEMBER.CHANGE_AVATAR, {
      avatar: JSON.stringify(avatar),
    })
  }

  const back = () => {
    setIsEditAvatar(false)
  }

  return (
    <>
      <BackButton isEdit={isEditAvatar} onClickBack={back} />
      <AvatarPanel isEdit={isEditAvatar} />
      <JoinButton isEdit={isEditAvatar} onClick={join} />
      <ThemePicker isEdit={isEditAvatar} />
    </>
  )
}
