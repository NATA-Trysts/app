import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Suspense } from 'react'

import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { Container } from '@/layouts/common'

import { MemberVideoLayout } from '../MemberVideoLayout'
import { MemberVideoReference } from '../MemberVideoReference'
import { OtherMember } from '../OtherMember'
import { Loading } from './Loading'

export const Scene = () => {
  return (
    <Container>
      <MemberVideoLayout />
      <Canvas>
        <Suspense fallback={<Loading />}>
          <ambientLight intensity={1} />
          <pointLight castShadow receiveShadow intensity={1} position={[0, 4, 0]} />
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
      <MemberVideoReference />
      <Hint />
    </Container>
  )
}
