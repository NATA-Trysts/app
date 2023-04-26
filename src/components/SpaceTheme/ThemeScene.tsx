/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas } from '@react-three/fiber'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'

import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { Container } from '@/layouts/common'

import { MemberVideoLayout } from '../VirtualSpace/MemberVideoLayout'
import { OtherMember } from '../VirtualSpace/OtherMember'
import { City } from './City'

// import { MemberVideoLayout } from '../MemberVideoLayout'
// import { OtherMember } from '../OtherMember'

export const ThemeScene = () => {
  return (
    <Container>
      <MemberVideoLayout />
      <Suspense fallback={null}>
        <Canvas flat linear shadows dpr={[0.25, 0.25]}>
          <Perf />
          {/* <Environment preset="studio" /> */}
          {/* <ambientLight intensity={0.7} /> */}

          <City />

          {/* <Physics gravity={[0, -9.82, 0]}> */}
          {/* <RigidBody colliders="cuboid" type="fixed"> */}
          {/* <Island /> */}
          {/* </RigidBody> */}

          {/* <Debug />
            <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
              <mesh castShadow receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="pink" />
              </mesh>
            </RigidBody>
            <MainMember />
            <OtherMember />
          </Physics> */}
        </Canvas>
      </Suspense>
      <Hint />
    </Container>
  )
}
