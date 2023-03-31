import { selectIsPeerAudioEnabled, selectPeerByID, useHMSStore, useVideo } from '@100mslive/react-sdk'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ReactComponent as AudioOff } from '@/assets/icons/video-mic-off.svg'
import { ReactComponent as AudioOn } from '@/assets/icons/video-mic-on.svg'
import { NearestMember } from '@/stores'

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: url(https://cdn.jsdelivr.net/gh/NATA-Trysts/cdn@main/images/member-video-off.webp);
`

const MemberVideo = styled(motion.div)`
  width: 190px;
  height: 128px;
  border-radius: 8px;
  position: relative;

  > * {
    border-radius: inherit;
  }

  img {
    pointer-events: none;
  }
`

const MemberName = styled.div`
  max-width: 152px;
  height: 27px;
  padding: 4px 8px 4px 4px;
  border-radius: 0px 8px 0px 0px;
  background-color: var(--color-6);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: var(--color-2);

  position: absolute;
  bottom: 0;
  left: -1px;
`

const MemberIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: var(--color-6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 4px;
  right: 4px;
`

export const MemberVideoCard = ({ member }: { member: NearestMember }) => {
  const isAudioOn = useHMSStore(selectIsPeerAudioEnabled(member.peerId))
  const peer = useHMSStore(selectPeerByID(member.peerId))
  const { videoRef } = useVideo({
    trackId: peer?.videoTrack,
  })

  return (
    <MemberVideo
      animate={{
        opacity: member ? 1 : 0,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        delay: 0.2,
      }}
    >
      <Video ref={videoRef} autoPlay muted playsInline id={`video-ref-${member.peerId}`} />
      <MemberName>{member.id}</MemberName>
      <MemberIcon>{isAudioOn ? <AudioOn height={10} width={10} /> : <AudioOff height={10} width={10} />}</MemberIcon>
    </MemberVideo>
  )
}
