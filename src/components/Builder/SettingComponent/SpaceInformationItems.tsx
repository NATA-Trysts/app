import * as Switch from '@radix-ui/react-switch'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { BuilderTextInput } from './BuilderTextInput'
import { MusicUpload } from './MusicUpload'

const Container = styled.div`
  width: 100%;
`

const Item = styled.div`
  width: 100%;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ItemFullWidth = styled(Item)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const ItemTitle = styled(Text)`
  color: #727272;
`

const SwitchRoot = styled(Switch.Root)`
  width: 21px;
  height: 13px;
  background-color: #575960;
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: none;

  &[data-state='checked'] {
    border: none;
    background-color: #27763e;
  }
`

const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 9px;
  height: 9px;
  background-color: #d8d8d8;
  border-radius: 50%;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(10px);
    background-color: #37c661;
  }
`

const ThumbnailBox = styled.div`
  width: 100%;
  height: 116px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 6px;
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SpaceInformationItems = () => {
  const imgSrc =
    'https://s3-alpha-sig.figma.com/img/b98f/5cbc/7ee7ad86e00fc614602856b17b864095?Expires=1678665600&Signature=HbJ7HW7bpCSn15l1skRWxnso-bEHf7Pj-flEPMNlFLi-uomOqytpoa13G7h0d-WVZGcBgnGkfsgJ8lFswrbr-gDqRto1bwBK0dG36Z~F88v23yAhlAfULkikP4SvNGo7v6GJfjr06dy2lcp45emP56zViOzUVlHesUyDcKkmg3lW~aoS9wsfNsp-iTWOPUL8P7x0b2taXIZlLYOWiWyQwDVG~AjER0dHxugcPycT1QtWrpHsEEQfbxtFTpTfx5X1rxcEh0UXG22sFTlMDXLzw-z1h53ndJ5elvgsSsGjrGMnObWPtWvxCa8pwbN0qABOoO7~LRL0~BRRmMpwguOlAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

  return (
    <Container>
      <Item>
        <ItemTitle size="small" weight="lighter">
          Name
        </ItemTitle>
        <BuilderTextInput />
      </Item>
      <Item>
        <ItemTitle size="small" weight="lighter">
          Space protection
        </ItemTitle>
        <SwitchRoot>
          <SwitchThumb />
        </SwitchRoot>
      </Item>
      <Item>
        <ItemTitle size="small" weight="lighter">
          Password
        </ItemTitle>
        <BuilderTextInput />
      </Item>
      <ItemFullWidth>
        <ItemTitle size="small" weight="lighter">
          Thumbnail
        </ItemTitle>
        <ThumbnailBox>
          <ThumbnailImage src={imgSrc} />
        </ThumbnailBox>
      </ItemFullWidth>
      <ItemFullWidth>
        <ItemTitle size="small" weight="lighter">
          Background music
        </ItemTitle>
        <MusicUpload />
      </ItemFullWidth>
    </Container>
  )
}
