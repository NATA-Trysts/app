import { Avatar as AvatarType, useEditCharacterStore, useMemberStore, useVirtualSpaceStore } from '@/stores'

import { useAxiosPrivate } from './useAxiosPrivate'
import { useGetMe } from './useGetMe'

const useUpdateAvatar = () => {
  const [categorySelectedItemIds, isUpdatingAvatar, setIsUpdatingAvatar] = useEditCharacterStore((state) => [
    state.categorySelectedItemIds,
    state.isUpdatingAvatar,
    state.setIsUpdatingAvatar,
  ])
  const [setIsEditAvatar] = useVirtualSpaceStore((state) => [state.setIsEditAvatar])
  const [user, setUser] = useMemberStore((state) => [state.user, state.setUser])

  const axiosPrivate = useAxiosPrivate()
  const { me } = useGetMe()

  const updateAvatar = () => {
    if (isUpdatingAvatar || me === null) return

    setIsUpdatingAvatar(true)

    const objectAvatar: any = Object.fromEntries(categorySelectedItemIds)

    const newAvatar: AvatarType = {
      ...objectAvatar,
      image: 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
    }

    const newUser = {
      ...user,
      username: user.username,
      handler: user.handler,
      avatar: newAvatar,
    }

    axiosPrivate
      .put(`/users/${me?._id}`, {
        avatar: newAvatar,
        username: user.username,
        handler: user.handler,
      })
      .then(() => {
        setUser(newUser)
        setIsEditAvatar(false)
        setIsUpdatingAvatar(false)
      })
  }

  return { updateAvatar, isUpdatingAvatar }
}

export { useUpdateAvatar }
