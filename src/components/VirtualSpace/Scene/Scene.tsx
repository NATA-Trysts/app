import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useState } from 'react'

import { ChairInstance, DeskInstance } from '@/components/Furniture'
import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { Container } from '@/layouts/common'
import { useVirtualSpaceStore } from '@/stores'

import { MemberVideoLayout } from '../MemberVideoLayout'
// import { OtherMember } from '../OtherMember'

export const Scene = () => {
  const [spaceModels, setInteractable] = useVirtualSpaceStore((state) => [state.spaceModels, state.setInteractable])
  const [bodies, setBodies] = useState([])
  const [deskBodies, setDeskBodies] = useState([])

  useEffect(() => {
    let newBodies: any = []
    let newBodiesDesk: any = []
    const spacesModelsChair = spaceModels.filter((model: any) => model.type === 'chair')
    const spacesModelsDesk = spaceModels.filter((model: any) => model.type === 'desk')

    console.log('spaceModels', spaceModels)
    console.log('spaceModelsChair', spacesModelsChair)
    console.log('spaceModelsDesk', spacesModelsDesk)

    if (spacesModelsChair.length > 0) {
      newBodies = spacesModelsChair.map((model: any) => {
        return {
          key: model.uuid,
          position: [model.position.x, model.position.y - 2, model.position.z],
          rotation: [model.rotation.x, model.rotation.y, model.rotation.z],
          scale: [0.025, 0.025, 0.025],
        }
      })
    }

    if (spacesModelsDesk.length > 0) {
      newBodiesDesk = spacesModelsDesk.map((model: any) => {
        return {
          key: model.uuid,
          position: [model.position.x, model.position.y - 2, model.position.z],
          rotation: [model.rotation.x, model.rotation.y, model.rotation.z],
          scale: [0.025, 0.025, 0.025],
        }
      })
    }

    setBodies(newBodies)
    setDeskBodies(newBodiesDesk)
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
            <DeskInstance
              bodies={deskBodies}
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
