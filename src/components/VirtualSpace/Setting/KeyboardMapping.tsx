import styled from 'styled-components'

import { Text } from '@/components/Commons'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 128px;
  align-items: center;
  margin: 4px 0;
`

const Name = styled(Text)`
  color: #727272;
`

const MappingButton = styled.button`
  width: 100%;
  height: 28px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid #727272;
  cursor: pointer;
  color: #727272;
  font-weight: 500;
  font-size: 12px;
  transition: border 0.2s ease;

  &:hover {
    border: 1px solid #c771e1;
    background: #c771e1;
    color: white;
  }
`

type KeyboardMappingProps = {
  setIsModalOpen: (isOpen: boolean) => void
}

export const KeyboardMapping = ({ setIsModalOpen }: KeyboardMappingProps) => {
  return (
    <Container>
      <Name size="small" weight="lighter">
        Keyboard mapping
      </Name>
      <MappingButton onClick={() => setIsModalOpen(true)}>Change key</MappingButton>
    </Container>
  )
}
