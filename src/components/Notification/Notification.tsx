import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import Close from '@/assets/icons/close-icon.svg'
import Info from '@/assets/icons/info-icon.svg'
import { NOTIFICATION_CLOSE_COLOR, NOTIFICATION_COLOR, NotificationType } from '@/libs/constants'
import { useNotificationStore } from '@/stores'

const NotificationContainer = styled.div<{ type: NotificationType }>`
  width: fit-content;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #d0d0d0;
  background-color: ${({ type }) => NOTIFICATION_COLOR[type]};
  font-size: 16px;
  font-weight: lighter;
  z-index: 99;
  position: absolute;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
`

const NotificationContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const NotificationIcon = styled.img`
  padding: 12px 12px 12px 20px;
`

const NotificationMessage = styled.div`
  white-space: nowrap;
  max-width: 100%;
  padding-right: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CloseButton = styled.button<{ backgroundType: NotificationType }>`
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 8px;
  background-color: transparent;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  :hover {
    background-color: ${({ backgroundType }) => NOTIFICATION_CLOSE_COLOR[backgroundType]};
  }
`

const CloseIcon = styled.img``

type NotificationProps = {
  id: number
  type: NotificationType
  message: string
  onRemove: () => void
}

export const Notification: React.FC<NotificationProps> = ({ id, type, message, onRemove }) => {
  const notifications = useNotificationStore((state) => state.notifications)
  const [isDisplayed, setIsDisplayed] = useState(true)

  useEffect(() => {
    if (!isDisplayed) {
      const timeout = setTimeout(() => {
        onRemove()
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [isDisplayed, onRemove])

  const isFirstNotification = useMemo(() => {
    const firstNotification = notifications.get(notifications.keys().next().value)

    return firstNotification?.id === id
  }, [id, notifications])

  useEffect(() => {
    if (isFirstNotification) {
      const timeout = setTimeout(() => {
        setIsDisplayed(false)
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [isFirstNotification])

  return (
    <>
      {isDisplayed && (
        <NotificationContainer type={type}>
          <NotificationContent>
            <NotificationIcon alt="Info" src={Info} />
            <NotificationMessage>{message}</NotificationMessage>
          </NotificationContent>
          <CloseButton backgroundType={type} onClick={onRemove}>
            <CloseIcon alt="Close" loading="lazy" src={Close} />
          </CloseButton>
        </NotificationContainer>
      )}
    </>
  )
}
