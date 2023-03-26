import styled from 'styled-components'

type VideoReferenceProps = {
  id: string
}

const Container = styled.video`
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
`

export const VideoReference = (props: VideoReferenceProps) => {
  return <Container autoPlay muted playsInline id={props.id} />
}
