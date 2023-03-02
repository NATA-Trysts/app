import styled from 'styled-components'

import { Text } from '@/layouts/common'

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
  const music = ''
  const handleClick = () => {}

  return (
    <MusicUploadContainer onClick={handleClick}>
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
  )
}
