import { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as UploadIcon } from '@/assets/icons/thumbnail-upload.svg'
import { Text } from '@/components/Commons'

const MaterialSectionContainer = styled.div`
  width: 100%;
  margin: 16px 0;
  transition: opacity 0.2s ease;
`

const Title = styled(Text)`
  display: inline-block;
  margin-bottom: 8px;
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
  width: 100%;
  height: 178px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  cursor: pointer;
`

const MaterialBox = styled.div`
  width: 100%;
  height: 178px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 6px;
  position: relative;
  cursor: pointer;

  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`

const MaterialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const imageTemp =
  'https://p.turbosquid.com/ts-thumb/C3/gTzWfL/mr/proceduralmaterialpack5/jpg/1642958199/600x600/fit_q87/fd1a0c74d3e2829a3b04846dac6b7ea3fd370a97/proceduralmaterialpack5.jpg'

export const MaterialSection = () => {
  const [image, setImage] = useState(imageTemp)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]

      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = () => {
        setImage(reader.result as string)
      }
    }
  }

  return (
    <MaterialSectionContainer>
      <Title size="medium" weight="normal">
        Material
      </Title>
      <MaterialBox>
        <Overlay>
          <UploadIcon />
          <ImageInput
            accept="image/png, image/jpeg"
            multiple={false}
            name="file"
            title=" "
            type="file"
            onChange={handleImageChange}
          />
        </Overlay>
        <MaterialImage src={image} />
      </MaterialBox>
    </MaterialSectionContainer>
  )
}
