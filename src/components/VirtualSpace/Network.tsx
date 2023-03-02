import { Client } from 'colyseus.js'
import { useEffect } from 'react'

import { Member, useMemberStore, useNetworkStore } from '@/stores'

const MULTIPLAYER_SERVICE_ENDPOINT = import.meta.env.VITE_MULTIPLAYER_SERVICE_ENDPOINT
const WORLD_NAME = import.meta.env.VITE_WORLD_NAME

export const Network = () => {
  const setRoomInstance = useNetworkStore((state) => state.setRoomInstance)
  const [setMainMember, addOtherMembers, removeOtherMembers, updateOtherMembers, updateActionOtherMember] =
    useMemberStore((state) => [
      state.setMainMember,
      state.addOtherMembers,
      state.removeOtherMembers,
      state.updateOtherMembers,
      state.updateActionOtherMember,
    ])

  const handler = async () => {
    const client = new Client(MULTIPLAYER_SERVICE_ENDPOINT)

    if (!client) throw Error('Client not connected')

    try {
      const room = await client.joinOrCreate(WORLD_NAME, {})

      console.log('Join ok 👌')

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

      setRoomInstance(room)
    } catch (e) {
      console.error('Join error', e)
    }
  }

  useEffect(() => {
    handler()
  }, [])

  return null
}
