import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { customColorHueMapping, Text } from '@/components/Commons'
import { Close } from '@/components/UtilitySection'
import { useAppStore } from '@/stores'

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

const Container = styled.div<{ closeBackgroundColor: string; iconColor: string }>`
  width: 611px;
  height: 647px;
  background: #191a1d;
  border-radius: 20px;
  padding: 24px 32px;
  position: relative;

  > button {
    background: ${({ closeBackgroundColor }) => closeBackgroundColor};
    top: 28px;
    right: 28px;

    svg {
      stroke: ${({ iconColor }) => iconColor};
    }

    :hover {
      background: ${({ closeBackgroundColor }) => closeBackgroundColor};

      svg {
        stroke: ${({ iconColor }) => iconColor};
      }
    }
  }
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
  margin: 16px auto;
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
  height: 300px;
`

const InteractionKeyList = styled.div`
  width: 100%;
  height: 90%;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

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

//#endregion

type KeyboardModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const container = createContainer()

const interactiveKeyList = [
  {
    name: 'Raise hand',
    keyName: ['r'],
  },
  {
    name: 'Toggle video',
    keyName: ['ctrl', 'v'],
  },
  {
    name: 'Toggle microphone',
    keyName: ['ctrl', 'D'],
  },
  {
    name: 'Interactive with object',
    keyName: ['z'],
  },
  {
    name: 'Confetti',
    keyName: ['f'],
  },
  {
    name: 'Toggle chat',
    keyName: ['c'],
  },
  {
    name: 'Toggle member',
    keyName: ['m'],
  },
  {
    name: 'Toggle setting',
    keyName: ['p'],
  },
  {
    name: 'Toggle info',
    keyName: ['i'],
  },
]

export const KeyboardModal = ({ isOpen, setIsOpen }: KeyboardModalProps) => {
  const color = useAppStore((state) => state.customColor)

  if (!isOpen) return null
  else {
    return createPortal(
      <ModalOverlay onClick={() => setIsOpen(false)}>
        <Container
          closeBackgroundColor={`hsla(${customColorHueMapping[color]}, 79%, 20%, 1)`}
          iconColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
        >
          <Close onClick={() => setIsOpen(false)} />
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
              <KeyButton hasTooltip keyName="w" toolTipContent="Forward" toolTipPlace="top" />
              <KeyButton hasTooltip keyName="a" toolTipContent="Left" toolTipPlace="left" />
              <KeyButton hasTooltip keyName="s" toolTipContent="Backward" toolTipPlace="bottom" />
              <KeyButton hasTooltip keyName="d" toolTipContent="Right" toolTipPlace="right" />
            </MovingLayout>
          </MovingSection>
          <InteractionSection>
            <Text size="large" weight="normal">
              Interaction
            </Text>
            <InteractionKeyList>
              {interactiveKeyList.map((item, index) => (
                <InteractionKeyItem key={index}>
                  <Text size="medium" weight="lighter">
                    {item.name}
                  </Text>
                  <InteractionButtons>
                    {item.keyName.map((key, index) => (
                      <KeyButton key={index} keyName={key} />
                    ))}
                  </InteractionButtons>
                </InteractionKeyItem>
              ))}
            </InteractionKeyList>
          </InteractionSection>
        </Container>
      </ModalOverlay>,
      container,
    )
  }
}
