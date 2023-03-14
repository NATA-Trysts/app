import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import { VirtualSpaceNameCard } from '@/components/VirtualSpace'
import { FullLogo } from '@/components/VirtualSpace/FullLogo'
import { useVirtualSpaceStore } from '@/stores'

const Container = styled(motion.section)`
  pointer-events: auto;
  grid-area: header;
  padding: 16px;
  display: flex;
  gap: 8px;
`

export const Header = () => {
  const isEditAvatar = useVirtualSpaceStore((state) => state.isEditAvatar)

  return (
    <Container
      animate={{
        y: isEditAvatar ? -100 : 0,
      }}
    >
      <FullLogo />
      <VirtualSpaceNameCard name="Son Ha's Wedding " spaceId="123" />
    </Container>
  )
}
