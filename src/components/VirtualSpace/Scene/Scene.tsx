import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useState } from 'react'

import { ChairInstance } from '@/components/Furniture'
import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { Container } from '@/layouts/common'
import { useVirtualSpaceStore } from '@/stores'

import { MemberVideoLayout } from '../MemberVideoLayout'
// import { OtherMember } from '../OtherMember'

export const Scene = () => {
  const [spaceModels, setInteractable] = useVirtualSpaceStore((state) => [state.spaceModels, state.setInteractable])
  const [bodies, setBodies] = useState([])

  useEffect(() => {
    let newBodies: any = []

    if (spaceModels.length > 0) {
      newBodies = spaceModels.map((model: any) => {
        return {
          key: model.uuid,
          position: [model.position.x, model.position.y - 2, model.position.z],
          rotation: [model.rotation.x, model.rotation.y, model.rotation.z],
          scale: [0.025, 0.025, 0.025],
        }
      })
    }

    setBodies(newBodies)
  }, [spaceModels])

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
