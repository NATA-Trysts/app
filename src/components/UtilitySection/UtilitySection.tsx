import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '@/layouts/common'
import { useVirtualSpaceStore } from '@/stores'

import { Close } from './Close'

const Container = styled(motion.section)<{ width: string }>`
  width: ${(props) => props.width};
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

type UtilitySectionProps = {
  children: ReactNode
  name: string
  width: string
}

export const UtilitySection: FC<UtilitySectionProps> = ({ children, name, width }) => {
  const setSelectedUltility = useVirtualSpaceStore((state) => state.setSelectedUltility)

  return (
    <Container animate={{ width: width }} width={width}>
      <Close onClick={() => setSelectedUltility(null)} />
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
