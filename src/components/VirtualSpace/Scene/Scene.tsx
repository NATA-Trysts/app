/* eslint-disable @typescript-eslint/no-unused-vars */
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Suspense, useState } from 'react'
import { Object3D } from 'three'

import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { Container } from '@/layouts/common'
import { useVirtualSpaceStore } from '@/stores'

import { MemberVideoLayout } from '../MemberVideoLayout'
import { OtherMember } from '../OtherMember'

export const Scene = () => {
  const [spaceModels, setInteractable] = useVirtualSpaceStore((state) => [state.spaceModels, state.setInteractable])
  const [target, setTarget] = useState<Object3D | null>(null)

  return (
    <Container>
      <MemberVideoLayout />
      <Canvas shadows dpr={[0.5, 0.5]}>
        {/* <Perf /> */}
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.7} />

          <Physics gravity={[0, -9.82, 0]}>
            <Debug />
            <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
              <mesh castShadow receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="pink" />
              </mesh>
            </RigidBody>
            <MainMember target={target} />
            <OtherMember />
          </Physics>
        </Suspense>
      </Canvas>
      <Hint />
    </Container>
  )
}
