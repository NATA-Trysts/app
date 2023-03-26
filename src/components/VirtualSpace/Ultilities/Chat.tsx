import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { ChatInput } from '@/components/ChatInput'
import { ChatMessage } from '@/components/ChatMessage'
import { truncateText } from '@/libs'
import { MESSAGES } from '@/libs/constants'
import { useNetworkStore, useVirtualSpaceStore } from '@/stores'

const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 16px * 2 - 48px - 6px - 16px - 52px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
`

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: auto;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  gap: 8px;
`

export const Chat = () => {
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const chatMessages = useVirtualSpaceStore((state) => state.chatMessages)
  const chatBottomRef = useRef<HTMLDivElement>(null)

  const dispatchMessage = (message: string) => {
    roomInstance?.send(MESSAGES.MEMBER.SEND_MESSAGE, {
      name: roomInstance.sessionId,
      avatar: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      timestamp: Date.now(),
      content: message.trim(),
    })
  }

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <ChatContainer>
      <ChatMessageContainer>
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
    </ChatContainer>
  )
}
