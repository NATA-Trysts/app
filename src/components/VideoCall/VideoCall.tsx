import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { Conference } from './Conference'
import { ConnectionState } from './ConnectionState'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const Button = styled.button`
  padding: 10px 24px;
  cursor: pointer;
  background: transparent;
  transition: background 0.25s ease;
  border-radius: 12px;
  border: none;

  :hover {
    background: #270e56;
  }
`

const ButtonText = styled(Text)`
  color: white;
`

export const VideoCall = () => {
  const hmsActions = useHMSActions()
  const isConnected = useHMSStore(selectIsConnectedToRoom)

  const config = {
    userName: 'SH',
    authToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjM4OTY2NjYxOTVhZDE0YmRjZDZlZjFmIiwicm9vbV9pZCI6IjYzODk2OGQwYWVlNTQ2MjVkYTY0OWEzOCIsInVzZXJfaWQiOiIwMDAxIiwicm9sZSI6InRlYWNoZXIiLCJqdGkiOiI1NmNhZmYxNC1jZjhmLTRmNzUtYTYxMy03MGRiOGIwY2JiOGIiLCJ0eXBlIjoiYXBwIiwidmVyc2lvbiI6MiwiZXhwIjoxNjc1OTQ4MTI0fQ.pE9dyd4MPtuHtKAuLALvbsqyY-9S_D6JE9LjetbG-yE', // client-side token generated from your token service
    settings: {
      isAudioMuted: true,
      isVideoMuted: false,
    },
    metaData: JSON.stringify({ city: 'Da Nang' }),
    rememberDeviceSelection: true,
  }

  const join = async () => {
    await hmsActions.join(config)
  }

  const leave = async () => {
    await hmsActions.leave()
  }

  return (
    <Container>
      <Conference />
      <ConnectionState />

      {isConnected ? (
        <Button onClick={leave}>
          <ButtonText size="large" weight="normal">
            Leave
          </ButtonText>
        </Button>
      ) : (
        <Button onClick={join}>
          <ButtonText size="large" weight="normal">
            Join
          </ButtonText>
        </Button>
      )}
    </Container>
  )
}
