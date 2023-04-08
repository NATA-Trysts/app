import { useEffect, useState } from 'react'

import { useEditCharacterStore, useMemberStore } from '@/stores'

import { useAuth } from './useAuth'
import { useAxiosPrivate } from './useAxiosPrivate'

export const useGetMe = () => {
  const { auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const [setUser] = useMemberStore((state) => [state.setUser])
  const [setCategorySelectedFromApi] = useEditCharacterStore((state) => [state.setCategorySelectedFromApi])

  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const getMe = async () => {
      try {
        if (auth?.accessToken) {
          const { data } = await axiosPrivate('/user')

          const avatarFromApi = { ...data.avatar }

          delete (avatarFromApi as any).image
          delete (avatarFromApi as any).tattoo

          setCategorySelectedFromApi(new Map(Object.entries(avatarFromApi)))

          setUser({
            ...data,
          })

          setResult({
            ...data,
          })
        }
      } catch (error) {
        console.error(error)
        setError('GET ME ERROR')
      } finally {
        setIsLoading(false)
      }
    }

    getMe()
  }, [])

  return { result, isLoading, error }
}
