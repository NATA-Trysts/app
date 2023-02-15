import { NotificationStack } from '@/components/Notification'
import { NotificationType } from '@/libs/constants'
import { useNotificationStore } from '@/stores/notification'

const TestNotification = () => {
  const [notifications, setNotifications] = useNotificationStore((state) => [
    state.notifications,
    state.setNotifications,
  ])

  const handleAddNotification = (type: NotificationType, message: string) => {
    const newNotifications = new Map(notifications)
    const id = Math.random()

    newNotifications.set(id, { id, type, message })
    if (newNotifications.size > 3) {
      newNotifications.delete(newNotifications.keys().next().value)
    }
    setNotifications(newNotifications)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '400px' }}>
      <button
        style={{ margin: '20px', padding: '10px' }}
        onClick={() => handleAddNotification('notification', 'Notification')}
      >
        Notification
      </button>
      <button style={{ margin: '20px', padding: '10px' }} onClick={() => handleAddNotification('warning', 'Warning')}>
        Warning
      </button>
      <button style={{ margin: '20px', padding: '10px' }} onClick={() => handleAddNotification('error', 'Error')}>
        Error
      </button>
      <NotificationStack />
    </div>
  )
}

export default TestNotification
