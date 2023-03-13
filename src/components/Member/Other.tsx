import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Group, Quaternion, Vector3 } from 'three'

import { BaseCharacter } from './BaseCharacter'
// import { BaseCharacterModel } from './BaseCharacterModel'

const nextPosition = new Vector3()
const nextQuaternion = new Quaternion()

type OtherProps = {
  position: [number, number, number]
  quaternion: [number, number, number, number]
  action: string
}

export const Other = (props: OtherProps) => {
  const playerRef = useRef<Group>(null)

  useEffect(() => {
    playerRef.current?.position.set(props.position[0], props.position[1], props.position[2])
  }, [])

  useFrame(({ gl, scene, camera }) => {
    if (playerRef.current) {
      nextPosition.fromArray(props.position)
      nextQuaternion.fromArray(props.quaternion)
      playerRef.current.position.lerp(nextPosition, 0.3)
      playerRef.current.quaternion.rotateTowards(nextQuaternion, 0.4)
    }

    gl.render(scene, camera)
  }, 3)

  return (
    <>
      <group ref={playerRef}>
        <BaseCharacter action={props.action} />
      </group>
      {/* <BaseCharacterModel ref={playerRef} action={props.action} /> */}
      {/* <Html>
        <video />
      </Html> */}
    </>
  )
}
