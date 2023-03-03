import styled from 'styled-components'

import { ReactComponent as UploadIcon } from '@/assets/icons/thumbnail-upload.svg'
import { Text } from '@/layouts/common'

const Container = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`

const ItemTitle = styled(Text)`
  color: #727272;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const ThumbnailBox = styled.div`
  width: 100%;
  height: 116px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 6px;
  position: relative;

  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ThumbnailUpload = () => {
  const imgSrc =
    'https://s3-alpha-sig.figma.com/img/b98f/5cbc/7ee7ad86e00fc614602856b17b864095?Expires=1678665600&Signature=HbJ7HW7bpCSn15l1skRWxnso-bEHf7Pj-flEPMNlFLi-uomOqytpoa13G7h0d-WVZGcBgnGkfsgJ8lFswrbr-gDqRto1bwBK0dG36Z~F88v23yAhlAfULkikP4SvNGo7v6GJfjr06dy2lcp45emP56zViOzUVlHesUyDcKkmg3lW~aoS9wsfNsp-iTWOPUL8P7x0b2taXIZlLYOWiWyQwDVG~AjER0dHxugcPycT1QtWrpHsEEQfbxtFTpTfx5X1rxcEh0UXG22sFTlMDXLzw-z1h53ndJ5elvgsSsGjrGMnObWPtWvxCa8pwbN0qABOoO7~LRL0~BRRmMpwguOlAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

  return (
    <Container>
      <ItemTitle size="small" weight="lighter">
        Thumbnail
      </ItemTitle>
      <ThumbnailBox>
        <Overlay>
          <UploadIcon />
        </Overlay>
        <ThumbnailImage src={imgSrc} />
      </ThumbnailBox>
    </Container>
  )
}
