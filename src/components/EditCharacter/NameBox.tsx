import styled from 'styled-components'

import { Text } from '@/components/Commons'

const NameBoxContainer = styled.div`
  width: 232px;
  height: 47px;
  position: absolute;
  left: 50%;
  bottom: 72px;
  transform: translateX(-50%);
  background: #2d0634;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NameWrapper = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  background: #4e1957;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

type NameBoxProps = {
  name: string
}

export const NameBox = ({ name }: NameBoxProps) => {
  return (
    <NameBoxContainer>
      <NameWrapper>
        <Text size="medium" weight="lighter">
          {name}
        </Text>
      </NameWrapper>
    </NameBoxContainer>
  )
}
