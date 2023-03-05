import styled from 'styled-components'

import { Text } from '@/layouts/common'

export const ThemeImageCard = ({ name, src }: { name: string; src: string }) => {
  return (
    <ImageCardContainer>
      <ThemeCardName>
        <Text size="small" weight="lighter">
          {name}
        </Text>
      </ThemeCardName>
      <ThemeImage src={src} />
    </ImageCardContainer>
  )
}

export const ImageCardContainer = styled.div`
  display: flex;
  position: relative;
`

export const ThemeCardName = styled.div`
  padding: 4px 6px;
  border-radius: 8px;
  background-color: hsla(261, 26%, 22%, 1);

  position: absolute;
  top: 10px;
  left: 8px;
  z-index: 99;

  ${Text} {
    display: block;
    color: #ffffff;
  }
`

export const ThemeImage = styled.img`
  width: 200px;
  height: 102px;
  object-fit: cover;
  border-radius: 12px;
`
