import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'

import { Container } from '@/layouts/common'

import { MainMember } from '../Member/MainMember'
import OtherPlayers from '../Member/OtherMember'

export const Scene = () => {
  return (
    <Container>
      <Canvas>
        <ambientLight intensity={1} />
        <Physics gravity={[0, -9.82, 0]}>
          <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
            <mesh>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="pink" />
            </mesh>
          </RigidBody>
          <MainMember />
          <OtherPlayers />
        </Physics>
      </Canvas>
    </Container>
  )
}
