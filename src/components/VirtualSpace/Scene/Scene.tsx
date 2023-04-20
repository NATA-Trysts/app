import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Debug, InstancedRigidBodyProps, Physics, RigidBody } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { Suspense, useMemo } from 'react'

import { ChairInstance } from '@/components/Furniture'
import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { Container } from '@/layouts/common'
import { useVirtualSpaceStore } from '@/stores'

import { MemberVideoLayout } from '../MemberVideoLayout'
// import { OtherMember } from '../OtherMember'

const createBody = (): InstancedRigidBodyProps => ({
  key: Math.random(),
  position: [Math.random() * 40, -2, Math.random() * 40],
  rotation: [0, 0, 0],
  scale: [0.025, 0.025, 0.025],
})

export const Scene = () => {
  const setInteractable = useVirtualSpaceStore((state) => state.setInteractable)

  const bodies = useMemo(
    () =>
      Array.from({
        length: 10,
      }).map(() => createBody()),
    [],
  )

  return (
    <Container>
      <MemberVideoLayout />
      <Canvas dpr={[0.25, 0.25]}>
        <Perf />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.7} />

          <Physics gravity={[0, -9.82, 0]}>
            <ChairInstance
              bodies={bodies}
              onCollisionEnter={() => setInteractable(true)}
              onCollisionExit={() => setInteractable(false)}
            />
            <Debug />
            <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
              <mesh castShadow receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="pink" />
              </mesh>
            </RigidBody>
            <MainMember />
            {/* <OtherMember /> */}
          </Physics>
        </Suspense>
      </Canvas>
      <Hint />
    </Container>
  )
}
