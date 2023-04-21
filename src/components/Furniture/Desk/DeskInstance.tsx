import { useGLTF } from '@react-three/drei'
import {
  CollisionEnterHandler,
  CollisionExitHandler,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
} from '@react-three/rapier'
import { GLTF } from 'three-stdlib'

const MAX_COUNT = 10

type GLTFResult = GLTF & {
  nodes: {
    Mesh_83001: THREE.Mesh
    Mesh_83001_1: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

type FurnitureInstance = {
  bodies: InstancedRigidBodyProps[]
  onCollisionEnter: CollisionEnterHandler
  onCollisionExit: CollisionExitHandler
}

export const DeskInstance = ({ bodies, onCollisionEnter, onCollisionExit }: FurnitureInstance) => {
  const { nodes, materials } = useGLTF('/models/d-transformed.glb') as GLTFResult

  return (
    <group name="desk">
      <InstancedRigidBodies
        colliders="cuboid"
        instances={bodies}
        type="fixed"
        onCollisionEnter={onCollisionEnter}
        onCollisionExit={onCollisionExit}
      >
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Mesh_83001_1.geometry, materials.Material, MAX_COUNT]}
          count={bodies.length}
        />
      </InstancedRigidBodies>
      <InstancedRigidBodies
        colliders="cuboid"
        instances={bodies}
        type="fixed"
        onCollisionEnter={onCollisionEnter}
        onCollisionExit={onCollisionExit}
      >
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Mesh_83001.geometry, materials['Material.001'], MAX_COUNT]}
          count={bodies.length}
        />
      </InstancedRigidBodies>
    </group>
  )
}
