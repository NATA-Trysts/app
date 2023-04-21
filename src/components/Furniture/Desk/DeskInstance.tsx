import { useGLTF } from '@react-three/drei'
import {
  CollisionEnterHandler,
  CollisionExitHandler,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
} from '@react-three/rapier'
import { GLTF } from 'three-stdlib'

import { JSDELIVR_URL } from '@/libs/constants'

const MAX_COUNT = 10

type GLTFResult = GLTF & {
  nodes: {
    Rectangle_6002: THREE.Mesh
    Rectangle_6003: THREE.Mesh
    Rectangle_5004: THREE.Mesh
    Rectangle_4002: THREE.Mesh
    Rectangle_3001: THREE.Mesh
    Merged_Geometry001: THREE.Mesh
    Merged_Geometry_10001: THREE.Mesh
    Ellipse_2001: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cube003: THREE.Mesh
    Cube_7006: THREE.Mesh
    Cube_7007: THREE.Mesh
    Cube_7008: THREE.Mesh
    Cube_6003: THREE.Mesh
    Cube_5005: THREE.Mesh
    Cube_5006: THREE.Mesh
    Cube_4005: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

type FurnitureInstance = {
  bodies: InstancedRigidBodyProps[]
  onCollisionEnter: CollisionEnterHandler
  onCollisionExit: CollisionExitHandler
}

export const DeskInstance = ({ bodies, onCollisionEnter, onCollisionExit }: FurnitureInstance) => {
  const { nodes, materials } = useGLTF(`${JSDELIVR_URL}/models-transform/desk.glb`) as GLTFResult

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
          args={[nodes.Rectangle_6002.geometry, nodes.Rectangle_6002.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Rectangle_6003.geometry, nodes.Rectangle_6003.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Rectangle_5004.geometry, nodes.Rectangle_5004.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Rectangle_4002.geometry, nodes.Rectangle_4002.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Rectangle_3001.geometry, nodes.Rectangle_3001.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Merged_Geometry001.geometry, materials['Material.001'], MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Merged_Geometry_10001.geometry, nodes.Merged_Geometry_10001.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Ellipse_2001.geometry, nodes.Ellipse_2001.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cylinder001.geometry, nodes.Cylinder001.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cube003.geometry, nodes.Cube003.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cube_7006.geometry, nodes.Cube_7006.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cube_7007.geometry, nodes.Cube_7007.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cube_7008.geometry, nodes.Cube_7008.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cube_6003.geometry, nodes.Cube_6003.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cube_5005.geometry, nodes.Cube_5005.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cube_5006.geometry, nodes.Cube_5006.material, MAX_COUNT]}
          count={bodies.length}
        />
        <instancedMesh
          castShadow
          receiveShadow
          args={[nodes.Cube_4005.geometry, nodes.Cube_4005.material, MAX_COUNT]}
          count={bodies.length}
        />
      </InstancedRigidBodies>
    </group>
  )
}
