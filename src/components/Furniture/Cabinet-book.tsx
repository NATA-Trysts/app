/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/cabinet-book.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_2004: THREE.Mesh
    Ellipse_2001: THREE.Mesh
    Cube005: THREE.Mesh
    Merged_Geometry008: THREE.Mesh
    Cube_2003: THREE.Mesh
    Cube_8003: THREE.Mesh
    Cube_3001: THREE.Mesh
    Cube_4003: THREE.Mesh
    Cube_5004: THREE.Mesh
    Cube_8001: THREE.Mesh
    Cube_6002: THREE.Mesh
    Cube_7004: THREE.Mesh
    Cube_8002: THREE.Mesh
    Cube_8004: THREE.Mesh
    Cube004: THREE.Mesh
    Cube_93005: THREE.Mesh
    Merged_Geometry009: THREE.Mesh
    Pyramid001: THREE.Mesh
  }
  materials: {
    Material_51: THREE.MeshStandardMaterial
    Material_25: THREE.MeshStandardMaterial
    Material_41: THREE.MeshStandardMaterial
    Material_50: THREE.MeshStandardMaterial
    Material_27: THREE.MeshStandardMaterial
    Material_43: THREE.MeshStandardMaterial
    Material_49: THREE.MeshStandardMaterial
    Material_52: THREE.MeshStandardMaterial
    Material_0: THREE.MeshStandardMaterial
    Material_46: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/cabinet-book-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.11, 0]} scale={0.01}>
        <group position={[-12.25, -4.79, -33.48]} scale={0.14}>
          <group position={[6.89, 10.69, 22.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2004.geometry}
              material={materials.Material_51}
              rotation={[-0.59, -0.18, -0.16]}
              scale={0.77}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_2001.geometry}
              material={materials.Material_25}
              position={[-1.4, 1.52, 4.21]}
              rotation={[-0.59, -0.18, -1.73]}
              scale={0.77}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials.Material_41}
            position={[-9.72, -3.84, -79.8]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry008.geometry}
            material={materials.Material_50}
            position={[8.71, -21.84, 49.72]}
            scale={7.05}
          />
        </group>
        <group position={[-6.75, 35.39, -3.58]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2003.geometry}
            material={materials.Material_51}
            position={[0.3, -2.57, -32.43]}
            rotation={[0, -1.57, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_8003.geometry}
            material={materials.Material_51}
            position={[0.3, -2.83, -8.28]}
            rotation={[0.4, -1.57, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3001.geometry}
            material={materials.Material_50}
            position={[1.3, -5.33, 23.72]}
            rotation={[Math.PI / 3, -Math.PI / 2, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4003.geometry}
            material={materials.Material_27}
            position={[1.8, 0, -28.49]}
            rotation={[0, -1.57, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5004.geometry}
            material={materials.Material_25}
            position={[0.3, -0.97, -24.22]}
            rotation={[0, -1.57, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_8001.geometry}
            material={materials.Material_25}
            position={[0.3, -2.86, 6.2]}
            rotation={[0.8, -Math.PI / 2, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_6002.geometry}
            material={materials.Material_43}
            position={[0.17, -5.88, 14.26]}
            rotation={[1.13, -Math.PI / 2, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_7004.geometry}
            material={materials.Material_49}
            position={[1.38, -8.91, 34.48]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_8002.geometry}
            material={materials.Material_49}
            position={[1.8, -1, -2.93]}
            rotation={[0.32, -Math.PI / 2, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_8004.geometry}
            material={materials.Material_27}
            position={[0, -1.1, -17.47]}
            rotation={[-0.05, -Math.PI / 2, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.Material_52}
            position={[-0.76, 0.57, -39.97]}
            rotation={[0, -1.57, 0]}
            scale={0.14}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_93005.geometry}
          material={materials.Material_0}
          position={[-9.51, -51.57, -9.43]}
          rotation={[-Math.PI / 2, 0, 0.38]}
        />
        <mesh castShadow receiveShadow geometry={nodes.Merged_Geometry009.geometry} material={materials.Material_0} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid001.geometry}
          material={materials.Material_46}
          position={[-8.45, -3.19, 25.54]}
          rotation={[0, Math.PI / 9, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cabinet-book-transformed.glb')
