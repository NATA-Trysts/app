/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/bath.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_75: THREE.Mesh
    Cube_80001: THREE.Mesh
    Cube_4007: THREE.Mesh
    Cube_4008: THREE.Mesh
  }
  materials: {
    Material_2: THREE.MeshStandardMaterial
    Material_38: THREE.MeshStandardMaterial
    Material_4: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/bath-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1, 0]} scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_75.geometry}
          material={materials.Material_2}
          position={[0, -3.35, -6.64]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_80001.geometry}
          material={materials.Material_38}
          position={[-68.1, 5.78, 47.24]}
          rotation={[-2.97, 0, Math.PI]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/bath-transformed.glb')
