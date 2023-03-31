import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useVirtualSpaceStore, VideoLayoutType } from '@/stores'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Name = styled(Text)`
  color: #727272;
`

const LayoutOption = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 124px;
  border: 3px solid ${({ isActive }) => (isActive ? '#c771e1' : 'transparent')};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: border, opacity 0.2s ease;

  &:hover {
    border: 3px solid #c771e1;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};
  }
`

const LayoutOptionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const listLayout = [
  {
    id: 1,
    type: 'above-head' as VideoLayoutType,
    img: 'https://a.pinatafarm.com/1092x612/d47afa3656/coughing-cat-dcbc3e50b235f7aa3793bfa07959fb7a-meme.jpeg',
  },
  {
    id: 2,
    type: 'slide' as VideoLayoutType,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvui8g67c6OlpRUVI8n_BKt0guaL0gMdCNQNzoRNKf&s',
  },
] as const

export const VideoLayout = () => {
  const [videoLayout, setVideoLayout] = useVirtualSpaceStore((state) => [state.videoLayout, state.setVideoLayout])

  return (
    <Container>
      <Name size="small" weight="lighter">
        Video layout
      </Name>
      {listLayout.map((layout) => (
        <LayoutOption
          key={layout.id}
          isActive={videoLayout === layout.type}
          onClick={() => setVideoLayout(layout.type)}
        >
          <LayoutOptionImage src={layout.img} />
        </LayoutOption>
      ))}
    </Container>
  )
}
