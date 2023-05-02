import styled from 'styled-components'

import { Text } from '@/components/Commons'

const ItemDescriptionContainer = styled.div`
  width: calc(100% - 32px);
`

const Description = styled.div`
  width: 100%;
  height: 64px;
  color: #ababab;

  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

type ItemDescriptionProps = {
  name?: string
  description?: string
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
