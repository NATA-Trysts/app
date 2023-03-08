import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { useNotificationStore } from '@/stores'

import { createContainer } from './container'
import { Notification } from './Notification'

const NotificationStackContainer = styled.div`
  position: relative;
  width: 92vw;
  display: flex;
  justify-content: center;
  > div:nth-child(1) {
    top: 28px;
    opacity: 1;
    z-index: 3;
  }
  > div:nth-child(2) {
    top: 14px;
    scale: 0.8;
    opacity: 0.8;
    z-index: 2;
  }
  > div:nth-child(3) {
    scale: 0.6;
    opacity: 0.6;
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
      {[...notifications.values()].slice(0, 3).map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          onRemove={() => removeNotification(notification.id)}
        />
      ))}
    </NotificationStackContainer>,
    container,
  )
}
