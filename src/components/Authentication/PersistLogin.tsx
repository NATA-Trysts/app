import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { useAnonymous, useAuth, useRefreshToken } from '@/hooks'

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { auth } = useAuth()
  const { generateAnonymous } = useAnonymous()

  useEffect(() => {
    let isMounted = true
    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (error) {
        console.error(error)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    const createAnonymous = () => {
      generateAnonymous()
      setIsLoading(false)
    }

    auth?.accessToken ? verifyRefreshToken() : createAnonymous()

    return () => {
      isMounted = false
    }
  }, [])

  return <>{isLoading ? <span>Loading ... </span> : <Outlet />}</>
}
