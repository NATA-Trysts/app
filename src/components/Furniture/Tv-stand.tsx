/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/tv-stand.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_61001: THREE.Mesh
    Cube_62001: THREE.Mesh
    Cylinder_13001: THREE.Mesh
    Cylinder_14001: THREE.Mesh
    Ellipse: THREE.Mesh
    Ellipse_2002: THREE.Mesh
    Merged_Geometry_2001: THREE.Mesh
    Cube_60001: THREE.Mesh
    Merged_Geometry011: THREE.Mesh
    Cube_58: THREE.Mesh
    Cube_59001: THREE.Mesh
    Cube_60: THREE.Mesh
    Cube_62: THREE.Mesh
    Merged_Geometry005: THREE.Mesh
  }
  materials: {
    Material_25: THREE.MeshStandardMaterial
    Material_2: THREE.MeshStandardMaterial
    Material_53: THREE.MeshStandardMaterial
    Material_51: THREE.MeshStandardMaterial
    Material_43: THREE.MeshStandardMaterial
    Material_0: THREE.MeshStandardMaterial
    Material_40: THREE.MeshStandardMaterial
    Material_41: THREE.MeshStandardMaterial
    Material_42: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/tv-stand-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.8, 0]} scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_60001.geometry}
          material={materials.Material_43}
          position={[-49.23, -1.96, 86.51]}
        />
        <mesh castShadow receiveShadow geometry={nodes.Merged_Geometry011.geometry} material={materials.Material_0} />
      </group>
      <group position={[0, 3, 0]} scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_58.geometry}
          material={materials.Material_40}
          position={[8.37, -27.85, -0.89]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_59001.geometry}
          material={materials.Material_41}
          position={[8.37, -27.85, -0.89]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_60.geometry}
          material={materials.Material_42}
          position={[8.37, -28.09, -0.92]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_62.geometry}
          material={materials.Material_40}
          position={[-19.33, -63.01, -1.68]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Geometry005.geometry}
          material={materials.Material_40}
          position={[3.38, 52.36, 9.76]}
          scale={1.18}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/tv-stand-transformed.glb')
