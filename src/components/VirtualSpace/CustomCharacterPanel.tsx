import { AvatarPanel, BackButton, CustomPanel, JoinButton } from '@/components/EditCharacter'
import { useVirtualSpaceStore } from '@/stores'

export const CustomCharacterPanel = () => {
  const [isEditAvatar, setIsEditAvatar] = useVirtualSpaceStore((state) => [state.isEditAvatar, state.setIsEditAvatar])

  const join = () => {
    setIsEditAvatar(false)
  }

  const back = () => {
    setIsEditAvatar(false)
  }

  return (
    <>
      <BackButton isEdit={isEditAvatar} onClickBack={back} />
      <AvatarPanel isEdit={isEditAvatar} />
      <CustomPanel isEdit={isEditAvatar} />
      <JoinButton isEdit={isEditAvatar} onClick={join} />
    </>
  )
}
