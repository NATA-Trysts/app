/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/pear-tree.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_2012: THREE.Mesh
    Cube_3006: THREE.Mesh
    Cylinder010: THREE.Mesh
  }
  materials: {
    Material_12: THREE.MeshStandardMaterial
    Material_84: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/pear-tree-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 5, 0]} scale={0.025}>
        <group position={[-17.99, -13.72, 1.95]} scale={0.81}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2012.geometry}
            material={materials.Material_12}
            position={[41.3, 126.74, 7.05]}
            rotation={[0, 0, -0.17]}
            scale={1.3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3006.geometry}
            material={materials.Material_12}
            position={[-107.88, -0.26, 2.21]}
            rotation={[0, 0, 0.22]}
            scale={1.3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials.Material_84}
            position={[3.55, -112.04, -7.6]}
            scale={1.3}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/pear-tree-transformed.glb')
