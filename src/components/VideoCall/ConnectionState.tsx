import { selectIsConnectedToRoom, useHMSStore } from '@100mslive/react-sdk'

import { Text } from '@/components/Commons'

export const ConnectionState = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom)

  return (
    <Text size="small" weight="lighter">
      {isConnected ? 'Connected' : 'Not connected, please join.'}
    </Text>
  )
}
