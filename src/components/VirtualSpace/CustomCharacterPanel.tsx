import { FormProvider, useForm } from 'react-hook-form'

import { AvatarPanel, BackButton, CustomPanel, JoinButton, NameBox, ThemePicker } from '@/components/EditCharacter'
import { useUser } from '@/hooks'
import { MESSAGES } from '@/libs/constants'
import { useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

export const CustomCharacterPanel = () => {
  const [isEditAvatar, setIsEditAvatar] = useVirtualSpaceStore((state) => [state.isEditAvatar, state.setIsEditAvatar])
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const methods = useForm()
  const { setUserName } = useUser()
  const [mainMember] = useMemberStore((state) => [state.mainMember])

  const dispatchChangeName = (name: string) => {
    roomInstance?.send(MESSAGES.MEMBER.CHANGE_NAME, {
      name: name,
    })
  }

  const join = () => {
    setIsEditAvatar(false)

    methods.handleSubmit((data) => {
      setUserName(data.name).then((success) => {
        if (success) dispatchChangeName(data.name)
      })
    })()
  }

  const back = () => {
    setIsEditAvatar(false)
  }

  return (
    <>
      <FormProvider {...methods}>
        <BackButton isEdit={isEditAvatar} onClickBack={back} />
        <AvatarPanel isEdit={isEditAvatar} />
        <CustomPanel isEdit={isEditAvatar} />
        <JoinButton isEdit={isEditAvatar} onClick={join} />
        <ThemePicker isEdit={isEditAvatar} />
        <NameBox isEdit={isEditAvatar} name={mainMember?.user.username} />
      </FormProvider>
    </>
  )
}
