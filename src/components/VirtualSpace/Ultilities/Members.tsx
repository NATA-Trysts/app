import { isEmpty } from 'lodash-es'
import styled from 'styled-components'

import { useMemberStore } from '@/stores'

import { SingleMemberCard } from '../SingleMemberCard'

const MemberContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 8px;
  overflow-y: auto;
  max-height: calc(100vh - 16px * 2 - 48px - 6px - 16px - 52px);
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Warn = styled.span`
  font-size: 14px;
  color: var(--color-2);
  text-align: center;
  margin-top: 100px;
`

export const Members = () => {
  const otherMembers = useMemberStore((state) => state.otherMembers)

  return (
    <MemberContainer>
      {!isEmpty(otherMembers) ? (
        Object.values(otherMembers).map((member) => (
          <SingleMemberCard key={member.id} handler={member.handler} name={member.username} />
        ))
      ) : (
        // eslint-disable-next-line react/no-unescaped-entities
        <Warn>Only you in the space. Let's invite some</Warn>
      )}
    </MemberContainer>
  )
}
