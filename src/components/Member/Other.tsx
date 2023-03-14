import { selectLocalPeer, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Group, Mesh, Quaternion, Vector3, VideoTexture } from 'three'

import { BaseCharacter } from './BaseCharacter'

const nextPosition = new Vector3()
const nextQuaternion = new Quaternion()

type OtherProps = {
  position: [number, number, number]
  quaternion: [number, number, number, number]
  action: string
  id: string
}

const VIDEO_WIDTH = 2

export const Other = (props: OtherProps) => {
  const playerRef = useRef<Group>(null)
  const videoFrame = useRef<Mesh>(null)
  const [videoTexture, setVideoTexture] = useState<VideoTexture>()

  useEffect(() => {
    playerRef.current?.position.set(props.position[0], props.position[1], props.position[2])
  }, [])

  const [tempTexture] = useTexture([
    'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
  ])

  const hmsActions = useHMSActions()
  const peers = useHMSStore(selectLocalPeer)

  useEffect(() => {
    const videoElement = document.getElementById(`video-ref-${props.id}`) as HTMLVideoElement

    if (peers && peers.videoTrack && videoElement) {
      hmsActions.attachVideo(peers.videoTrack, videoElement)
      setVideoTexture(new VideoTexture(videoElement))
    }
  }, [peers])

  useFrame(({ gl, scene, camera }) => {
    if (playerRef.current) {
      nextPosition.fromArray(props.position)
      nextQuaternion.fromArray(props.quaternion)
      playerRef.current.position.lerp(nextPosition, 0.3)
      playerRef.current.quaternion.rotateTowards(nextQuaternion, 0.4)
    }
    if (videoFrame.current) videoFrame.current.lookAt(camera.position)

    gl.render(scene, camera)
  }, 3)

  return (
    <>
      <group ref={playerRef}>
        <BaseCharacter action={props.action} />
        <mesh ref={videoFrame} position={[0, 4.5, 0]}>
          <planeGeometry args={[VIDEO_WIDTH, (VIDEO_WIDTH * 3) / 4]} />
          <meshBasicMaterial transparent map={videoTexture || tempTexture} />
        </mesh>
      </group>
    </>
  )
}
