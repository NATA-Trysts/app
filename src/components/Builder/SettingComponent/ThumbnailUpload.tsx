import { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as UploadIcon } from '@/assets/icons/thumbnail-upload.svg'
import { Text } from '@/components/Commons'
import { useNotification } from '@/hooks'

const Container = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ItemTitle = styled(Text)`
  color: #727272;
`

const SizeWarning = styled(Text)`
  color: #4d4c4c;
  font-size: 10px;
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

const ImageInput = styled.input`
  width: 208px;
  height: 116px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  cursor: pointer;
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
  const [image, setImage] = useState(
    'https://imageio.forbes.com/specials-images/imageserve/61f9a4549faaf4bcb6435f23/gathertownhero/0x0.jpg?format=jpg&height=964&width=1920&fit=crop',
  )

  const { addNotification } = useNotification()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]

      if (file.size > 1024 * 1024 * 2) {
        addNotification('error', 'File size is too large')
      } else {
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onload = () => {
          setImage(reader.result as string)
        }
      }
    }
  }

  return (
    <Container>
      <TitleWrapper>
        <ItemTitle size="small" weight="lighter">
          Thumbnail
        </ItemTitle>
        <SizeWarning size="small" weight="lighter">
          Less then 2MB
        </SizeWarning>
      </TitleWrapper>
      <ThumbnailBox>
        <Overlay>
          <UploadIcon />
          <ImageInput
            accept="image/png, image/jpeg"
            multiple={false}
            name="file"
            title=" "
            type="file"
            onChange={handleChange}
          />
        </Overlay>
        <ThumbnailImage src={image} />
      </ThumbnailBox>
    </Container>
  )
}
