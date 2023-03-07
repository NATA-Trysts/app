import styled from 'styled-components'

import userImg from '@/assets/trysts.png'

export type UserProfileProps = {
  className?: string
}

export const UserProfile = ({ ...props }: UserProfileProps) => {
  return (
    <UserProfileContainer {...props}>
      <UserNameTag>
        <UserName>Trysts</UserName>
        <UserTag>trysts#1234</UserTag>
      </UserNameTag>
      <ProfileImage src={userImg}></ProfileImage>
    </UserProfileContainer>
  )
}

export const UserProfileContainer = styled.section`
  width: 168px;
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
