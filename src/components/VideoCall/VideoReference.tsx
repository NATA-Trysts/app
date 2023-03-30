import styled from 'styled-components'

type VideoReferenceProps = {
  id: string
}

const Container = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: red;
`

export const VideoReference = (props: VideoReferenceProps) => {
  return <Container autoPlay muted playsInline id={props.id} />
}
