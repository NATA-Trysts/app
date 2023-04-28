/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/accent-table.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder005: THREE.Mesh
    Merged_Geometry015: THREE.Mesh
    Cube_2005: THREE.Mesh
    Cube_3002: THREE.Mesh
    Cube_5005: THREE.Mesh
    Cube_4004: THREE.Mesh
    Merged_Geometry013: THREE.Mesh
    Merged_Geometry014: THREE.Mesh
  }
  materials: {
    Material_7: THREE.MeshStandardMaterial
    Material_37: THREE.MeshStandardMaterial
    Material_38: THREE.MeshStandardMaterial
    Material_25: THREE.MeshStandardMaterial
    Material_12: THREE.MeshStandardMaterial
    Material_50: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/accent-table-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.55, 0]} scale={0.025}>
        <group position={[19.41, -39.21, 2.33]} rotation={[0, 0, 0]} scale={[1, 0.57, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.Material_7}
            position={[2.33, 46.68, -19.41]}
            scale={[1, 1.76, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry015.geometry}
            material={materials.Material_7}
            position={[1.99, -1.74, -19.03]}
            rotation={[0, -1.57, 0]}
            scale={[1, 1.76, 1]}
          />
        </group>
        <group position={[-6.08, 27.99, -1.39]} rotation={[Math.PI, -1.31, Math.PI]} scale={0.34}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2005.geometry}
            material={materials.Material_37}
            position={[-1.09, -82.16, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3002.geometry}
            material={materials.Material_38}
            position={[-8.53, 63.99, -8.62]}
            rotation={[0, 0, 0.22]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5005.geometry}
            material={materials.Material_38}
            position={[0.25, 40.96, 27.4]}
            rotation={[0.42, -1.54, 0.19]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4004.geometry}
            material={materials.Material_25}
            position={[20.42, 33.43, -14.95]}
            rotation={[-2.9, -0.94, -2.48]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry013.geometry}
            material={materials.Material_12}
            position={[-8.07, -5.17, 5.21]}
            rotation={[-Math.PI, 1.31, -Math.PI]}
            scale={2.95}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Geometry014.geometry}
          material={materials.Material_50}
          position={[5.94, 1.5, -52.22]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/accent-table-transformed.glb')
