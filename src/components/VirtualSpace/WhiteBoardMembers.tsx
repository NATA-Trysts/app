import styled from 'styled-components'

import { useVirtualSpaceStore } from '@/stores'

const MemberAvatarWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -8px;
  left: 120px;
  gap: 8px;
`

const MemberAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #32d842;
`

export const WhiteBoardMembers = () => {
  const whiteBoardMembers = useVirtualSpaceStore((state) => state.whiteBoardMembers)

  return (
    <MemberAvatarWrapper>
      {Object.keys(whiteBoardMembers).map((it) => (
        <MemberAvatar key={it}></MemberAvatar>
      ))}
    </MemberAvatarWrapper>
  )
}
