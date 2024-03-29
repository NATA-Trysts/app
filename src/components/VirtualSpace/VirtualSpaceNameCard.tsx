import { FC } from 'react'
import styled from 'styled-components'

import { ReactComponent as Copy } from '@/assets/icons/copy.svg'
import { Text } from '@/components/Commons'
import { WithTooltip } from '@/components/Toolbar'
import { useCopyToClipboard } from '@/hooks'
import { truncateText } from '@/libs'

const Container = styled.div`
  padding: 8px 8px;
  width: 240px;
  border-radius: 16px;
  background: var(--color-5);
  display: flex;
  justify-content: space-between;
`

const SpaceName = styled.div`
  width: 200px;
  max-width: 200px;
  display: flex;
  align-items: center;
  margin: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`

type VirtualSpaceNameCardProps = {
  name: string
  spaceId?: string
  maxNameLength?: number
}

export const VirtualSpaceNameCard: FC<VirtualSpaceNameCardProps> = ({ spaceId, name, maxNameLength = 20 }) => {
  const { copy, isCopy, setIsCopy } = useCopyToClipboard()

  return (
    <Container>
      <SpaceName>
        <Text
          size="medium"
          style={{ textOverflow: 'ellipsis', width: 200, overflow: 'hidden', display: 'block' }}
          weight="lighter"
        >
          {truncateText(name, maxNameLength)}
        </Text>
      </SpaceName>
      <WithTooltip
        content={`${isCopy ? 'Copied!' : 'Copy'}`}
        delayShow={0}
        id="copy"
        onClick={() => copy(`https://app.trysts.io/${spaceId}`)} // TODO: check when go to production
        onMouseEnter={() => setIsCopy(false)}
      >
        <Copy />
      </WithTooltip>
    </Container>
  )
}
