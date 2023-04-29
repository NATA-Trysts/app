import axios from 'axios'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { Text } from '@/components/Commons'
import { useNotification } from '@/hooks'
import { useBuilderStore } from '@/stores'

const Container = styled.div`
  width: 100%;
  margin: 8px 0;
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

const UploadButton = styled.div`
  width: 52px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
`

const MusicUploadContainer = styled.button`
  width: 100%;
  height: 28px;
  background-color: #37393e;
  border: none;
  border-radius: 6px;
  margin-top: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding-left: 8px;

  &:hover {
    ${UploadButton} {
      opacity: 1;
    }
  }
`

const AudioInput = styled.input`
  width: 208px;
  height: 28px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  cursor: pointer;
`

const Placeholder = styled(Text)`
  color: #727272;
`

const Name = styled(Text)`
  max-width: 141px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

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

const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

export const MusicUpload = () => {
  const [spaceInformation, setSpaceInformation] = useBuilderStore((state) => [
    state.spaceInformation,
    state.setSpaceInformation,
  ])

  const [isLoading, setIsLoading] = useState(false)
  const [music, setMusic] = useState('')

  const handleClick = () => {}

  const { addNotification } = useNotification()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]

      if (file.size > 1024 * 1024 * 2) {
        addNotification('error', 'File size is too large')
      } else {
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
        const formData = new FormData()

        setIsLoading(true)
        formData.append('file', file)
        formData.append('upload_preset', uploadPreset)
        axios
          .post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            setMusic(file.name)
            setSpaceInformation({
              ...spaceInformation,
              backgroundMusic: res.data.secure_url,
            })
            setIsLoading(false)
          })
          .catch((err) => {
            console.error(err)
            setIsLoading(false)
          })
      }
    }
  }

  return (
    <Container onClick={handleClick}>
      <TitleWrapper>
        <ItemTitle size="small" weight="lighter">
          Background music
        </ItemTitle>
        <SizeWarning size="small" weight="lighter">
          Less than 2MB
        </SizeWarning>
      </TitleWrapper>
      <MusicUploadContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <AudioInput accept="audio/*" multiple={false} name="file" title=" " type="file" onChange={handleChange} />
            {music ? (
              <Name size="small" weight="lighter">
                {music}
              </Name>
            ) : (
              <Placeholder size="small" weight="lighter">
                Upload your music
              </Placeholder>
            )}
            <UploadButton>
              <Text size="small" weight="lighter">
                Upload
              </Text>
            </UploadButton>
          </>
        )}
      </MusicUploadContainer>
    </Container>
  )
}
