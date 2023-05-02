// @ts-nocheck

import { memo, useEffect } from 'react'

import { Member, Message, useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

export const MultiplayerNetwork = memo(() => {
  const room = useNetworkStore((state) => state.roomInstance)
  const [
    setMainMember,
    addOtherMembers,
    removeOtherMembers,
    updateOtherMembers,
    updateActionOtherMember,
    removeNearestMemberId,
    updateAvatarOtherMember,
  ] = useMemberStore((state) => [
    state.setMainMember,
    state.addOtherMembers,
    state.removeOtherMembers,
    state.updateOtherMembers,
    state.updateActionOtherMember,
    state.removeNearestMemberId,
    state.updateAvatarOtherMember,
  ])

  const [setHostWhiteBoardOpen, addWhiteBoard, removeWhiteBoard, addWhiteBoardMember, removeWhiteBoardMember] =
    useVirtualSpaceStore((state) => [
      state.setHostWhiteBoardOpen,
      state.addWhiteBoard,
      state.removeWhiteBoard,
      state.addWhiteBoardMember,
      state.removeWhiteBoardMember,
    ])

  const [addMessage] = useVirtualSpaceStore((state) => [state.addMessage])

  useEffect(() => {
    if (room)
      try {
        room.state.members.onAdd = (member: Member, sessionId: string) => {
          console.log('add', member.id)

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
              isHost: member.isHost,
              handler: member.user.handler,
              username: member.user.username,
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
              isHost: member.isHost,
              avatar: member.user.avatar,
              handler: member.user.handler,
              username: member.user.username,
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
        }

        room.state.members.onRemove = (_, sessionId: string) => {
          removeOtherMembers(sessionId)
          removeNearestMemberId(sessionId)
        }

        room.state.messages.onAdd = (message: Message) => {
          addMessage(message)
        }

        room.state.whiteboards.onAdd = (whiteboard) => {
          addWhiteBoard({ id: whiteboard.id, members: [] })

          whiteboard.members.onAdd = (memberId) => {
            addWhiteBoardMember(whiteboard.id, memberId)
          }

          whiteboard.members.onRemove = (memberId) => {
            removeWhiteBoardMember(whiteboard.id, memberId)
          }
        }

        room.state.whiteboards.onRemove = (_, whiteboardId) => {
          removeWhiteBoard(whiteboardId)
        }

        room.state.listen('isHostWhiteBoardOpen', (isOpen: boolean) => {
          console.log('isHostWhiteBoardOpen_change', isOpen)

          setHostWhiteBoardOpen(isOpen)
        })
      } catch (error) {
        throw Error('Multiplayer Error', error)
      }
  }, [room])

  return null
})
