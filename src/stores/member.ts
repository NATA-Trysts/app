import produce from 'immer'
import { omit } from 'lodash-es'
import { create } from 'zustand'

export type Member = {
  id: string
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

type OtherMember = {
  [id: string]: Member
}

type MemberState = {
  mainMemberPublicKey: string
  setMainMemberPublicKey: (publicKey: string) => void
  mainMember: Member | null
  setMainMember: (member: Member) => void
  otherMembers: OtherMember
  addOtherMembers: (sessionId: string, member: Member) => void
  removeOtherMembers: (sessionId: string) => void
  updateOtherMembers: (
    sessionId: string,
    position: { x: number; y: number; z: number },
    quaternion: { x: number; y: number; z: number; w: number },
  ) => void
  updateActionOtherMember: (sessionId: string, action: string) => void
}

export const useMemberStore = create<MemberState>((set) => ({
  mainMemberPublicKey: '',
  setMainMemberPublicKey: (publicKey) => set(() => ({ mainMemberPublicKey: publicKey })),

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
}))
