import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth, useAxiosPrivate } from '@/hooks'

const TestAuth = () => {
  const { setAuth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const user = {
      name: 'sonhaaa',
      email: 'nguyensonha.hanz@gmail.com',
    }
    const roles = [1000, 2000]
    const accessToken = '124'

    setAuth({ user, roles, accessToken })
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/users', {
          signal: controller.signal,
        })

        console.log(response.data)
      } catch (e) {
        console.error(e)
        navigate('/login', { state: { from: location }, replace: true })
      }
    }

    getUsers()

    return () => {
      controller.abort()
    }
  }, [])

  return <div>TestAuth</div>
}

export default TestAuth
