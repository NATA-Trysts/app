import styled from 'styled-components'

import LogoImg from '@/assets/logo.png'
import NotfoundTextImage from '@/assets/notfound-text-image.png'

const NotFoundPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #090118; // constant
`

const NotFoundHeader = styled.header`
  width: 100%;
  height: 84px;
  background-color: rgba(9, 1, 24, 0.1);
  backdrop-filter: blur(15px);
  position: relative;
`

const LogoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 52px;
  transform: translate(0, -50%);
`

const NotFoundContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NotFound404 = styled.h1`
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

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover {
    text-shadow: 0px 34px 133px rgba(216, 35, 35, 0.16), 0px 22.037px 88.0509px rgba(216, 35, 35, 0.123704),
      0px 13.0963px 74.8741px rgba(216, 35, 35, 0.104296), 0px 6.8px 76.475px rgba(216, 35, 35, 0.092),
      0px 2.77037px 75.8593px rgba(216, 35, 35, 0.077037), 0px 0.62963px 56.0324px rgba(216, 35, 35, 0.0496296);
  }
`

const NotFoundText = styled.p`
  font-size: 24px;
  color: #dbd6e4;
  margin: 24px 0;
  font-weight: lighter;
`

const NotFoundButton = styled.button`
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  font-family: var(--font-family);
  color: var(--glow-color);
  font-size: 16px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color), 0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color), 0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }

  &::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }
`

const NotFound = () => {
  const handleBack = () => {
    console.log('Back')
  }

  return (
    <NotFoundPage>
      <NotFoundHeader>
        <LogoImage alt="Logo" src={LogoImg} />
      </NotFoundHeader>
      <NotFoundContainer>
        <NotFound404>404</NotFound404>
        <NotFoundText>Seem you get lost!</NotFoundText>
        <NotFoundButton onClick={handleBack}>Bring me back</NotFoundButton>
      </NotFoundContainer>
    </NotFoundPage>
  )
}

export default NotFound
