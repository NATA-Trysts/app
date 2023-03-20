import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { Text } from '@/components/Commons'

import { createContainer } from './container'
import { KeyButton } from './KeyButton'

//#region Styles
const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 611px;
  height: 647px;
  background: #191a1d;
  border-radius: 20px;
  padding: 24px 32px;
  position: relative;
`

const MovingSection = styled.div`
  width: 100%;
  background: #24262a;
  border-radius: 16px;
  padding: 16px;
  margin: 16px 0;
`

const MovingLayout = styled.div`
  width: 168px;
  margin: 8px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;

  button:nth-child(1) {
    grid-area: 1 / 2 / 2 / 3;
  }
  button:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  button:nth-child(3) {
    grid-area: 2 / 2 / 3 / 3;
  }
  button:nth-child(4) {
    grid-area: 2 / 3 / 3 / 4;
  }
`

const InteractionSection = styled(MovingSection)`
  height: 283px;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`

const InteractionKeyList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const InteractionKeyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InteractionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  overflow: auto;
`

const ControlButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`

const CancelButton = styled.button`
  border: none;
  background: transparent;
  margin-right: 8px;
  width: 69px;
  height: 38px;
  border-radius: 12px;
  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
  color: #d8d8d8;

  transition: background 0.2s ease;

  :hover {
    color: #ffffff;
    background: #444444;
  }
`

const SaveButton = styled.button`
  width: 69px;
  height: 38px;
  background: linear-gradient(90deg, #aa7ac5 0%, #c974e3 50%, #e7a4f8 100%);
  border-radius: 12px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`
//#endregion

type KeyboardModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const container = createContainer()

export const KeyboardModal = ({ isOpen, setIsOpen }: KeyboardModalProps) => {
  const [keyId, setKeyId] = useState('')

  const handleInactiveKey = () => {
    setKeyId('')
  }

  useEffect(() => {
    const c = (ev: KeyboardEvent) => {
      if (keyId === '' || keyId === null) return

      const key = ev.key
      const element = document.getElementById(keyId)

      if (element !== null && element !== undefined) {
        element.innerHTML = key
      }
    }

    document.addEventListener('keydown', c, false)

    return () => {
      document.removeEventListener('keydown', c, false)
    }
  }, [keyId])

  if (!isOpen) return null
  else {
    return createPortal(
      <ModalOverlay onClick={handleInactiveKey}>
        <Container onClick={handleInactiveKey}>
          <Text
            size="large"
            style={{ paddingBottom: '12px', display: 'inline-block', fontSize: '24px' }}
            weight="normal"
          >
            Keyboard mapping
          </Text>
          <MovingSection>
            <Text size="large" weight="normal">
              Moving
            </Text>
            <MovingLayout>
              <KeyButton keyId={keyId} keyName="w" setKeyId={setKeyId} />
              <KeyButton keyId={keyId} keyName="a" setKeyId={setKeyId} />
              <KeyButton keyId={keyId} keyName="s" setKeyId={setKeyId} />
              <KeyButton keyId={keyId} keyName="d" setKeyId={setKeyId} />
            </MovingLayout>
          </MovingSection>
          <InteractionSection>
            <Text size="large" weight="normal">
              Interaction
            </Text>
            <InteractionKeyList>
              <InteractionKeyItem>
                <Text size="small" weight="lighter">
                  Sit on chair
                </Text>
                <InteractionButtons>
                  <KeyButton keyId={keyId} keyName="p" setKeyId={setKeyId} />
                </InteractionButtons>
              </InteractionKeyItem>
              <InteractionKeyItem>
                <Text size="small" weight="lighter">
                  Toggle Video
                </Text>
                <InteractionButtons>
                  <KeyButton keyId={keyId} keyName="ctrl" setKeyId={setKeyId} />
                  <KeyButton keyId={keyId} keyName="v" setKeyId={setKeyId} />
                </InteractionButtons>
              </InteractionKeyItem>
            </InteractionKeyList>
          </InteractionSection>
          <ControlButton>
            <CancelButton onClick={() => setIsOpen(false)}>Cancel</CancelButton>
            <SaveButton onClick={() => setIsOpen(false)}>Save</SaveButton>
          </ControlButton>
        </Container>
      </ModalOverlay>,
      container,
    )
  }
}
