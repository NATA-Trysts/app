import { Avatar as AvatarType, useEditCharacterStore, useMemberStore, useVirtualSpaceStore } from '@/stores'

import { useAxiosPrivate } from './useAxiosPrivate'
import { useGetMe } from './useGetMe'

const useUpdateAvatar = () => {
  const [categorySelectedItemIds] = useEditCharacterStore((state) => [state.categorySelectedItemIds])
  const [setIsEditAvatar] = useVirtualSpaceStore((state) => [state.setIsEditAvatar])
  const [user, setUser] = useMemberStore((state) => [state.user, state.setUser])

  const axiosPrivate = useAxiosPrivate()
  const { result } = useGetMe()

  const updateAvatar = () => {
    const objectAvatar: any = Object.fromEntries(categorySelectedItemIds)

    const newAvatar: AvatarType = {
      ...objectAvatar,
      tattoo: {
        id: 'tattoo.001.001',
      },
      image: 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
    }

    axiosPrivate
      .put(`/users/${result._id}`, {
        avatar: newAvatar,
      })
      .then(() => {
        setUser({
          ...user,
          avatar: newAvatar,
        })
        setIsEditAvatar(false)
      })
  }

  return { updateAvatar }
}

export { useUpdateAvatar }
