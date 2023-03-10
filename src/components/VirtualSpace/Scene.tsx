import { Canvas } from '@react-three/fiber'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Perf } from 'r3f-perf'

import { MainMember } from '@/components/Member'
import { Container } from '@/layouts/common'

import { OtherMember } from './OtherMember'
import { OtherMemberVideoReference } from './OtherMemberVideoReference'
import { RoomLeave } from './RoomLeave'

export const Scene = () => {
  return (
    <Container>
      <Canvas>
        <Perf />
        <ambientLight intensity={1} />
        <pointLight castShadow receiveShadow intensity={1} position={[0, 4, 0]} />
        <RoomLeave />
        <Physics gravity={[0, -9.82, 0]}>
          <Debug />
          <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
            <mesh castShadow receiveShadow>
              <planeGeometry args={[100, 100]} />
              <meshBasicMaterial color="pink" />
            </mesh>
          </RigidBody>
          <MainMember />
          <OtherMember />
        </Physics>
      </Canvas>
      <OtherMemberVideoReference />
    </Container>
  )
}
