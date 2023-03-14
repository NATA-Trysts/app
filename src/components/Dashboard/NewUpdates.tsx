import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

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

export const NewUpdates = () => {
  const [isLoading, setIsLoading] = useState(true)

  // temporary fixed image
  const updateImage = 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png'

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 3000)
  })

  return (
    <NewUpdateContainer>
      <Wrapper>
        <Title size="large" weight="normal">
          New Updates
        </Title>
        {isLoading ? (
          <SkeletonTheme baseColor="#838383" highlightColor="#cac9c9">
            <SkeletonItem height={211} width="100%" />
          </SkeletonTheme>
        ) : (
          <UpdateContent>
            <UpdateContentImage src={updateImage} />
          </UpdateContent>
        )}
      </Wrapper>
    </NewUpdateContainer>
  )
}
