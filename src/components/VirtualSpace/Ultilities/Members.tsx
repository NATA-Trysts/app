import { isEmpty } from 'lodash-es'
import { useMemo } from 'react'
import styled from 'styled-components'

import { Member, useMemberStore } from '@/stores'

import { SingleMemberCard } from '../SingleMemberCard'

const MemberContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 8px;
  max-height: calc(100vh - 16px * 2 - 48px - 6px - 16px - 52px);
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: auto;
`

// const SAMPLE_MEMBER_DATA = {
//   handler: 'sonhaaa#1234',
//   avatarUri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
//   name: 'Nguyen Son Ha',
// }

export const Members = () => {
  const [mainMember, otherMembers] = useMemberStore((state) => [state.mainMember, state.otherMembers])

  const members = useMemo(() => {
    const others = Object.keys(otherMembers).map((key) => otherMembers[key])

    return others.reduce<Member[]>(
      (previous, member) => {
        return [...previous, member]
      },
      !isEmpty(mainMember) ? [mainMember] : [],
    )
  }, [mainMember, otherMembers])

  const memberCards = useMemo(() => {
    return members.map((member, index) => {
      const user = member.user

      return (
        <SingleMemberCard
          key={`member-${index}`}
          avatar={user.avatar}
          handler={user.handler}
          name={member.user.username}
        />
      )
    })
  }, [members])

  return <MemberContainer>{memberCards}</MemberContainer>
}
