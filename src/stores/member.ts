import produce from 'immer'
import { omit } from 'lodash-es'
import { create } from 'zustand'

import { User } from './user'

export type Member = {
  id: string
  peerId: string
  user: User
  position: {
    x: number
    y: number
    z: number
  }
  quaternion: {
    x: number
    y: number
    z: number
    w: number
  }
  action: string
}

type OtherMember<T> = {
  [id: string]: T
}

export type NearestMember = Omit<Member, 'position' | 'quaternion'>

type MemberState = {
  mainMemberId: string
  setMainMemberId: (mainMemberId: string) => void
  mainMember: Member | null
  setMainMember: (member: Member) => void
  otherMembers: OtherMember<Member>
  addOtherMembers: (sessionId: string, member: Member) => void
  removeOtherMembers: (sessionId: string) => void
  updateOtherMembers: (
    sessionId: string,
    position: { x: number; y: number; z: number },
    quaternion: { x: number; y: number; z: number; w: number },
  ) => void
  updateActionOtherMember: (sessionId: string, action: string) => void
  nearestMembers: OtherMember<NearestMember>
  addNearestMember: (sessionId: string, nearestMember: NearestMember) => void
  removeNearestMember: (sessionId: string) => void
  setMemberName: (sessionId: string, name: string) => void
}

export const useMemberStore = create<MemberState>((set) => ({
  mainMemberId: '',
  setMainMemberId: (mainMemberId: string) => set({ mainMemberId }),

  mainMember: null,
  setMainMember: (member: Member) => set(() => ({ mainMember: member })),

  otherMembers: {},
  addOtherMembers: (sessionId, member) =>
    set(
      produce((state: MemberState) => {
        state.otherMembers[sessionId] = member
      }),
    ),
  removeOtherMembers: (sessionId: string) => set((state) => ({ otherMembers: omit(state.otherMembers, [sessionId]) })),
  updateOtherMembers: (sessionId, position, quaternion) =>
    set(
      produce((state: MemberState) => {
        state.otherMembers[sessionId].position = { x: position.x, y: position.y, z: position.z }
        state.otherMembers[sessionId].quaternion = quaternion
      }),
    ),
  updateActionOtherMember: (sessionId, action) =>
    set(
      produce((state: MemberState) => {
        state.otherMembers[sessionId].action = action
      }),
    ),

  nearestMembers: {},
  addNearestMember: (sessionId: string, nearestMember: NearestMember) =>
    set(
      produce((state: MemberState) => {
        state.nearestMembers[sessionId] = nearestMember
      }),
    ),
  removeNearestMember: (sessionId: string) =>
    set((state) => ({ nearestMembers: omit(state.nearestMembers, [sessionId]) })),
  setMemberName: (sessionId: string, name: string) => {
    set(
      produce((state: MemberState) => {
        if (sessionId === state.mainMember?.id) state.mainMember.user.name = name
        else state.otherMembers[sessionId].user.name = name
      }),
    )
  },
}))
