import styled from 'styled-components'

import { SingleMemberCard } from '../SingleMemberCard'

const MemberContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 16px * 2 - 48px - 6px - 16px - 52px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
`

const SAMPLE_MEMBER_DATA = {
  handler: 'sonhaaa#1234',
  avatarUri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
  name: 'Nguyen Son Ha',
}

export const Members = () => {
  return (
    <MemberContainer>
      {Array(20)
        .fill(SAMPLE_MEMBER_DATA)
        .map((member: typeof SAMPLE_MEMBER_DATA, index) => (
          <SingleMemberCard key={index} avatar={member.avatarUri} handler={member.handler} name={member.name} />
        ))}
    </MemberContainer>
  )
}
