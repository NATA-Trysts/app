import produce from 'immer'
import { create } from 'zustand'

import { CustomColor } from '@/components/Commons'
import { SpaceTheme } from '@/models/Space'

type UltilityType = 'chat' | 'member' | 'setting' | null
export type VideoLayoutType = 'above-head' | 'slide'

export type Message = {
  id: string
  sessionId: string
  name: string
  avatar: string
  timestamp: number
  content: string
}

type ChatMessage = {
  [id: string]: Message
}

export type WhiteBoard = {
  id: string
  members: string[]
}

export type SpaceModelTemp = {
  key: number
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
}

export type ViewScreenShareType = { peerId?: string; isOpenScreenShare: boolean }
export type FurnitureScreenShare = { furnitureIframeId: string; screenSharePeerId: string }

type VirtualSpaceState = {
  spaceId: string
  setSpaceId: (spaceId: string) => void
  spaceName: string
  setSpaceName: (spaceName: string) => void
  spaceModels: SpaceModelTemp[]
  setSpaceModels: (spaceModels: SpaceModelTemp[]) => void
  spaceTheme: SpaceTheme
  setSpaceTheme: (theme: SpaceTheme) => void
  spaceBackgroundMusic: string
  setSpaceBackgroundMusic: (spaceBackgroundMusic: string) => void
  selectedUltility: UltilityType
  setSelectedUltility: (selectedUltility: UltilityType) => void
  customColor: CustomColor
  setCustomColor: (customColor: CustomColor) => void
  canControlCharacter: boolean
  setCanControlCharacter: (canControlCharacter: boolean) => void
  chatMessages: ChatMessage
  addMessage: (message: Message) => void
  quality: string
  setQuality: (quality: string) => void
  isPlayingMusic: boolean
  setIsPlayingMusic: (isPlayingMusic: boolean) => void
  videoLayout: VideoLayoutType
  setVideoLayout: (videoLayout: VideoLayoutType) => void

  authToken: string
  setAuthToken: (authToken: string) => void

  isEditAvatar: boolean
  setIsEditAvatar: (isEditAvatar: boolean) => void

  isFirstTime: boolean
  setIsFirstTime: (isFirstTime: boolean) => void

  interactable: boolean
  setInteractable: (interactable: boolean) => void

  intersectId: string | null
  setIntersectId: (intersectId: string) => void

  isHostWhiteBoardOpen: boolean
  setHostWhiteBoardOpen: (open: boolean) => void

  whiteboards: Map<string, WhiteBoard>
  addWhiteBoard: (whiteboard: WhiteBoard) => void
  removeWhiteBoard: (whiteboardId: string) => void
  addWhiteBoardMember: (id: string, memberId: string) => void
  removeWhiteBoardMember: (id: string, memberId: string) => void

  isLoadingSpace: boolean
  setIsLoadingSpace: (isLoadingSpace: boolean) => void

  isLoadingUser: boolean
  setIsLoadingUser: (isLoadingUser: boolean) => void

  isJoiningHMS: boolean
  setIsJoiningHMS: (isJoiningHMS: boolean) => void

  isJoiningMultiplayer: boolean
  setIsJoiningMultiplayer: (isJoiningMultiplayer: boolean) => void

  screenShares: Map<string, FurnitureScreenShare>
  addScreenShare: (screenShare: FurnitureScreenShare) => void
  removeScreenShare: (furnitureIframeId: string) => void

  viewScreenShare: ViewScreenShareType
  openViewScreenShare: (peerId: string) => void
  closeViewScreenShare: () => void
}

export const useVirtualSpaceStore = create<VirtualSpaceState>()((set) => ({
  spaceId: '123',
  setSpaceId: (spaceId) => set(() => ({ spaceId })),

  spaceName: '',
  setSpaceName: (spaceName) => set(() => ({ spaceName })),

  spaceModels: [],
  setSpaceModels: (spaceModels) => set(() => ({ spaceModels })),

  spaceTheme: false,
  setSpaceTheme: (spaceTheme) => set(() => ({ spaceTheme })),

  spaceBackgroundMusic: '',
  setSpaceBackgroundMusic: (spaceBackgroundMusic) => set(() => ({ spaceBackgroundMusic })),

  selectedUltility: null,
  setSelectedUltility: (selectedUltility) => set(() => ({ selectedUltility })),

  customColor: 'blue',
  setCustomColor: (customColor: CustomColor) => set(() => ({ customColor })),

  canControlCharacter: true,
  setCanControlCharacter: (canControlCharacter: boolean) => set(() => ({ canControlCharacter })),

  authToken: '',
  setAuthToken: (authToken: string) => set({ authToken }),

  quality: 'medium',
  setQuality: (quality: string) => set(() => ({ quality })),

  isPlayingMusic: false,
  setIsPlayingMusic: (isPlayingMusic: boolean) => set(() => ({ isPlayingMusic })),

  videoLayout: 'slide',
  setVideoLayout: (videoLayout: VideoLayoutType) => set(() => ({ videoLayout })),

  isEditAvatar: false,
  setIsEditAvatar: (isEditAvatar: boolean) => set({ isEditAvatar, selectedUltility: null }),

  isFirstTime: true,
  setIsFirstTime: (isFirstTime: boolean) => set({ isFirstTime }),

  chatMessages: {},
  addMessage: (message) =>
    set(
      produce((state: VirtualSpaceState) => {
        state.chatMessages[message.id] = message
      }),
    ),

  interactable: false,
  setInteractable: (interactable: boolean) => set({ interactable }),

  intersectId: null,
  setIntersectId: (intersectId: string) => set({ intersectId }),

  isHostWhiteBoardOpen: false,
  setHostWhiteBoardOpen: (isOpen) => set({ isHostWhiteBoardOpen: isOpen }),

  whiteboards: new Map<string, WhiteBoard>(),
  addWhiteBoard: (whiteboard: WhiteBoard) =>
    set(
      produce((state: VirtualSpaceState) => {
        state.whiteboards.set(whiteboard.id, { id: whiteboard.id, members: whiteboard.members })
      }),
    ),
  removeWhiteBoard: (whiteboardId: string) => {
    set(
      produce((state: VirtualSpaceState) => {
        state.whiteboards.delete(whiteboardId)
      }),
    )
  },
  addWhiteBoardMember: (id, memberId) =>
    set(
      produce((state: VirtualSpaceState) => {
        state.whiteboards.get(id)?.members.push(memberId)
      }),
    ),
  removeWhiteBoardMember: (id, memberId) =>
    set(
      produce((state: VirtualSpaceState) => {
        const members = state.whiteboards.get(id)?.members

        members?.splice(members?.indexOf(memberId), 1)
      }),
    ),

  isLoadingSpace: true,
  setIsLoadingSpace: (isLoadingSpace: boolean) => set(() => ({ isLoadingSpace })),

  isLoadingUser: true,
  setIsLoadingUser: (isLoadingUser: boolean) => set(() => ({ isLoadingUser })),

  isJoiningHMS: true,
  setIsJoiningHMS: (isJoiningHMS: boolean) => set(() => ({ isJoiningHMS })),

  isJoiningMultiplayer: true,
  setIsJoiningMultiplayer: (isJoiningMultiplayer: boolean) => set(() => ({ isJoiningMultiplayer })),

  screenShares: new Map<string, FurnitureScreenShare>(),
  addScreenShare: (screenShare) =>
    set(
      produce((state: VirtualSpaceState) => {
        console.log('addScreenShare ', screenShare)

        const r = state.screenShares.set(screenShare.furnitureIframeId, screenShare)

        console.log('after add', r)
      }),
    ),
  removeScreenShare: (furnitureIframeId) =>
    set(
      produce((state: VirtualSpaceState) => {
        state.screenShares.delete(furnitureIframeId)
      }),
    ),

  viewScreenShare: { isOpenScreenShare: false, peerId: undefined },
  openViewScreenShare: (peerId) => set(() => ({ viewScreenShare: { isOpenScreenShare: true, peerId } })),
  closeViewScreenShare: () =>
    set(
      produce((state: VirtualSpaceState) => {
        if (state.viewScreenShare.isOpenScreenShare)
          state.viewScreenShare = { isOpenScreenShare: false, peerId: undefined }
      }),
    ),
}))
