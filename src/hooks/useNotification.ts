import { NotificationType } from '@/libs/constants'
import { useNotificationStore } from '@/stores/notification'

const useNotification = () => {
  const [notifications, setNotifications] = useNotificationStore((state) => [
    state.notifications,
    state.setNotifications,
  ])

  const addNotification = (type: NotificationType, message: string) => {
    const newNotifications = new Map(notifications)
    const id = window.crypto.getRandomValues(new Uint32Array(1))[0]
    const timestamp = Date.now()

    newNotifications.set(id, { id, type, message, timestamp })

    setNotifications(newNotifications)
  }

  return { addNotification }
}

export { useNotification }
