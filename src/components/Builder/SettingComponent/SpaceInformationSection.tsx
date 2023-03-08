import styled from 'styled-components'

import { Text } from '@/components/Commons'

import { SpaceInformationItems } from './SpaceInformationItems'

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  border-radius: 16px 16px 0 0;
  background-color: transparent;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #272728;
  }
`

export const SpaceInformationSection = () => {
  return (
    <Container>
      <Text size="small" weight="normal">
        Space Information
      </Text>
      <SpaceInformationItems />
    </Container>
  )
}
