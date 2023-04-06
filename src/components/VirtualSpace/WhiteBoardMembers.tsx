import styled from 'styled-components'

import { useVirtualSpaceStore } from '@/stores'

const MemberAvatarWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -8px;
  left: 120px;
`

const MemberAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #32d842;
  background-image: url('https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg');
  background-position: center;
  background-size: cover;
  margin-left: -12px;

  &:first-child {
    margin-left: 0;
  }
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
