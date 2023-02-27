import styled from 'styled-components'

import { Text } from '@/layouts/common'

const NewUpdateContainer = styled.section`
  width: 100%;
  height: auto;
  margin-top: 28px;
`

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled(Text)`
  margin: 16px 20px;
`

const UpdateContent = styled.div`
  width: 100%;
  height: 211px;
  border-radius: 16px;
  overflow: hidden;
  margin: 16px 0;
`

const UpdateContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

type NewUpdateProps = {
  updateImage: string
}

export const NewUpdates = ({ updateImage }: NewUpdateProps) => {
  return (
    <NewUpdateContainer>
      <Wrapper>
        <Title size="large" weight="normal">
          New Updates
        </Title>
        <UpdateContent>
          <UpdateContentImage src={updateImage} />
        </UpdateContent>
      </Wrapper>
    </NewUpdateContainer>
  )
}
