/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/bubble-lamp.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_5007: THREE.Mesh
    Cylinder_2004: THREE.Mesh
    Cylinder008: THREE.Mesh
    Sphere001: THREE.Mesh
  }
  materials: {
    Material_27: THREE.MeshStandardMaterial
    Material_58: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/bubble-lamp-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.91, 0]} rotation={[0, 0, 0]} scale={0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5007.geometry}
          material={materials.Material_27}
          position={[37.09, -270.06, 5.4]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2004.geometry}
          material={materials.Material_27}
          position={[-54.23, 325.3, 0.88]}
          scale={1.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.Material_27}
          position={[45.52, -462.67, 0]}
          scale={1.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.Material_58}
          position={[-53.25, 403.22, 1.25]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/bubble-lamp-transformed.glb')