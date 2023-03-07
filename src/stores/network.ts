import { Room } from 'colyseus.js'
import { create } from 'zustand'

type NetworkState = {
  roomInstance: Room | null
  setRoomInstance: (instance: any) => void
}

export const useNetworkStore = create<NetworkState>((set) => ({
  roomInstance: null,
  setRoomInstance: (instance: Room) => set(() => ({ roomInstance: instance })),
}))
