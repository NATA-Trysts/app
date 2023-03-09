import styled from 'styled-components'

import { Text } from '@/components/Commons'

const SelectContainer = styled.div`
  position: absolute;
  width: 92%;
  bottom: 80px;
`

const Title = styled(Text)`
  color: #d8d8d8;
`

const Number = styled(Text)`
  font-size: 28px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Modify = styled.div`
  display: flex;
  align-items: center;
`

const ModifyButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #312a3e;
  border: none;
  text-align: center;
  margin: 0 2px;
  cursor: pointer;
  font-size: 16px;
`

export const SelectMAU = () => {
  return (
    <SelectContainer>
      <Title size="medium" weight="lighter">
        Select your MAUs
      </Title>
      <Wrapper>
        <Number size="medium" weight="normal">
          1,000
        </Number>
        <Modify>
          <ModifyButton>-</ModifyButton>
          <ModifyButton>+</ModifyButton>
        </Modify>
      </Wrapper>
    </SelectContainer>
  )
}
