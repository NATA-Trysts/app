import Avatar from 'boring-avatars'
import { FC } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { truncateText } from '@/libs'

const Container = styled.div`
  display: flex;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 132px;
`

const MyHandler = styled(Text)`
  color: var(--color-3);
`

const Wrapper = styled.button`
  gap: 8px;
  border-radius: 16px;
  display: flex;
  padding: 12px;
  align-items: center;
  background: var(--color-5);
  outline: none;
  border: none;
  text-align: left;
  cursor: pointer;
  pointer-events: auto;

  &:hover {
    background: var(--color-4);
  }
`

type MyInformationCardProps = {
  name: string
  handler: string
  maxNameCharacter?: number
  maxHandlerCharacter?: number
}

export const MyInformationCard: FC<MyInformationCardProps> = ({
  name,
  handler,
  maxHandlerCharacter = 10,
  maxNameCharacter = 12,
}) => {
  return (
    <Container>
      <Wrapper>
        <Avatar name={name} size={40} variant="beam" />

        <NameContainer>
          <Text size="medium" weight="normal">
            {truncateText(name, maxNameCharacter)}
          </Text>
          <MyHandler size="medium" weight="lighter">
            {truncateText(handler, maxHandlerCharacter)}
          </MyHandler>
        </NameContainer>
      </Wrapper>
    </Container>
  )
}
