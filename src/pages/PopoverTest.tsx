import styled from 'styled-components'

import { MemberCard } from '@/components/MemberCard'
import { Option, Popover } from '@/components/Popover'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CustomMemberCard = styled(MemberCard)`
  background: red !important;
  width: 300px;
`

const MemberContainer = styled.div`
  padding: 8px;
  border-radius: 12px;
  background: #212225;
  width: 160px;
`

const PopoverTest = () => {
  return (
    <Container>
      <div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <Popover
          content={
            <MemberContainer>
              <Option title="Copy user" onClick={() => {}} />
              <Option title="Copy user" onClick={() => {}} />
              <Option title="Copy user" onClick={() => {}} />
              <Option customHoverBackgroundColor="#FC677B" title="Copy user" onClick={() => {}} />
            </MemberContainer>
          }
        >
          <CustomMemberCard
            avatar="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            handler="123"
            name="1234"
          />
        </Popover>
      </div>
    </Container>
  )
}

export default PopoverTest
