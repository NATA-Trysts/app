// @ts-nocheck

import { selectLocalPeerID, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import axios, { AxiosResponse, CancelTokenSource } from 'axios'
import { Client, Room } from 'colyseus.js'
import { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAuth, useAxiosPrivate } from '@/hooks'
import { generateHMSConfig } from '@/libs/utils'
// import { CategorySelectedItemId, useEditCharacterStore, useMemberStore, User } from '@/stores'

type VirtualSpaceLoadingProps = {
  children: ReactNode
}

const MULTIPLAYER_SERVICE_ENDPOINT = import.meta.env.VITE_MULTIPLAYER_SERVICE_ENDPOINT
const WORLD_NAME = import.meta.env.VITE_WORLD_NAME

export const VirtualSpaceLoading = (props: VirtualSpaceLoadingProps) => {
  const { spaceId } = useParams()
  const hmsActions = useHMSActions()
  // const setCategorySelectedFromApi = useEditCharacterStore((state) => state.setCategorySelectedFromApi)
  // const setUser = useMemberStore((state) => state.setUser)
  const localPeerId = useHMSStore(selectLocalPeerID)

  const [isPrepare, setIsPrepare] = useState(true)
  const [prepareStatus, setPrepareStatus] = useState('prepare process')
  const [prepareError, setPrepareError] = useState('')
  const { auth } = useAuth()

  // const { me } = useGetMe()
  const axiosPrivate = useAxiosPrivate()

  console.log('rerender')

  useEffect(() => {
    const cancelTokenSource: CancelTokenSource | null = axios.CancelToken.source()
    let room: typeof Room = null
    const client = new Client(MULTIPLAYER_SERVICE_ENDPOINT)

    if (!client) throw Error('Client not connected')

    const chainCall = async () => {
      try {
        let user: User
        // Get Space && Get User
        // -> Get Space
        const getUserRequest: AxiosResponse<User, any> =
          auth?.accessToken &&
          axiosPrivate('/user', {
            cancelToken: cancelTokenSource.token,
          })

        const responses: AxiosResponse<User, any>[] = [getUserRequest]

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const results = await Promise.allSettled(responses)

        // User Response
        // setPrepareStatus('Get Userdata')

        // if (results[0].status === 'fulfilled') {
        //   user = results[0].value.data
        //   const avatarFromApi = user.avatar

        //   delete (avatarFromApi as any).image

        //   setCategorySelectedFromApi(new Map(Object.entries(avatarFromApi)) as CategorySelectedItemId)
        //   setUser(user)
        // }
        // if (results[0].status === 'rejected') {
        //   setPrepareError('Get Me Failed')
        // }

        // Space Response
        setPrepareStatus('Get Space data')

        console.log(`Get space ${spaceId}!`)
        const roomId = '642c5157adb93485420bfec8'

        // Join HMS
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
        } catch (error) {
          setPrepareError('Join HMS Failed')
        }

        // Join Multiplayer
        setPrepareStatus('Joining Multiplayer')
        console.log(localPeerId)
        try {
          room = await client.joinById(spaceId, {
            peerId: localPeerId,
            user,
          })
        } catch (error) {
          if (error.message === `room "${spaceId}" not found`) {
            try {
              room = await client.create(WORLD_NAME, {
                spaceId,
                peerId: localPeerId,
                user,
              })
            } catch (error) {
              setPrepareError('Joining Multiplayer Failed')

              throw Error('Join room failed!')
            }
          }
        }
      } catch (error) {
        console.error(error)
        setPrepareError('Prepare Failed')
      } finally {
        setIsPrepare(false)
      }
    }

    chainCall()

    return () => {
      hmsActions.leave()
      room?.leave()
    }
  }, [])

  return (
    <>
      {isPrepare && <span>{prepareStatus}</span>}
      {prepareError && <span>{prepareError}</span>}
      {props.children}
    </>
  )
}
