import { useGLTF } from '@react-three/drei'
import { CollisionEnterHandler, InstancedRigidBodies, InstancedRigidBodyProps } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import { Color, InstancedMesh } from 'three'
import { GLTF } from 'three-stdlib'

import { JSDELIVR_URL } from '@/libs/constants'

const MAX_COUNT = 10

type GLTFResult = GLTF & {
  nodes: {
    chair: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

type FurnitureInstance = {
  bodies: InstancedRigidBodyProps[]
  onCollisionEnter: CollisionEnterHandler
  onCollisionExit: () => void
}

export const ChairInstance = ({ bodies, onCollisionEnter, onCollisionExit }: FurnitureInstance) => {
  const { nodes } = useGLTF(`${JSDELIVR_URL}/models-transform/chair.glb`) as GLTFResult

  const ref = useRef<InstancedMesh>(null)

  useEffect(() => {
    if (ref.current) {
      for (let i = 0; i < MAX_COUNT; i++) {
        ref.current!.setColorAt(i, new Color(Math.random() * 0xffffff))
      }
      ref.current!.instanceColor!.needsUpdate = true
    }
  }, [])

  return (
    <group>
      <InstancedRigidBodies
        colliders="cuboid"
        instances={bodies}
        sensor={false}
        type="fixed"
        onCollisionEnter={onCollisionEnter}
        onCollisionExit={onCollisionExit}
      >
        <instancedMesh ref={ref} castShadow args={[nodes.chair.geometry, undefined, MAX_COUNT]} count={bodies.length}>
          <meshPhysicalMaterial />
        </instancedMesh>
      </InstancedRigidBodies>
    </group>
  )
}
