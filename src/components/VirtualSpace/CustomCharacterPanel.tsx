// import { AvatarPanel, BackButton, JoinButton, ThemePicker } from '@/components/EditCharacter'

import { AvatarPanel, BackButton, JoinButton } from '@/components/EditCharacter'
import { useUpdateAvatar } from '@/hooks'
import { useVirtualSpaceStore } from '@/stores'

export const CustomCharacterPanel = () => {
  const [isEditAvatar, setIsEditAvatar] = useVirtualSpaceStore((state) => [state.isEditAvatar, state.setIsEditAvatar])
  const { updateAvatar } = useUpdateAvatar()

  const join = () => {
    updateAvatar()
  }

  const back = () => {
    setIsEditAvatar(false)
  }

  return (
    <>
      <BackButton isEdit={isEditAvatar} onClickBack={back} />
      <AvatarPanel isEdit={isEditAvatar} />
      <JoinButton isEdit={isEditAvatar} onClick={join} />
      {/* <ThemePicker isEdit={isEditAvatar} /> */}
    </>
  )
}
