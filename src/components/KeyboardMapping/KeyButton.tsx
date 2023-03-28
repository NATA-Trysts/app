import styled from 'styled-components'

import { WithTooltip } from '@/components/Toolbar'

const Container = styled.button<{ isLongCharacter: boolean }>`
  all: unset;
  width: ${({ isLongCharacter }) => (isLongCharacter ? '72px' : '48px')};
  height: 48px;
  border: 2px solid #fff;
  background: transparent;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  > button {
    all: unset; // clear styles of tooltip
    padding: 12px;
  }

  .react-tooltip {
    background: #191a1d;
    text-transform: capitalize;
  }
`

type KeyButtonProps = {
  keyName: string
  hasTooltip?: boolean
  toolTipContent?: string
  toolTipPlace?: 'top' | 'right' | 'bottom' | 'left'
}

export const KeyButton = ({
  keyName,
  hasTooltip,
  toolTipContent = 'Forward',
  toolTipPlace = 'top',
}: KeyButtonProps) => {
  const convertKeyNameOfMac = (keyName: string) => {
    if (keyName === 'ctrl' && navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
      return '⌘ cmd'
    }

    return keyName
  }

  return (
    <Container isLongCharacter={keyName.length !== 1}>
      {hasTooltip ? (
        <WithTooltip active={true} content={toolTipContent} id={toolTipContent} offset={10} place={toolTipPlace}>
          {convertKeyNameOfMac(keyName)}
        </WithTooltip>
      ) : (
        convertKeyNameOfMac(keyName)
      )}
    </Container>
  )
}
