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

export const NewUpdates = () => {
  // temporay fixed image
  const updateImage =
    'https://s3-alpha-sig.figma.com/img/9730/e208/7d616e96b8b08c1f9d7af3672c044e1f?Expires=1678665600&Signature=EessPP2nYJ2k~Jgn4SpuA--a6cn3~b1eCqU5j5C7N7wbjP3bjRxwKr4TlTVr0GOP-OtaLtrgL7FWz~uOBn7AyvR8M5BrXseXW5c48jEz9L2Ciy7F07bnREDAwUnbmrhOWfZhyODQdAd8rSagYSIhzI7JKuawSDd8ti21nVsVrS6WRtZOS7PljX9EWT5t~bGnLIouk6TLZ3t90Nj2RMQjQeSpbzse2IwApfrmuRz2uwseCkkqYLc2wgDCX4hdZZcM26OtaAWU8j9-HK8Pmim86sON9MHessuRQ9ROcK3fYep73X41LPk3nkkd8iH2ifmYICdrGIcOUyP6Fq6DnI4dzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

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
