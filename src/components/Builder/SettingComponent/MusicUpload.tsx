import { useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

const Container = styled.div`
  width: 100%;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`

const ItemTitle = styled(Text)`
  color: #727272;
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

export const MusicUpload = () => {
  const [music, setMusic] = useState<string | null>(null)

  const handleClick = () => {}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]

      if (file.size > 1024 * 1024 * 2) {
        // TODO: add notification

        return
      }

      setMusic(file.name)
    }
  }

  return (
    <Container onClick={handleClick}>
      <ItemTitle size="small" weight="lighter">
        Background music
      </ItemTitle>
      <MusicUploadContainer>
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
      </MusicUploadContainer>
    </Container>
  )
}
