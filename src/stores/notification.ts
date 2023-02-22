import { create } from 'zustand'

import { NotificationType } from '@/libs/constants'

type Notification = {
  id: number
  type: NotificationType
  message: string
  timestamp: number
}

type NotificationState = {
  notifications: Map<number, Notification>
  setNotifications: (notifications: Map<number, Notification>) => void
}

export const useNotificationStore = create<NotificationState>()((set) => ({
  notifications: new Map(),
  setNotifications: (notifications: Map<number, Notification>) => set(() => ({ notifications })),
}))
