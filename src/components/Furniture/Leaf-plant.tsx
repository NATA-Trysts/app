/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/leaf-plant.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_18003: THREE.Mesh
    Ellipse001: THREE.Mesh
    Merged_Geometry029: THREE.Mesh
  }
  materials: {
    Material_75: THREE.MeshStandardMaterial
    Material_41: THREE.MeshStandardMaterial
    Material_12: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/leaf-plant-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.8, 0]} rotation={[0, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_18003.geometry}
          material={materials.Material_75}
          position={[18.85, -83.45, 10.99]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse001.geometry}
          material={materials.Material_41}
          position={[18.85, -36.13, 11.14]}
          rotation={[-Math.PI / 2, 0, 2.36]}
          scale={1.42}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Geometry029.geometry}
          material={materials.Material_12}
          position={[21.97, 13.55, -14.21]}
          rotation={[0, 0.61, 0]}
          scale={1.71}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/leaf-plant-transformed.glb')
