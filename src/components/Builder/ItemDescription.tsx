import styled from 'styled-components'

import { Text } from '@/layouts/common'

const ItemDescriptionContainer = styled.div`
  width: calc(100% - 32px);
`

const Description = styled.div`
  width: 100%;
  height: 64px;
  color: #ababab;

  // TEMPORARY
  overflow-y: scroll;
  overflow-x: hidden;
`

type ItemDescriptionProps = {
  name: string
  description: string
}

export const ItemDescription = ({ name, description }: ItemDescriptionProps) => {
  return (
    <ItemDescriptionContainer>
      <Text size="medium" weight="normal">
        {name}
      </Text>
      <Description>
        <Text size="small" weight="lighter">
          {description}
        </Text>
      </Description>
    </ItemDescriptionContainer>
  )
}
