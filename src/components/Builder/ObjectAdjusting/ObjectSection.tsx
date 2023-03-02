import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { Modifier } from './Modifier'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: transparent;
`

type ObjectSectionProps = {
  name: string
}

export const ObjectSection = ({ name }: ObjectSectionProps) => {
  return (
    <Container>
      <Text size="small" weight="normal">
        {name}
      </Text>
      <Modifier property="Scale" />
    </Container>
  )
}
