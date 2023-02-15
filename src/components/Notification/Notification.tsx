import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Close from '@/assets/close-icon.svg'
import Info from '@/assets/info-icon.svg'
import { NOTIFICATION_CLOSE_COLOR, NOTIFICATION_COLOR, NotificationType } from '@/libs/constants'

const NotificationContainer = styled.div<{ type: NotificationType }>`
  width: 200px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #d0d0d0;
  background-color: ${({ type }) => NOTIFICATION_COLOR[type]};
  font-size: 16px;
  font-weight: lighter;
  z-index: 99;
  position: absolute;
  transition: all 0.3s ease;
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
  width: 128px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CloseIcon = styled.img<{ type: NotificationType }>`
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 8px;
  background-color: transparent;
  padding: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background-color: ${({ type }) => NOTIFICATION_CLOSE_COLOR[type]};
  }
`

type NotificationProps = {
  type: NotificationType
  message: string
  onRemove: () => void
}

export const Notification: React.FC<NotificationProps> = ({ type, message, onRemove }) => {
  const [isDisplayed, setIsDisplayed] = useState(true)

  useEffect(() => {
    if (!isDisplayed) {
      const timeout = setTimeout(() => {
        onRemove()
      }, 300)

      return () => clearTimeout(timeout)
    }
  }, [isDisplayed])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDisplayed(false)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {isDisplayed && (
        <NotificationContainer type={type}>
          <NotificationContent>
            <NotificationIcon alt="Info" src={Info} />
            <NotificationMessage>{message}</NotificationMessage>
          </NotificationContent>
          <CloseIcon alt="Close" src={Close} type={type} onClick={onRemove} />
        </NotificationContainer>
      )}
    </>
  )
}
