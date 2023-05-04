import Avatar from 'boring-avatars'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { RedirectLink } from '@/components/Redirect'
import { isValidUrl } from '@/libs/utils'

const Container = styled.div<{ isMine: boolean }>`
  width: 100%;
  display: flex;
  gap: 6px;
  flex-direction: ${(props) => (props.isMine ? 'row-reverse' : 'row')};
  /* display: grid;
  grid-template-columns: ${(props) => (props.isMine ? '1fr 32px' : '32px 1fr')}; */
`
const AvatarContainer = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 4px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
`

// const Avatar = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `

const ContentContainer = styled.div`
  width: fit-content;
  max-width: calc(100% - 76px);
  word-break: break-all;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--color-5);
  /* grid-area: message; */
`

const Author = styled(Text)`
  color: var(--color-3);
`

const TimeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Time = styled(Text)`
  color: #dedede;
`

const Message = styled(Text)`
  white-space: pre-wrap;
`

type ChatMessageProps = {
  time: string
  author: string
  avatarUri: string
  message: string
  isMine: boolean
}

export const ChatMessage: FC<ChatMessageProps> = ({ time, author, message, isMine }) => {
  return (
    <Container isMine={isMine}>
      {/* {isMine ? (
        <>
          <ContentContainer>
            <Author size="medium" weight="normal">
              You
            </Author>

            <Text size="medium" weight="lighter">
              {message}
            </Text>
            <TimeContainer>
              <Time size="medium" weight="lighter">
                {time}
              </Time>
            </TimeContainer>
          </ContentContainer>{' '}
          <AvatarContainer>
            <Avatar alt={`${author} avatar`} src={avatarUri} />
          </AvatarContainer>
        </>
      ) : (
        <>
          <AvatarContainer>
            <Avatar alt={`${author} avatar`} src={avatarUri} />
          </AvatarContainer>
          <ContentContainer>
            <Author size="medium" weight="normal">
              {author}
            </Author>

            <Text size="medium" weight="lighter">
              {message}
            </Text>
            <TimeContainer>
              <Time size="medium" weight="lighter">
                {time}
              </Time>
            </TimeContainer>
          </ContentContainer>
        </>
      )} */}
      <>
        <AvatarContainer>
          {/* <Avatar alt={`${author} avatar`} src={avatarUri} /> */}
          <Avatar name={author} size={40} variant="beam" />
        </AvatarContainer>
        <ContentContainer>
          <Author size="medium" weight="normal">
            {isMine ? 'You' : author}
          </Author>

          <Message size="medium" weight="lighter">
            {isValidUrl(message) ? <RedirectLink href={message}>{message}</RedirectLink> : message}
          </Message>
          <TimeContainer>
            <Time size="medium" weight="lighter">
              {time}
            </Time>
          </TimeContainer>
        </ContentContainer>
      </>
    </Container>
  )
}
