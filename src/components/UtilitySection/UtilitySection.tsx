import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

const Container = styled.section`
  width: 100%;
  height: 100%;
  background: var(--color-6);
  border-radius: 16px;
  padding: 12px;
  pointer-events: auto;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`

const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

type UtilitySectionProps = {
  children: ReactNode
  name: string
}

export const UtilitySection: FC<UtilitySectionProps> = ({ children, name }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Text size="large" weight="bold">
            {name}
          </Text>
        </Header>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  )
}
