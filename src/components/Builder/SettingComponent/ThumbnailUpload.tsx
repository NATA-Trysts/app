import axios from 'axios'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { ReactComponent as UploadIcon } from '@/assets/icons/thumbnail-upload.svg'
import { Text } from '@/components/Commons'
import { useNotification } from '@/hooks'
import { useBuilderStore } from '@/stores'

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

const uploadPreset = 'trysts'
const cloudName = 'dyarbccg4'

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerContainer = styled.div`
  & {
    display: inline-block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    margin: 4px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: ${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerContainer>
  )
}

export const ThumbnailUpload = () => {
  const [spaceInformation, setSpaceInformation] = useBuilderStore((state) => [
    state.spaceInformation,
    state.setSpaceInformation,
  ])

  const [isLoading, setIsLoading] = useState(false)

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
          setIsLoading(true)

          const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
          const formData = new FormData()

          formData.append('file', reader.result as string)
          formData.append('upload_preset', uploadPreset)

          axios
            .post(url, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((res) => {
              setSpaceInformation({
                ...spaceInformation,
                thumbnail: res.data.secure_url,
              })
              setIsLoading(false)
            })
            .catch((err) => {
              console.error(err)
            })
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
        {isLoading ? (
          <Spinner />
        ) : (
          <>
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
            <ThumbnailImage
              src={
                spaceInformation.thumbnail ||
                'https://htmlcolorcodes.com/assets/images/colors/black-color-solid-background-1920x1080.png'
              }
            />
          </>
        )}
      </ThumbnailBox>
    </Container>
  )
}
