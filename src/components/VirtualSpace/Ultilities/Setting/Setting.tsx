import { useState } from 'react'
import styled from 'styled-components'

import { KeyboardModal } from '@/components/KeyboardMapping'

import { BackgroundMusicSelect } from './BackgroundMusicSelect'
import { KeyboardMapping } from './KeyboardMapping'
import { QualitySelect } from './QualitySelect'
import { VideoLayout } from './VideoLayout'

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 16px * 2 - 48px - 6px - 16px - 52px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
`

export const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container>
      <QualitySelect />
      <BackgroundMusicSelect />
      <VideoLayout />
      <KeyboardMapping setIsModalOpen={setIsModalOpen} />
      <KeyboardModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </Container>
  )
}
