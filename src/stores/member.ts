import produce from 'immer'
import { omit } from 'lodash-es'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Member = {
  id: string
  peerId: string
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

export type ModelMaterial = {
  type: 'color' | 'texture' | 'shader'
  value: string
}

export type AvatarModel = {
  id: string
  material: ModelMaterial | null
}

export type AvatarAccessoryModel = {
  hat: AvatarModel
}

export type Avatar = {
  skin: AvatarModel[]
  hair: AvatarModel[]
  shoe: AvatarModel[]
  upper: AvatarModel[]
  lower: AvatarModel[]
  accessory: AvatarAccessoryModel
  image: string
}

export type User = {
  _id?: string
  username: string
  handler: string
  email?: string
  avatar: Avatar
}

type OtherMember<T> = {
  [id: string]: T
}

export type NearestMember = Omit<Member, 'position' | 'quaternion'>

type MemberState = {
  user: User
  setUser: (user: User) => void
  // Use for character multiplayer
  // TODO: refactor - combine to user
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

  mainMemberAnimation: [string, boolean]
  setMainMemberAnimation: (mainMemberAnimation: [string, boolean]) => void
}

export const useMemberStore = create<MemberState>()(
  persist(
    (set) => ({
      user: {
        username: 'Random Name',
        handler: 'randomname#1234',
        avatar: {
          skin: [
            {
              id: 'skin.001.001',
              material: {
                type: 'color',
                value: JSON.stringify({ color: '#ff00ff', roughness: 1, metalness: 0 }),
              },
            },
          ],
          hair: [
            {
              id: 'hair.001.001',
              material: {
                type: 'color',
                value: JSON.stringify({ color: '#ff00ff', roughness: 1, metalness: 0 }),
              },
            },
          ],
          shoe: [
            {
              id: 'shoe.001.001',
              material: {
                type: 'color',
                value: JSON.stringify({ color: '#ff00ff', roughness: 1, metalness: 0 }),
              },
            },
          ],
          upper: [
            {
              id: 'upper.001.001',
              material: {
                type: 'color',
                value: JSON.stringify({ color: '#ff00ff', roughness: 1, metalness: 0 }),
              },
            },
          ],
          lower: [
            {
              id: 'lower.001.001',
              material: {
                type: 'color',
                value: JSON.stringify({ color: '#ff00ff', roughness: 1, metalness: 0 }),
              },
            },
          ],
          accessory: {
            hat: {
              id: 'accessory.001.001',
              material: {
                type: 'color',
                value: JSON.stringify({ color: '#ff00ff', roughness: 1, metalness: 0 }),
              },
            },
          },
          tattoo: {
            id: 'tattoo.001.001',
            material: {
              type: 'texture',
              value: '/textures/t.tattoo.001.001.png',
            },
          },
          image: 'https://i.pravatar.cc/500',
        },
      },
      setUser: (user: User) => set(() => ({ user })),

      mainMember: null,
      setMainMember: (member: Member) => set(() => ({ mainMember: member })),

      otherMembers: {},
      addOtherMembers: (sessionId, member) =>
        set(
          produce((state: MemberState) => {
            state.otherMembers[sessionId] = member
          }),
        ),
      removeOtherMembers: (sessionId: string) =>
        set((state) => ({ otherMembers: omit(state.otherMembers, [sessionId]) })),
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

      mainMemberAnimation: ['idle.000', false],
      setMainMemberAnimation: (mainMemberAnimation: [string, boolean]) => set(() => ({ mainMemberAnimation })),
    }),
    {
      name: 'member-storage',
      partialize: (state) => ({ user: state.user }),
    },
  ),
)
