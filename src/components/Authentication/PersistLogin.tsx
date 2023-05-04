import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { useAuth, useRefreshToken } from '@/hooks'

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { auth } = useAuth()

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

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

    return () => {
      isMounted = false
    }
  }, [])

  return <>{isLoading ? <span></span> : <Outlet />}</>
}
