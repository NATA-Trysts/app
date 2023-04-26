/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/park-bench.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Merged_Geometry_2010: THREE.Mesh
    Merged_Geometry041: THREE.Mesh
  }
  materials: {
    Material_27: THREE.MeshStandardMaterial
    Material_50: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/park-bench-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.33, 0]} rotation={[0, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Geometry_2010.geometry}
          material={materials.Material_27}
          position={[0.33, -1.05, -2.55]}
          rotation={[0, -0.87, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Geometry041.geometry}
          material={materials.Material_50}
          position={[0, 12.38, 0.08]}
          rotation={[0, -0.87, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/park-bench-transformed.glb')
