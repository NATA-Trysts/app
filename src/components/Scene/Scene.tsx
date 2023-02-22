import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { CharacterControl } from '@sonhaaa/3d-playground'

import { Container } from '@/layouts/common'

export const Scene = () => {
  return (
    <Container>
      <Canvas>
        <Physics gravity={[0, -9.82, 0]}>
          <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
            <mesh>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="pink" />
            </mesh>
          </RigidBody>
          <CharacterControl cameraPosition={[17, 6, 17]} initialPosition={[4, 5, 1]} polarAngle={[0.5, Math.PI / 2]}>
            <mesh>
              <boxGeometry args={[2, 4, 2]} />
              <meshNormalMaterial />
            </mesh>
          </CharacterControl>
        </Physics>
      </Canvas>
    </Container>
  )
}
