/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/fan.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder_13: THREE.Mesh
    Cylinder_15: THREE.Mesh
    Cylinder_14: THREE.Mesh
    Cylinder_16: THREE.Mesh
    Cylinder_17: THREE.Mesh
    Cylinder_18: THREE.Mesh
    Cylinder_19: THREE.Mesh
    Rectangle_12: THREE.Mesh
    Rectangle_13: THREE.Mesh
  }
  materials: {
    Material_8: THREE.MeshStandardMaterial
    Material_36: THREE.MeshStandardMaterial
    Material_48: THREE.MeshStandardMaterial
    Material_6: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/fan-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.71, 0]} rotation={[0, 0, 0]} scale={0.01}>
        <group position={[0, 33.9, 2.39]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_13.geometry}
            material={materials.Material_8}
            position={[0, 0, 22.98]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_15.geometry}
            material={materials.Material_8}
            position={[0, 0, -12.17]}
            rotation={[Math.PI / 2, 0.17, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_14.geometry}
            material={materials.Material_8}
            position={[0, 0, 6.37]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_16.geometry}
            material={materials.Material_36}
            position={[0.14, 0.55, 2.15]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_17.geometry}
            material={materials.Material_8}
            position={[0.55, 0.61, -14.78]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_18.geometry}
          material={materials.Material_48}
          position={[0.55, -24, -16.64]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_19.geometry}
          material={materials.Material_48}
          position={[0.55, -71.67, -7.72]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle_12.geometry}
          material={materials.Material_6}
          position={[3.65, -67.69, 1.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle_13.geometry}
          material={materials.Material_6}
          position={[-2.72, -67.69, 1.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/fan-transformed.glb')
