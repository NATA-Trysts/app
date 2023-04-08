import { selectRemotePeers, useHMSStore } from '@100mslive/react-sdk'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useEffect, useRef, useState } from 'react'
import { Group, Mesh, Quaternion, Vector3, VideoTexture } from 'three'

import { useVirtualSpaceStore } from '@/stores'

import { OtherCharacter } from './OtherCharacter'
// import { BaseCharacter } from './BaseCharacter'

const nextPosition = new Vector3()
const nextQuaternion = new Quaternion()

type OtherProps = {
  position: [number, number, number]
  quaternion: [number, number, number, number]
  action: string
  peerId: string
  onIntersectEnter: () => void
  onIntersectExit: () => void
  isNearestMember: boolean
}

const VIDEO_WIDTH = 2

export const Other = (props: OtherProps) => {
  const playerRef = useRef<Group>(null)
  const videoFrame = useRef<Mesh>(null)
  const [videoTexture, setVideoTexture] = useState<VideoTexture>()
  const remotePeers = useHMSStore(selectRemotePeers)
  const [videoLayout, isEditAvatar] = useVirtualSpaceStore((state) => [state.videoLayout, state.isEditAvatar])
  const rigRef = useRef<RapierRigidBody>(null)

  useEffect(() => {
    playerRef.current?.position.set(props.position[0], props.position[1], props.position[2])
  }, [])

  const [tempTexture] = useTexture([
    'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
  ])

  useEffect(() => {
    const videoElement = document.getElementById(`video-ref-${props.peerId}`) as HTMLVideoElement

    if (videoElement && videoFrame.current) setVideoTexture(new VideoTexture(videoElement))
  }, [remotePeers, props.peerId, props.isNearestMember])

  useFrame(({ camera }) => {
    if (playerRef.current) {
      nextPosition.fromArray(props.position)
      nextQuaternion.fromArray(props.quaternion)
      playerRef.current.position.lerp(nextPosition, 0.3)
      playerRef.current.quaternion.rotateTowards(nextQuaternion, 0.4)

      rigRef.current?.setTranslation(
        {
          x: playerRef.current.position.x,
          y: playerRef.current.position.y,
          z: playerRef.current.position.z,
        },
        true,
      )
    }
    if (videoFrame.current) videoFrame.current.lookAt(camera.position)
  })

  return (
    <>
      <group ref={playerRef}>
        <OtherCharacter action={props.action} />
        {props.isNearestMember && videoLayout === 'above-head' && !isEditAvatar ? (
          <mesh ref={videoFrame} position={[0, 4.5, 0]}>
            <planeGeometry args={[VIDEO_WIDTH, (VIDEO_WIDTH * 3) / 4]} />
            <meshBasicMaterial map={videoTexture || tempTexture} />
          </mesh>
        ) : null}
      </group>
      <RigidBody ref={rigRef} lockTranslations colliders="cuboid" type="dynamic">
        <CuboidCollider
          sensor
          args={[2, 2, 2]}
          onIntersectionEnter={props.onIntersectEnter}
          onIntersectionExit={props.onIntersectExit}
        />
      </RigidBody>
    </>
  )
}
