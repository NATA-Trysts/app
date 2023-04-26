/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/wall-layout-home.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Merged_Geometry_2007: THREE.Mesh
    Merged_Geometry036: THREE.Mesh
    Merged_Geometry_2008: THREE.Mesh
    Merged_Geometry037: THREE.Mesh
    Cube_81001: THREE.Mesh
    Merged_Geometry_5: THREE.Mesh
    Merged_Geometry034: THREE.Mesh
    Merged_Geometry035: THREE.Mesh
    Cube_93001: THREE.Mesh
    Cube_93002: THREE.Mesh
    Cube_93003: THREE.Mesh
    Cube_93004: THREE.Mesh
    Cube_92: THREE.Mesh
    Cube_93: THREE.Mesh
    Merged_Geometry007: THREE.Mesh
  }
  materials: {
    Material_76: THREE.MeshStandardMaterial
    Material_8: THREE.MeshStandardMaterial
    Material_2: THREE.MeshStandardMaterial
    Material_83: THREE.MeshStandardMaterial
    Material_45: THREE.MeshStandardMaterial
    Material_46: THREE.MeshStandardMaterial
    Material_0: THREE.MeshStandardMaterial
    Material_44: THREE.MeshStandardMaterial
    Material_37: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/wall-layout-home-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.91, 0]} scale={0.01}>
        <group position={[277.24, 37.51, 853.16]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry_2007.geometry}
            material={materials.Material_76}
            position={[-96, -23.44, -0.25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry036.geometry}
            material={materials.Material_8}
            position={[-95.66, -25.92, 0]}
          />
        </group>
        <group position={[926.99, 37.51, -429.43]} rotation={[0, 1.57, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry_2008.geometry}
            material={materials.Material_76}
            position={[95.33, -23.44, -0.25]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry037.geometry}
            material={materials.Material_8}
            position={[95.66, -25.97, 0]}
            rotation={[0, -1.57, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_81001.geometry}
          material={materials.Material_2}
          position={[-264.41, -98.4, 891.31]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Geometry_5.geometry}
          material={materials.Material_2}
          position={[0, 0.34, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Geometry034.geometry}
          material={materials.Material_83}
          position={[224.27, 2.62, 350.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Geometry035.geometry}
          material={materials.Material_2}
          position={[0, 2.19, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/wall-layout-home-transformed.glb')
