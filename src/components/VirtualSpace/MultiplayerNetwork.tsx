// @ts-nocheck

import { memo, useEffect } from 'react'

import { MESSAGES } from '@/libs/constants'
import { Member, Message, useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

export const MultiplayerNetwork = memo(() => {
  const room = useNetworkStore((state) => state.roomInstance)
  const [
    setMainMember,
    addOtherMembers,
    removeOtherMembers,
    updateOtherMembers,
    updateActionOtherMember,
    updateAvatarOtherMember,
  ] = useMemberStore((state) => [
    state.setMainMember,
    state.addOtherMembers,
    state.removeOtherMembers,
    state.updateOtherMembers,
    state.updateActionOtherMember,
    state.updateAvatarOtherMember,
  ])
  const addWhiteBoardMember = useVirtualSpaceStore((state) => state.addWhiteBoardMember)
  const removeWhiteBoardMember = useVirtualSpaceStore((state) => state.removeWhiteBoardMember)
  const [addMessage] = useVirtualSpaceStore((state) => [state.addMessage])

  useEffect(() => {
    if (room)
      try {
        room.state.members.onAdd = (member: Member, sessionId: string) => {
          if (sessionId === room.sessionId) {
            setMainMember({
              id: member.id,
              peerId: member.peerId,
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
              action: member.action,
            })
          } else {
            console.log(member)
            addOtherMembers(sessionId, {
              id: member.id,
              peerId: member.peerId,
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
              action: member.action,
              avatar: member.user.avatar,
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
              updateAvatarOtherMember(sessionId, member.user.avatar)
            }
          }

          room.state.members.onRemove = (_, sessionId: string) => {
            removeOtherMembers(sessionId)
          }

          room.state.messages.onAdd = (message: Message) => {
            addMessage(message)
          }

          room?.onMessage(MESSAGES.WHITEBOARD.JOIN, ({ member }) => {
            addWhiteBoardMember(member)
          })

          room?.onMessage(MESSAGES.WHITEBOARD.LEAVE, ({ member }) => {
            removeWhiteBoardMember(member)
          })
        }
      } catch (error) {
        throw Error('Multiplayer Error', error)
      }
  }, [room])

  return null
})
