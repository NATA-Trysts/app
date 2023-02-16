import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Container } from '@/layouts/common'

export const Scene = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </Container>
  )
}
