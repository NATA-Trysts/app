import React from 'react'
import styled from 'styled-components'

import { Logo } from '@/components/Commons/Logo'

const Container = styled.div`
  padding: 14px 16px;
  border-radius: 16px;
  background: var(--color-5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FullLogo = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}
