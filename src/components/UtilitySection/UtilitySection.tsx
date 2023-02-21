import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { ReactComponent as Close } from '@/assets/icons/close.svg'
import { SVGClickable, Text } from '@/layouts/common'

const Container = styled.section`
  width: 80%;
  height: 100%;
  background: var(--color-6);
  border-radius: 16px;
  padding: 12px;
  pointer-events: auto;
  position: relative;
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

const CustomClickable = styled(SVGClickable)`
  position: absolute;
  padding: 2px;
  border-radius: 8px;
  gap: 8px;
  right: 8px;
  top: 8px;
`

type UtilitySectionProps = {
  children: ReactNode
  name: string
}

export const UtilitySection: FC<UtilitySectionProps> = ({ children, name }) => {
  return (
    <Container>
      <CustomClickable>
        <Close />
      </CustomClickable>
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
