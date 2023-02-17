import styled from 'styled-components'

import NotfoundTextImage from '@/assets/notfound-text-image.png'

const NotFoundPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #090118; // constant
`

const NotFoundContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 256px;
  transform: translate(-50%, -50%);
`

const NotFoundText = styled.h1`
  font-size: 96px;
  font-weight: bold;
  color: transparent;
  background-image: url(${NotfoundTextImage});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  text-shadow: 0 0 0 transparent, 0 0 0 transparent, 0 0 0 transparent, 0 0 0 transparent, 0 0 0 transparent,
    0 0 0 transparent;
  transition: all 0.3s ease-in-out;

  :hover {
    text-shadow: 0px 34px 133px rgba(216, 35, 35, 0.16), 0px 22.037px 88.0509px rgba(216, 35, 35, 0.123704),
      0px 13.0963px 74.8741px rgba(216, 35, 35, 0.104296), 0px 6.8px 76.475px rgba(216, 35, 35, 0.092),
      0px 2.77037px 75.8593px rgba(216, 35, 35, 0.077037), 0px 0.62963px 56.0324px rgba(216, 35, 35, 0.0496296);
  }
`

const NotFound = () => {
  return (
    <NotFoundPage>
      <NotFoundContainer>
        <NotFoundText>404</NotFoundText>
      </NotFoundContainer>
    </NotFoundPage>
  )
}

export default NotFound
