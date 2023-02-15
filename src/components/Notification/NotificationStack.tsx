import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { useNotificationStore } from '@/stores/notification'

import { createContainer } from './container'
import { Notification } from './Notification'

const NotificationStackContainer = styled.div`
  position: relative;
  width: 200px;
  > div:nth-child(3) {
    top: 28px;
    z-index: 3;
  }
  > div:nth-child(2) {
    top: 14px;
    scale: 0.9;
    z-index: 2;
  }
  > div:nth-child(1) {
    scale: 0.8;
    z-index: 1;
  }
`

const container = createContainer()

export const NotificationStack = () => {
  const [notifications, setNotifications] = useNotificationStore((state) => [
    state.notifications,
    state.setNotifications,
  ])

  const removeNotification = (id: number) => {
    const newNotifications = new Map(notifications)

    newNotifications.delete(id)
    setNotifications(newNotifications)
  }

  return createPortal(
    <NotificationStackContainer>
      {[...notifications.values()].map((notification) => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onRemove={() => removeNotification(notification.id)}
        />
      ))}
    </NotificationStackContainer>,
    container
  )
}
