import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
  // Debug,
  Physics,
  RigidBody,
} from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'

import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { Container } from '@/layouts/common'

import { MemberVideoLayout } from '../MemberVideoLayout'
import { OtherMember } from '../OtherMember'

export const Scene = () => {
  return (
    <Container>
      <MemberVideoLayout />
      <Canvas dpr={[0.25, 0.25]}>
        <Perf />
        {/* <Stats  /> */}

        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.7} />

          <Physics gravity={[0, -9.82, 0]}>
            {/* <Debug /> */}
            <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
              <mesh castShadow receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="pink" />
              </mesh>
            </RigidBody>
            <MainMember />
            <OtherMember />
          </Physics>
        </Suspense>
      </Canvas>
      <Hint />
    </Container>
  )
}
