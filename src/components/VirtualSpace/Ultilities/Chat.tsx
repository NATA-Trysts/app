import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { ChatInput } from '@/components/ChatInput'
import { ChatMessage } from '@/components/ChatMessage'
import { Text } from '@/components/Commons'
import { useTitle } from '@/hooks/useTitle'
import { truncateText } from '@/libs'
import { MESSAGES } from '@/libs/constants'
import { approximatelyEqual } from '@/libs/utils'
import { useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 16px * 2 - 48px - 6px - 16px - 52px);
`

const ChatContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  position: relative;
`

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: auto;
  /* height: 100%; */
  height: 100%;
  width: 100%;
  border-radius: 8px;
  gap: 8px;

  position: relative;

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: var(--color-4);
  }

  &::-webkit-scrollbar-thumb {
    padding: 5px;
    background-color: var(--color-3);
  }

  &::-webkit-scrollbar {
    border-radius: 8px;
    width: 6px;
    background-color: var(--color-2);
  }
`

const Notify = styled.button<{ show: boolean }>`
  height: 20px;
  left: 20px;
  right: 20px;
  top: 0;
  background-color: var(--color-3);
  position: absolute;
  border-radius: 0 0 8px 8px;
  border-width: 0px;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18px;

  cursor: pointer;
`

type NotifyProps = {
  show?: boolean
  onClick?: () => void
}

type NewMessageNotifyProps = NotifyProps & {
  amount: number
}

const NewMessageNotify = ({ show = false, onClick, amount }: NewMessageNotifyProps) => {
  return (
    <>
      {show ? (
        <Notify show={show} onClick={onClick}>
          <Text size="medium" weight="normal">
            New {amount} message{amount <= 1 ? '' : 's'}!
          </Text>
        </Notify>
      ) : (
        <></>
      )}
    </>
  )
}

export const Chat = () => {
  const { defaultTitle, setTitle } = useTitle()
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const chatMessages = useVirtualSpaceStore((state) => state.chatMessages)
  const chatBottomRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const [scrollAtBottom, setScrollAtButton] = useState(true)
  const [newMessage, setNewMessage] = useState(false)
  const mainMember = useMemberStore((state) => state.mainMember)
  const newMessageAmount = useRef(0)

  const dispatchMessage = (message: string) => {
    roomInstance?.send(MESSAGES.MEMBER.SEND_MESSAGE, {
      name: mainMember?.username,
      avatar: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      timestamp: Date.now(),
      content: message.trim(),
    })
  }

  const updateNewMessage = (isNew: boolean) => {
    setNewMessage(isNew)

    if (isNew) newMessageAmount.current += 1
    else newMessageAmount.current = 0
  }

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'auto' })
  }

  useEffect(() => {
    scrollToBottom()

    chatRef.current?.addEventListener('scroll', (event: Event) => {
      const element = event.target as HTMLDivElement
      const height = element.getBoundingClientRect().height
      const scrollHeight = element.scrollHeight
      const scrollTop = element.scrollTop
      const scrollRemainHeight = scrollHeight - scrollTop

      if (approximatelyEqual(height, scrollRemainHeight, 0.8)) setScrollAtButton(true)
      else setScrollAtButton(false)
    })
  }, [])

  useEffect(() => {
    if (Object.values(chatMessages).at(-1)?.sessionId === roomInstance?.sessionId) {
      scrollToBottom()
    } else {
      if (scrollAtBottom) {
        scrollToBottom()
      } else {
        updateNewMessage(true)
      }
    }
  }, [chatMessages, roomInstance])

  useEffect(() => {
    if (scrollAtBottom) updateNewMessage(false)
  }, [scrollAtBottom])

  useEffect(() => {
    setTitle(`${newMessageAmount.current >= 1 ? `(${newMessageAmount.current}) ` : ''}${defaultTitle}`)
  })

  return (
    <ChatContainer>
      <ChatContent>
        <NewMessageNotify amount={newMessageAmount.current} show={newMessage} onClick={() => scrollToBottom()} />
        <ChatMessageContainer ref={chatRef}>
          {Object.values(chatMessages).map((message) => {
            return (
              <ChatMessage
                key={message.id}
                author={truncateText(message.name, 15)}
                avatarUri={message.avatar}
                isMine={roomInstance?.sessionId === message.sessionId}
                message={message.content}
                time={new Date(message.timestamp).toLocaleString('vn-VI', {
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              />
            )
          })}
          <div ref={chatBottomRef}></div>
        </ChatMessageContainer>
        <ChatInput onSendMessage={dispatchMessage} />
      </ChatContent>
    </ChatContainer>
  )
}
