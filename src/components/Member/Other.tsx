import { selectRemotePeers, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Group, Mesh, Quaternion, Vector3, VideoTexture } from 'three'

import { useVirtualSpaceStore } from '@/stores'

import { BaseCharacter } from './BaseCharacter'

const nextPosition = new Vector3()
const nextQuaternion = new Quaternion()

type OtherProps = {
  position: [number, number, number]
  quaternion: [number, number, number, number]
  action: string
  peerId: string
}

const VIDEO_WIDTH = 2

export const Other = (props: OtherProps) => {
  const playerRef = useRef<Group>(null)
  const videoFrame = useRef<Mesh>(null)
  const [videoTexture, setVideoTexture] = useState<VideoTexture>()
  const hmsActions = useHMSActions()
  const remotePeers = useHMSStore(selectRemotePeers)
  const [videoLayout, isEditAvatar] = useVirtualSpaceStore((state) => [state.videoLayout, state.isEditAvatar])

  useEffect(() => {
    playerRef.current?.position.set(props.position[0], props.position[1], props.position[2])
  }, [])

  const [tempTexture] = useTexture([
    'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
  ])

  useEffect(() => {
    const videoElement = document.getElementById(`video-ref-${props.peerId}`) as HTMLVideoElement
    const filteredRemotePeer = remotePeers.filter((peer) => peer.id === props.peerId)[0]

    if (filteredRemotePeer && filteredRemotePeer.videoTrack && videoElement) {
      hmsActions.attachVideo(filteredRemotePeer.videoTrack, videoElement)
      setVideoTexture(new VideoTexture(videoElement))
    }
  }, [remotePeers])

  useFrame(({ camera }) => {
    if (playerRef.current) {
      nextPosition.fromArray(props.position)
      nextQuaternion.fromArray(props.quaternion)
      playerRef.current.position.lerp(nextPosition, 0.3)
      playerRef.current.quaternion.rotateTowards(nextQuaternion, 0.4)
    }
    if (videoFrame.current) videoFrame.current.lookAt(camera.position)
  })

  return (
    <>
      <group ref={playerRef}>
        <BaseCharacter action={props.action} />
        {videoLayout === 'above-head' && !isEditAvatar ? (
          <mesh ref={videoFrame} position={[0, 4.5, 0]}>
            <planeGeometry args={[VIDEO_WIDTH, (VIDEO_WIDTH * 3) / 4]} />
            <meshBasicMaterial map={videoTexture || tempTexture} toneMapped={true} />
          </mesh>
        ) : null}
      </group>
    </>
  )
}
