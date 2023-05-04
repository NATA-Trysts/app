// @ts-nocheck

import { Client, Room } from 'colyseus.js'
import { useEffect } from 'react'

import { Member, Message, useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

const MULTIPLAYER_SERVICE_ENDPOINT = 'wss://multiplayer.trysts.io'
const WORLD_NAME = 'trysts'

export const Network = (props: { spaceId: string | undefined }) => {
  const setRoomInstance = useNetworkStore((state) => state.setRoomInstance)
  const [setMainMember, addOtherMembers, removeOtherMembers, updateOtherMembers, updateActionOtherMember] =
    useMemberStore((state) => [
      state.setMainMember,
      state.addOtherMembers,
      state.removeOtherMembers,
      state.updateOtherMembers,
      state.updateActionOtherMember,
    ])

  const [addMessage] = useVirtualSpaceStore((state) => [state.addMessage])

  useEffect(() => {
    let room: typeof Room = null

    const handler = async () => {
      if (!props.spaceId) return

      const client = new Client(MULTIPLAYER_SERVICE_ENDPOINT)

      if (!client) throw Error('Client not connected')

      try {
        try {
          room = await client.joinById(props.spaceId, {})
        } catch (error) {
          if (error.message === `room "${props.spaceId}" not found`) {
            try {
              room = await client.create(WORLD_NAME, {
                spaceId: props.spaceId,
              })
            } catch (error) {
              throw Error('Join room failed!')
            }
          }
        }

        room.state.members.onAdd = (member: Member, sessionId: string) => {
          if (sessionId === room.sessionId) {
            setMainMember({
              id: member.id,
              position: {
                x: member.position.x,
                y: member.position.y,
                z: member.position.z,
              },
              quaternion: {
                x: member.quaternion.x,
                y: member.quaternion.y,
                z: member.quaternion.z,
                w: member.quaternion.w,
              },
              action: '',
            })
          } else {
            addOtherMembers(sessionId, {
              id: member.id,
              position: {
                x: member.position.x,
                y: member.position.y,
                z: member.position.z,
              },
              quaternion: {
                x: member.quaternion.x,
                y: member.quaternion.y,
                z: member.quaternion.z,
                w: member.quaternion.w,
              },
              action: '',
            })
          }

          member.onChange = function () {
            if (sessionId !== room.sessionId) {
              updateOtherMembers(
                sessionId,
                {
                  x: member.position.x as number,
                  y: member.position.y as number,
                  z: member.position.z as number,
                },
                {
                  x: member.quaternion.x as number,
                  y: member.quaternion.y as number,
                  z: member.quaternion.z as number,
                  w: member.quaternion.w as number,
                },
              )
              updateActionOtherMember(sessionId, member.action)
            }
          }
        }

        room.state.members.onRemove = (_, sessionId: string) => {
          removeOtherMembers(sessionId)
        }

        room.state.messages.onAdd = (message: Message) => {
          addMessage(message)
        }

        setRoomInstance(room)
      } catch (e) {
        throw Error('Join room failed!')
      }
    }

    handler()

    return () => {
      room?.leave()
    }
  }, [])

  return null
}
