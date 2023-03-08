import { Canvas } from '@react-three/fiber'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { useEffect } from 'react'

import { MainMember } from '@/components/Member/MainMember'
import OtherPlayers from '@/components/Member/OtherMember'
import { Container } from '@/layouts/common'
import { useNetworkStore } from '@/stores'

export const Scene = () => {
  const roomInstance = useNetworkStore((state) => state.roomInstance)

  useEffect(() => {
    return () => {
      roomInstance?.leave()
    }
  }, [roomInstance])

  return (
    <Container>
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight castShadow receiveShadow intensity={1} position={[0, 4, 0]} />
        <Physics gravity={[0, -9.82, 0]}>
          <Debug />
          <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
            <mesh castShadow receiveShadow>
              <planeGeometry args={[100, 100]} />
              <meshBasicMaterial color="pink" />
            </mesh>
          </RigidBody>
          <MainMember />
          <OtherPlayers />
        </Physics>
      </Canvas>
    </Container>
  )
}
