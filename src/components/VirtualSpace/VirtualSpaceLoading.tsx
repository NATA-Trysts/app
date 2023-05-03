import { selectIsConnectedToRoom, selectLocalPeerID, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import axios, { AxiosResponse, CancelTokenSource } from 'axios'
import { Client, Room } from 'colyseus.js'
import { animate, motion } from 'framer-motion'
import { omit } from 'lodash-es'
import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import axiosConfigured from '@/api/axios'
import { useAuth, useAxiosPrivate } from '@/hooks'
import { generateHMSConfig } from '@/libs/utils'
import { Space } from '@/models/Space'
import {
  CategorySelectedItemId,
  useEditCharacterStore,
  useMemberStore,
  useNetworkStore,
  User,
  useVirtualSpaceStore,
} from '@/stores'

const Container = styled(motion.div)<{ zIndex: number }>`
  width: 100vw;
  height: 100vh;
  background: #090118;
  position: absolute;
  top: 0;
  /* z-index: ${(props) => props.zIndex}; */
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  user-select: none;
  overflow: hidden;
  pointer-events: none;
`

const Counter = styled(motion.span)`
  font-size: 200px;
  color: white;
  font-weight: 600;
  font-family: var(--font-family);
`

const Text = styled(motion.span)`
  color: #afacac;
  font-size: 20px;
  font-weight: 500;
`

const Wrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PasswordContainer = styled(motion.form)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 100px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  z-index: 12;
`

const PasswordInputContainer = styled.div`
  width: 232px;
  height: 47px;
  background: #121316;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  z-index: 1;
`

const PasswordInputWrapper = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const PasswordInput = styled.input`
  width: 100%;
  height: 100%;
  background: #212225;
  border-radius: 8px;
  outline-color: transparent;
  border: none;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  outline: none;
  padding: 0 8px;
`

const PasswordSubmitButton = styled.button`
  width: 80px;
  height: 32px;
  background: #121316;
  border: none;
  transition: background 0.3s ease;
  cursor: pointer;
  pointer-events: auto;
  border-radius: 12px;

  :hover {
    background: #17181b;
  }
`

type VirtualSpaceLoadingProps = {
  children: ReactNode
}

const MULTIPLAYER_SERVICE_ENDPOINT = import.meta.env.VITE_MULTIPLAYER_SERVICE_ENDPOINT
const WORLD_NAME = import.meta.env.VITE_WORLD_NAME

type PrepareState = 'info-loaded' | 'need-verify' | 'hms.joined' | 'multiplayer.joined' | ''

export const VirtualSpaceLoading = (props: VirtualSpaceLoadingProps) => {
  const { spaceId } = useParams()
  const hmsActions = useHMSActions()
  const setCategorySelectedFromApi = useEditCharacterStore((state) => state.setCategorySelectedFromApi)
  const setUser = useMemberStore((state) => state.setUser)
  const localPeerId = useHMSStore(selectLocalPeerID)

  const [isPrepare, setIsPrepare] = useState(false)
  const [prepareStatus, setPrepareStatus] = useState('prepare process')
  const [prepareError, setPrepareError] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useAuth()

  const [setSpaceName, setSpaceModels, setSpaceTheme, setSpaceBackgroundMusic] = useVirtualSpaceStore((state) => [
    state.setSpaceName,
    state.setSpaceModels,
    state.setSpaceTheme,
    state.setSpaceBackgroundMusic,
  ])
  const [prepareState, setPrepareState] = useState<PrepareState>('')

  const [setRoomInstance] = useNetworkStore((state) => [state.setRoomInstance])

  const axiosPrivate = useAxiosPrivate()
  const isConnectedToRoom = useHMSStore(selectIsConnectedToRoom)

  const [roomId, setRoomId] = useState('')
  const isHost = useRef(false)
  const [localUser, setLocalUser] = useState<User>()

  const counterRef = useRef<HTMLSpanElement>(null)
  const [counterValue, setCounterValue] = useState({ min: 0, max: 0 })

  useEffect(() => {
    const cancelTokenSource: CancelTokenSource | null = axios.CancelToken.source()

    const getUserAndSpace = async () => {
      let user: User | null = null

      try {
        // Get Space && Get User
        // -> Get Space
        const getSpaceByCodeRequest: Promise<AxiosResponse<Space, any>> = axiosConfigured.get(`/spaces/code/${spaceId}`)

        const getUserRequest: Promise<AxiosResponse<User, any>> | undefined = auth?.accessToken
          ? axiosPrivate('/user', {
              cancelToken: cancelTokenSource.token,
            })
          : undefined

        const responses: (Promise<AxiosResponse<User | Space, any>> | undefined)[] = [
          getUserRequest,
          getSpaceByCodeRequest,
        ]

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const results = await Promise.allSettled(responses)

        // User Response
        setPrepareStatus('Get User')

        if (results[0].status === 'fulfilled' && results[0].value) {
          user = results[0].value.data as User
          setLocalUser(user)
          const avatarFromApi = omit(user.avatar, 'image')

          setCategorySelectedFromApi(new Map(Object.entries(avatarFromApi)) as CategorySelectedItemId)
          setUser(user)
        }
        if (results[0].status === 'rejected') {
          setPrepareError('Get Me Failed')
        }

        // Space Response
        setPrepareStatus('Get Space')
        if (results[1].status === 'fulfilled' && results[1].value) {
          const space = results[1].value.data as Space
          const password = space.password

          setSpaceName(space.name)
          setSpaceModels(space.models || [])
          setSpaceBackgroundMusic(space.backgroundMusic || '')
          setSpaceTheme(space.theme)
          setRoomId(space.hmsRoomId)
          isHost.current = space.author === user?._id

          if (password) {
            setPrepareStatus('This Virtual Space require password!')
            setPrepareState('need-verify')
          } else {
            setPrepareState('info-loaded')
          }
        }

        // setPrepareState('info-loaded')
        setCounterValue({ min: counterValue.max, max: 30 })
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
      setPrepareStatus('Preparing the best video call experience')

      const hmsRequest = await axios.post(import.meta.env.VITE_HMS_ENDPOINT, {
        // eslint-disable-next-line camelcase
        room_id: roomId,
        // TODO: change based on role
        role: import.meta.env.VITE_HMS_ROLE_PARTICIPANT,
        // eslint-disable-next-line camelcase
        user_id: localUser?._id,
      })

      const hmsConfig = generateHMSConfig('Random UN', hmsRequest.data.token, { city: 'Da Nang' })

      try {
        await hmsActions.join(hmsConfig)
        setPrepareState('hms.joined')

        setCounterValue({ min: counterValue.max, max: 50 })
      } catch (error) {
        setPrepareError("Seem like video call got error. We're fixing")
      }
    }

    roomId && prepareState === 'info-loaded' && joinHms()

    window.onunload = () => {
      hmsActions.leave()
    }
  }, [roomId, prepareState])

  useEffect(() => {
    let room: Room | null = null
    const client = new Client(MULTIPLAYER_SERVICE_ENDPOINT)

    if (!client) throw Error('Client not connected')
    const joinMultiplayer = async () => {
      const multiplayerUser = omit(localUser, '_id')

      setPrepareStatus('Get ready! Joining Virtual Space')

      try {
        room = await client.joinById(spaceId ?? 'trysts', {
          peerId: localPeerId,
          isHost: isHost.current,
          user: {
            email: multiplayerUser.email,
            handler: multiplayerUser.handler,
            username: multiplayerUser.username,
            avatar: JSON.stringify(multiplayerUser.avatar),
          },
        })
      } catch (error: any) {
        if (error.message === `room "${spaceId}" not found`) {
          try {
            room = await client.create(WORLD_NAME, {
              spaceId,
              peerId: localPeerId,
              isHost: isHost.current,
              user: {
                email: multiplayerUser.email,
                handler: multiplayerUser.handler,
                username: multiplayerUser.username,
                avatar: JSON.stringify(multiplayerUser.avatar),
              },
            })
          } catch (error: any) {
            setPrepareError('We cannot let you in, the Virtual Space is under-maintenance')
            throw Error('Create room failed!', error)
          }
        } else {
          setPrepareError('We cannot let you in, the Virtual Space is under-maintenance')

          throw Error('Join room failed!', error)
        }
      } finally {
        setIsPrepare(false)
      }

      if (room) {
        setRoomInstance(room)
        setCounterValue({ min: counterValue.max, max: 100 })
      }
    }

    if (isConnectedToRoom && localPeerId && localUser && prepareState === 'hms.joined') joinMultiplayer()

    window.onunload = () => {
      room?.leave()
    }
  }, [prepareState, localUser])

  useEffect(() => {
    animate(counterValue.min, counterValue.max, {
      duration: 2,
      ease: 'easeIn',
      onUpdate: (latest) => {
        if (counterRef.current) counterRef.current.innerText = latest.toFixed(0).toString()
        if (latest === 100) setIsPrepare(true)
      },
    })
  }, [counterValue])

  const handleVerifyPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const result = await axiosConfigured.post(`/spaces/verify`, {
        code: spaceId,
        password,
      })

      if (result.data) {
        setPrepareState('info-loaded')
      }
    } catch (error) {
      setPrepareStatus("Wrong Password. Let's try again")
      console.error(error)
    }
  }

  return (
    <>
      <Container
        animate={{
          opacity: !isPrepare ? 1 : 0,
        }}
        transition={{
          delay: 1,
        }}
        zIndex={!isPrepare ? 10 : -1}
      >
        {prepareState === 'need-verify' && (
          <PasswordContainer
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: 0.15,
                delay: 1.5,
              },
            }}
            onSubmit={(e: FormEvent<HTMLFormElement>) => handleVerifyPassword(e)}
          >
            <PasswordInputContainer>
              <PasswordInputWrapper>
                <PasswordInput
                  type="text"
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value)
                  }}
                />
              </PasswordInputWrapper>
            </PasswordInputContainer>
            <PasswordSubmitButton type="submit" value="Join">
              Join
            </PasswordSubmitButton>
          </PasswordContainer>
        )}

        <Wrapper>
          <Counter
            ref={counterRef}
            animate={{
              y: !isPrepare ? 0 : 250,
              opacity: !isPrepare ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.5,
            }}
          >
            00
          </Counter>
          {(!isPrepare || prepareError) && (
            <Text
              animate={{
                y: !isPrepare ? 0 : 50,
              }}
            >
              {prepareStatus} {prepareError}
            </Text>
          )}
        </Wrapper>
      </Container>
      {prepareState === ''}
      {props.children}
    </>
  )
}
