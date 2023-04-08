import { selectPeerByID, useHMSStore, useVideo } from '@100mslive/react-sdk'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import { Group, Quaternion, Vector3 } from 'three'

import { useVirtualSpaceStore } from '@/stores'

import { OtherCharacter } from './OtherCharacter'

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

export const Vid = ({ peerId }: { peerId: string | undefined }) => {
  const peer = useHMSStore(selectPeerByID(peerId))
  const { videoRef } = useVideo({
    trackId: peer?.videoTrack,
  })

  return (
    <>
      {peer && (
        <Html center position={[0, 5, 0]}>
          <div
            style={{
              width: 200,
              height: 150,
              backgroundColor: 'red',
              borderRadius: 20,
              overflow: 'hidden',
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 90 }}
            ></video>
          </div>
        </Html>
      )}
    </>
  )
}

export const Other = (props: OtherProps) => {
  const playerRef = useRef<Group>(null)
  const [videoLayout, isEditAvatar] = useVirtualSpaceStore((state) => [state.videoLayout, state.isEditAvatar])
  const rigRef = useRef<RapierRigidBody>(null)

  useEffect(() => {
    playerRef.current?.position.set(props.position[0], props.position[1], props.position[2])
  }, [])

  useFrame(() => {
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
  })

  return (
    <>
      <group ref={playerRef}>
        <OtherCharacter action={props.action} />
        {props.isNearestMember && videoLayout === 'above-head' && !isEditAvatar ? (
          <Vid key={props.peerId} peerId={props.peerId} />
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
