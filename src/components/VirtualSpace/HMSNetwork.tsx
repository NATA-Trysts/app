import { useHMSActions } from '@100mslive/react-sdk'
import { useEffect } from 'react'

import { useNetworkStore } from '@/stores'

export const HMSNetwork = () => {
  const hmsActions = useHMSActions()
  const setIsJoinedHMS = useNetworkStore((state) => state.setIsJoinedHMS)

  const join = async () => {
    const response = await fetch('https://prod-in2.100ms.live/hmsapi/shtest.app.100ms.live/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // eslint-disable-next-line camelcase
        room_id: '638968d0aee54625da649a38',
        role: 'student',
        // eslint-disable-next-line camelcase
        user_id: Date.now().toString(),
      }),
    })
    const a = await response.json()
    const config = {
      userName: 'SH',
      authToken: a.token,
      settings: {
        isAudioMuted: true,
        isVideoMuted: true,
      },
      metaData: JSON.stringify({ city: 'Da Nang' }),
      rememberDeviceSelection: true,
    }

    try {
      await hmsActions.join(config).then(() => setIsJoinedHMS(true))
    } catch (error) {
      setIsJoinedHMS(false)
      console.error(error)
    }
  }

  useEffect(() => {
    try {
      join()
    } catch (error) {
      console.error(error)
    }

    return () => {
      hmsActions.leave()
    }
  }, [])

  return <></>
}
