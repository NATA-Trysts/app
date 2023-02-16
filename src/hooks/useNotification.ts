import { NotificationType } from '@/libs/constants'
import { useNotificationStore } from '@/stores/notification'

const useAddNotification = () => {
  const [notifications, setNotifications] = useNotificationStore((state) => [
    state.notifications,
    state.setNotifications,
  ])

  const addNotification = (type: NotificationType, message: string) => {
    const newNotifications = new Map(notifications)
    const id = Math.random()

    newNotifications.set(id, { id, type, message })
    if (newNotifications.size > 3) {
      newNotifications.delete(newNotifications.keys().next().value)
    }
    setNotifications(newNotifications)
  }

  return addNotification
}

export { useAddNotification }
