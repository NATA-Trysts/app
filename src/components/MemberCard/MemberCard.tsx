import Avatar from 'boring-avatars'
import { ComponentPropsWithoutRef, FC, forwardRef } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { truncateText } from '@/libs'

const Name = styled(Text)`
  color: var(--color-1);
`

const Handler = styled(Text)`
  color: var(--color-1);
`

const Container = styled.button`
  width: 100%;
  padding: 8px;
  background: var(--color-5);
  display: grid;
  grid-template-columns: 40px 1fr;
  border-radius: 8px;
  outline: none;
  border: none;
  text-align: left;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    ${Name} {
      color: #fff;
    }

    ${Handler} {
      color: #fff;
    }

    background: var(--color-3);
  }
`

const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`

const InformationContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
`

type MemberCardProps = {
  name: string
  handler: string
  maxNameCharacter?: number
  maxHandlerCharacter?: number
  onClick?: () => void
} & ComponentPropsWithoutRef<'button'>

export const MemberCard: FC<MemberCardProps> = forwardRef<HTMLButtonElement, MemberCardProps>(
  ({ name, handler, onClick, maxNameCharacter = 20, maxHandlerCharacter = 20 }, ref) => {
    return (
      <Container ref={ref} onClick={onClick}>
        <AvatarContainer>
          <Avatar name={name} size={40} variant="beam" />
        </AvatarContainer>
        <InformationContainer>
          <Name size="medium" weight="normal">
            {truncateText(name, maxNameCharacter)}
          </Name>
          <Handler size="small" weight="lighter">
            {truncateText(handler, maxHandlerCharacter)}
          </Handler>
        </InformationContainer>
      </Container>
    )
  },
)
