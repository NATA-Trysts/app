import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { ColorPicker } from './ColorPicker'
import { GlobalSectionItem } from './GlobalSectionItem'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 16px 16px 16px;
  border-radius: 0 0 16px 16px;
  background-color: transparent;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #272728;
  }
`

export const GlobalSection = () => {
  return (
    <Container>
      <Text size="small" weight="normal">
        Global Settings
      </Text>
      <GlobalSectionItem property="Wireframe" />
      <ColorPicker />
    </Container>
  )
}
