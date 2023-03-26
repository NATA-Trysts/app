import { Room } from 'colyseus.js'
import { create } from 'zustand'
import {} from 'zustand/middleware'

type NetworkState = {
  roomInstance: Room | null
  setRoomInstance: (instance: any) => void

  isJoinedHMS: boolean
  setIsJoinedHMS: (isJoinedHMS: boolean) => void
}

export const useNetworkStore = create<NetworkState>((set) => ({
  roomInstance: null,
  setRoomInstance: (instance: Room) => set(() => ({ roomInstance: instance })),

  isJoinedHMS: false,
  setIsJoinedHMS: (isJoinedHMS: boolean) => set({ isJoinedHMS }),
}))
