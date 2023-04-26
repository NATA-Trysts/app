/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/dinning-table.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_4005: THREE.Mesh
    Cube_5006: THREE.Mesh
    Cylinder_34: THREE.Mesh
    Cylinder_35: THREE.Mesh
    Sphere_2001: THREE.Mesh
    Sphere_4: THREE.Mesh
    Sphere_5: THREE.Mesh
    Sphere_3: THREE.Mesh
    Merged_Geometry022: THREE.Mesh
    Torus_2001: THREE.Mesh
    Torus_3: THREE.Mesh
    Torus_3001: THREE.Mesh
    Torus002: THREE.Mesh
    Cylinder_34001: THREE.Mesh
    Triangle: THREE.Mesh
    Triangle_2: THREE.Mesh
    Merged_Geometry024: THREE.Mesh
    Rectangle002: THREE.Mesh
    Merged_Geometry023: THREE.Mesh
    Rectangle_8001: THREE.Mesh
    plate: THREE.Mesh
  }
  materials: {
    Material_56: THREE.MeshStandardMaterial
    Material_6: THREE.MeshStandardMaterial
    Material_60: THREE.MeshStandardMaterial
    Material_63: THREE.MeshStandardMaterial
    Material_25: THREE.MeshStandardMaterial
    Material_49: THREE.MeshStandardMaterial
    Material_41: THREE.MeshStandardMaterial
    Material_64: THREE.MeshStandardMaterial
    Material_65: THREE.MeshStandardMaterial
    Material_0: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/dinning-table-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.55, 0]} scale={0.01}>
        <group position={[-69.07, 43.58, -10.63]} scale={0.14}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4005.geometry}
            material={materials.Material_56}
            position={[5.05, -68.49, 1.48]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5006.geometry}
            material={materials.Material_56}
            position={[7.08, -45.37, 35.95]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_34.geometry}
            material={materials.Material_6}
            position={[0, -91.39, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_35.geometry}
            material={materials.Material_60}
            position={[-23.17, -32.3, 17.49]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_2001.geometry}
            material={materials.Material_63}
            position={[-115.27, -63.04, -28.74]}
            rotation={[0, 0.18, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_4.geometry}
            material={materials.Material_63}
            position={[-137.36, -63.04, 20.75]}
            rotation={[0, 0.18, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_5.geometry}
            material={materials.Material_63}
            position={[-1.75, -62.56, -105.39]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_3.geometry}
            material={materials.Material_25}
            position={[-22.97, -28.44, 34.81]}
            rotation={[-1.31, -0.18, -0.02]}
          />
        </group>
        <group position={[-20.33, 39.85, -34.59]} scale={0.2}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry022.geometry}
            material={materials.Material_6}
            position={[0, -42.66, 0]}
            scale={5.12}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_2001.geometry}
            material={materials.Material_49}
            position={[-47.29, 9.06, 11.28]}
            rotation={[-1.39, -0.53, -0.35]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_3.geometry}
            material={materials.Material_60}
            position={[40.25, -13.77, -4.02]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_3001.geometry}
            material={materials.Material_41}
            position={[40.25, -22.47, -4.02]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus002.geometry}
            material={materials.Material_64}
            position={[-42.91, 1.67, 9.92]}
            rotation={[-1.39, -0.53, -0.35]}
          />
        </group>
        <group position={[56.86, 39.1, -6.96]} rotation={[0, 1.48, 0]} scale={0.16}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_34001.geometry}
            material={materials.Material_65}
            position={[0, -24.59, 0]}
            scale={0.57}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Triangle.geometry}
            material={materials.Material_49}
            position={[-6.42, -20.88, -10.91]}
            rotation={[-Math.PI / 2, 0, -1.66]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Triangle_2.geometry}
            material={materials.Material_60}
            position={[-6.4, 20.88, -10.91]}
            rotation={[-Math.PI / 2, 0, -1.66]}
          />
        </group>
        <group position={[-9.07, 38.83, 20.75]} rotation={[0, -1.55, 0]} scale={0.19}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry024.geometry}
            material={materials.Material_25}
            position={[2.3, 12.07, -10.78]}
            rotation={[0, 1.55, 0]}
            scale={5.21}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle002.geometry}
            material={materials.Material_65}
            position={[0, -55.78, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
          />
        </group>
        <group position={[0, -12.22, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry023.geometry}
            material={materials.Material_0}
            position={[-1, -1.74, -1.45]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_8001.geometry}
            material={materials.Material_0}
            position={[0, 33.63, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plate.geometry}
          material={materials.Material_6}
          position={[56.82, 27.67, 35.89]}
          scale={0.16}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/dinning-table-transformed.glb')