import { useEffect, useState } from 'react'

import { useMemberStore } from '@/stores'

import { useAuth } from './useAuth'
import { useAxiosPrivate } from './useAxiosPrivate'

export const useGetMe = () => {
  const { auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const [user, setUser] = useMemberStore((state) => [state.user, state.setUser])

  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const getMe = async () => {
      try {
        if (auth?.accessToken) {
          const { data } = await axiosPrivate('/user')

          setUser({
            ...user, // TEMP for keep avatar
            ...data,
          })

          setResult({
            ...user,
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
