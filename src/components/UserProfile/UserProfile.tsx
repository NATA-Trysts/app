import Avatar from 'boring-avatars'
import styled from 'styled-components'

import { useGetMe } from '@/hooks'

export type UserProfileProps = {
  className?: string
}

export const UserProfile = ({ ...props }: UserProfileProps) => {
  const { me: user } = useGetMe()

  return (
    <UserProfileContainer {...props}>
      <UserNameTag>
        <UserName>{user?.username}</UserName>
        <UserTag>{user?.handler}</UserTag>
      </UserNameTag>
      <Avatar name={user?.username} size={40} variant="beam" />
    </UserProfileContainer>
  )
}

export const UserProfileContainer = styled.section`
  height: 44px;

  display: flex;
  gap: 8px;
`

export const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`

export const UserNameTag = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`

export const UserName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
`
export const UserTag = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: right;

  color: hsla(0, 0%, 51%, 1);
`
