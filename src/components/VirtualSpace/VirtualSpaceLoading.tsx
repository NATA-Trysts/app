// @ts-nocheck

import { selectIsConnectedToRoom, selectLocalPeerID, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import axios, { AxiosResponse, CancelTokenSource } from 'axios'
import { Client, Room } from 'colyseus.js'
import { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axiosConfigured from '@/api/axios'
import { useAuth, useAxiosPrivate } from '@/hooks'
import { generateHMSConfig } from '@/libs/utils'
import {
  CategorySelectedItemId,
  useEditCharacterStore,
  useMemberStore,
  useNetworkStore,
  User,
  useVirtualSpaceStore,
} from '@/stores'

type VirtualSpaceLoadingProps = {
  children: ReactNode
}

const MULTIPLAYER_SERVICE_ENDPOINT = import.meta.env.VITE_MULTIPLAYER_SERVICE_ENDPOINT
const WORLD_NAME = import.meta.env.VITE_WORLD_NAME

type PrepareState = 'info-loaded' | 'need-verify' | 'hms.joined' | 'multiplayer.joined'

export const VirtualSpaceLoading = (props: VirtualSpaceLoadingProps) => {
  const { spaceId } = useParams()
  const hmsActions = useHMSActions()
  const setCategorySelectedFromApi = useEditCharacterStore((state) => state.setCategorySelectedFromApi)
  const setUser = useMemberStore((state) => state.setUser)
  const localPeerId = useHMSStore(selectLocalPeerID)

  const [isPrepare, setIsPrepare] = useState(true)
  const [prepareStatus, setPrepareStatus] = useState('prepare process')
  const [prepareError, setPrepareError] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useAuth()

  const [setSpaceName] = useVirtualSpaceStore((state) => [state.setSpaceName])
  const [prepareState, setPrepareState] = useState<PrepareState>('')

  const [setRoomInstance] = useNetworkStore((state) => [state.setRoomInstance])

  const axiosPrivate = useAxiosPrivate()
  const isConnectedToRoom = useHMSStore(selectIsConnectedToRoom)

  const [roomId, setRoomId] = useState()

  useEffect(() => {
    const cancelTokenSource: CancelTokenSource | null = axios.CancelToken.source()

    const getUserAndSpace = async () => {
      let user: User | null = null

      try {
        // Get Space && Get User
        // -> Get Space
        const getSpaceByCodeRequest: AxiosResponse<Space, any> = await axiosConfigured.get(`/spaces/code/${spaceId}`)

        const getUserRequest: AxiosResponse<User, any> =
          auth?.accessToken &&
          axiosPrivate('/user', {
            cancelToken: cancelTokenSource.token,
          })

        const responses: AxiosResponse<User, Space, any>[] = [getUserRequest, getSpaceByCodeRequest]

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const results = await Promise.allSettled(responses)

        // User Response
        setPrepareStatus('Get User')

        if (results[0].status === 'fulfilled') {
          user = results[0].value.data
          const avatarFromApi = user.avatar

          delete (avatarFromApi as any).image

          setCategorySelectedFromApi(new Map(Object.entries(avatarFromApi)) as CategorySelectedItemId)
          setUser(user)
        }
        if (results[0].status === 'rejected') {
          setPrepareError('Get Me Failed')
        }

        // Space Response
        setPrepareStatus('Get Space')
        if (results[1].status === 'fulfilled') {
          const password = results[1].value.data.password

          setSpaceName(results[1].value.data.name)
          setRoomId(results[1].value.data.hmsRoomId)

          if (password) {
            setPrepareState('need-verify')
          } else {
            setPrepareState('info-loaded')
          }
        }
      } catch (error) {
        console.error(error)
        setPrepareError('Prepare Failed')
      }
    }

    getUserAndSpace()
  }, [spaceId])

  useEffect(() => {
    // Join HMS
    const joinHms = async () => {
      setPrepareStatus('Joining HMS')

      const hmsRequest = await axios.post(import.meta.env.VITE_HMS_ENDPOINT, {
        // eslint-disable-next-line camelcase
        room_id: roomId,
        // TODO: change based on role
        role: import.meta.env.VITE_HMS_ROLE_PARTICIPANT,
        // eslint-disable-next-line camelcase
        user_id: 'hey_sh',
      })

      console.log(hmsRequest)

      const hmsConfig = generateHMSConfig('Random UN', hmsRequest.data.token, { city: 'Da Nang' })

      try {
        await hmsActions.join(hmsConfig)
        setPrepareState('hms.joined')
      } catch (error) {
        setPrepareError('Join HMS Failed')
      }
    }

    roomId && prepareState === 'info-loaded' && joinHms()

    window.onunload = () => {
      hmsActions.leave()
    }
  }, [roomId, prepareState])

  useEffect(() => {
    let room: typeof Room | null = null
    const client = new Client(MULTIPLAYER_SERVICE_ENDPOINT)

    if (!client) throw Error('Client not connected')
    const joinMultiplayer = async () => {
      setPrepareStatus('Joining Multiplayer')
      try {
        room = await client.joinById(spaceId, {
          peerId: localPeerId,
        })
      } catch (error) {
        if (error.message === `room "${spaceId}" not found`) {
          try {
            room = await client.create(WORLD_NAME, {
              spaceId,
              peerId: localPeerId,
            })
          } catch (error) {
            setPrepareError('Create Multiplayer Failed')
            throw Error('Create room failed!', error)
          }
        } else {
          setPrepareError('Joining Multiplayer Failed')
          throw Error('Join room failed!', error)
        }
      } finally {
        setIsPrepare(false)
      }

      room && setRoomInstance(room)
    }

    if (isConnectedToRoom && localPeerId && prepareState === 'hms.joined') joinMultiplayer()

    window.onunload = () => {
      room?.leave()
    }
  }, [prepareState])

  const handleVerifyPassword = async () => {
    try {
      const result = await axiosConfigured.post(`/spaces/verify`, {
        code: spaceId,
        password,
      })

      if (result.data) {
        setPrepareState('info-loaded')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {prepareState === 'need-verify' && (
        <div>
          <h1>Need Verify</h1>
          <input
            type="text"
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value)
            }}
          />
          <button onClick={handleVerifyPassword}>Join</button>
        </div>
      )}
      {isPrepare && <span>{prepareStatus}</span>}
      {prepareError && <span>{prepareError}</span>}
      {!isPrepare && !prepareError && props.children}
    </>
  )
}
