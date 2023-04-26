/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/desk.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_2002: THREE.Mesh
    Sphere: THREE.Mesh
    Sphere_2: THREE.Mesh
    Torus: THREE.Mesh
    Torus_2: THREE.Mesh
    Cube_59: THREE.Mesh
    Merged_Geometry_10: THREE.Mesh
    Cube_7001: THREE.Mesh
    Rectangle_4001: THREE.Mesh
    Rectangle_5001: THREE.Mesh
    Rectangle_6: THREE.Mesh
    Rectangle_6001: THREE.Mesh
    Merged_Geometry_2: THREE.Mesh
    Merged_Geometry002: THREE.Mesh
    Rectangle_8: THREE.Mesh
    Cube_4001: THREE.Mesh
    Cube_5003: THREE.Mesh
    Cube_7003: THREE.Mesh
    Cube_6001: THREE.Mesh
    Cube_7002: THREE.Mesh
    Cube_5002: THREE.Mesh
    Ellipse_2: THREE.Mesh
    Rectangle: THREE.Mesh
    Mesh_72: THREE.Mesh
    Mesh_73: THREE.Mesh
    Mesh_73001: THREE.Mesh
    Mesh_73002: THREE.Mesh
    Mesh_74: THREE.Mesh
    Mesh_74001: THREE.Mesh
    Mesh_74002: THREE.Mesh
    Mesh_74003: THREE.Mesh
    Mesh_74004: THREE.Mesh
    Mesh_74005: THREE.Mesh
    Mesh_74006: THREE.Mesh
    Mesh_74007: THREE.Mesh
    Mesh_74008: THREE.Mesh
    Mesh_74009: THREE.Mesh
    Mesh_75: THREE.Mesh
    Mesh_75001: THREE.Mesh
    Mesh_75002: THREE.Mesh
    Mesh_75003: THREE.Mesh
    Mesh_75004: THREE.Mesh
    Mesh_75005: THREE.Mesh
    Mesh_75006: THREE.Mesh
    Mesh_75007: THREE.Mesh
    Mesh_75008: THREE.Mesh
    Mesh_75009: THREE.Mesh
    Mesh_75010: THREE.Mesh
    Mesh_76: THREE.Mesh
    Mesh_76001: THREE.Mesh
    Mesh_76002: THREE.Mesh
    Mesh_76003: THREE.Mesh
    Mesh_76004: THREE.Mesh
    Mesh_76005: THREE.Mesh
    Mesh_76006: THREE.Mesh
    Mesh_76007: THREE.Mesh
    Mesh_76008: THREE.Mesh
    Mesh_76009: THREE.Mesh
    Mesh_76010: THREE.Mesh
    Mesh_76011: THREE.Mesh
    Mesh_76012: THREE.Mesh
    Mesh_81: THREE.Mesh
    Mesh_81001: THREE.Mesh
    Mesh_81002: THREE.Mesh
    Mesh_81003: THREE.Mesh
    Mesh_81004: THREE.Mesh
    Mesh_81005: THREE.Mesh
    Mesh_81006: THREE.Mesh
    Mesh_81007: THREE.Mesh
    Mesh_81008: THREE.Mesh
    Mesh_81009: THREE.Mesh
    Mesh_81010: THREE.Mesh
    Mesh_81011: THREE.Mesh
    Mesh_81012: THREE.Mesh
    Mesh_82: THREE.Mesh
    Mesh_82001: THREE.Mesh
    Mesh_82002: THREE.Mesh
    Mesh_82003: THREE.Mesh
    Mesh_82004: THREE.Mesh
    Mesh_82005: THREE.Mesh
    Mesh_82006: THREE.Mesh
    Mesh_82007: THREE.Mesh
    Mesh_82008: THREE.Mesh
    Mesh_82009: THREE.Mesh
    Mesh_82010: THREE.Mesh
    Mesh_82011: THREE.Mesh
    Mesh_82012: THREE.Mesh
    Cube_4002: THREE.Mesh
    keybord_lign_2: THREE.Mesh
    keybord_lign_3: THREE.Mesh
    keybord_lign_4: THREE.Mesh
    keybord_lign_5: THREE.Mesh
    keybord_lign_6: THREE.Mesh
    keybord_lign_8: THREE.Mesh
    keybord_lign_9: THREE.Mesh
    Merged_Geometry003: THREE.Mesh
    Rectangle_10: THREE.Mesh
    Rectangle_5002: THREE.Mesh
    Rectangle_7: THREE.Mesh
    Rectangle001: THREE.Mesh
    Torus001: THREE.Mesh
    Cube002: THREE.Mesh
    Cylinder: THREE.Mesh
    Merged_Geometry004: THREE.Mesh
    Rectangle_3: THREE.Mesh
  }
  materials: {
    Material_36: THREE.MeshStandardMaterial
    Material_9: THREE.MeshStandardMaterial
    Material_27: THREE.MeshStandardMaterial
    Material_30: THREE.MeshStandardMaterial
    Material_10: THREE.MeshStandardMaterial
    Material_29: THREE.MeshStandardMaterial
    Material_11: THREE.MeshStandardMaterial
    Material_2: THREE.MeshStandardMaterial
    Material_35: THREE.MeshStandardMaterial
    Material_34: THREE.MeshStandardMaterial
    Material_28: THREE.MeshStandardMaterial
    Material_26: THREE.MeshStandardMaterial
    Material_38: THREE.MeshStandardMaterial
    Material_37: THREE.MeshStandardMaterial
    Material_39: THREE.MeshStandardMaterial
    Material_8: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/desk-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.97, 0]} scale={0.01}>
        <group position={[34.6, 24.66, 137.29]} scale={0.19}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2002.geometry}
            material={materials.Material_36}
            position={[0.52, 0, 0]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={materials.Material_36}
            position={[-43.86, -54.12, -0.92]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_2.geometry}
            material={materials.Material_36}
            position={[-27.54, 54.64, -0.92]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus.geometry}
            material={materials.Material_36}
            position={[-59, -53.05, -0.71]}
            rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_2.geometry}
            material={materials.Material_36}
            position={[-41.19, 55.71, -0.71]}
            rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
          />
        </group>
        <group position={[47.32, 53.15, 19.05]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_59.geometry}
            material={materials.Material_9}
            position={[-7.18, 5.56, 0]}
            scale={[1, 1.08, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry_10.geometry}
            material={materials.Material_27}
          />
        </group>
        <group position={[-20.56, 15.24, -115.85]} rotation={[0, -Math.PI / 3, 0]} scale={0.24}>
          <group position={[-1.33, 89.68, -11.16]} rotation={[0, 0.67, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_7001.geometry}
              material={materials.Material_30}
              position={[-58.97, -92.67, -139.61]}
              rotation={[-Math.PI, 0.67, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4001.geometry}
              material={materials.Material_10}
              position={[-9.76, -82.25, 11.61]}
              rotation={[-1.22, -0.27, -2.19]}
              scale={0.84}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_5001.geometry}
              material={materials.Material_29}
              position={[4.42, -66.89, -6.25]}
              rotation={[-1.22, -0.27, -2.19]}
              scale={0.84}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_6.geometry}
              material={materials.Material_27}
              position={[50.14, 44.57, -63.04]}
              rotation={[-0.22, -0.66, -1.71]}
              scale={0.84}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_6001.geometry}
              material={materials.Material_10}
              position={[51.33, 45.04, -64.53]}
              rotation={[-0.22, -0.66, -1.71]}
              scale={0.84}
            />
          </group>
          <group position={[-1.33, 132.1, -74.92]} rotation={[-0.17, 0, 0]} scale={0.9}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Merged_Geometry_2.geometry}
              material={materials.Material_11}
              position={[-0.03, 0.07, -5.99]}
              rotation={[0.17, Math.PI / 3, 0]}
              scale={4.74}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Merged_Geometry002.geometry}
              material={materials.Material_2}
              position={[0.61, 2.75, -8.58]}
              rotation={[0.17, Math.PI / 3, 0]}
              scale={4.74}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_8.geometry}
              material={materials.Material_27}
              position={[64.32, 0.67, -4.24]}
              scale={0.37}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4001.geometry}
            material={materials.Material_35}
            position={[0, 2.04, 0]}
            rotation={[-1.13, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5003.geometry}
            material={materials.Material_34}
            position={[139.55, -46.3, -5.06]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_7003.geometry}
            material={materials.Material_34}
            position={[-139.92, -46.3, -3.35]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_6001.geometry}
            material={materials.Material_34}
            position={[139.49, -2.99, -83.54]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_7002.geometry}
            material={materials.Material_34}
            position={[-139.98, -2.99, -81.82]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
          />
        </group>
        <group position={[-37.38, -37.34, 69.89]} scale={0.87}>
          <group position={[27.47, -28.29, 41.35]} scale={0.28}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_5002.geometry}
              material={materials.Material_28}
              position={[0.42, 0, 0]}
              rotation={[0, -1.57, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_2.geometry}
              material={materials.Material_11}
              position={[-121.91, 128.14, 48.08]}
              rotation={[0, -1.57, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle.geometry}
              material={materials.Material_11}
              position={[-121.92, -118.66, -4.31]}
              rotation={[0, -1.57, 0]}
            />
          </group>
        </group>
        <group position={[-14.56, 5.65, 9.61]}>
          <group position={[-14.73, 0.44, -40.47]} rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]} scale={0.07}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh_73.geometry} material={materials.Material_26} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_73001.geometry}
              material={materials.Material_26}
              position={[81, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_73002.geometry}
              material={materials.Material_26}
              position={[162, 0, 0]}
            />
          </group>
          <group position={[-8.93, 0.95, -26.7]} rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]} scale={0.07}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh_74.geometry} material={materials.Material_26} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74001.geometry}
              material={materials.Material_26}
              position={[81, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74002.geometry}
              material={materials.Material_26}
              position={[162, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74003.geometry}
              material={materials.Material_26}
              position={[243, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74004.geometry}
              material={materials.Material_26}
              position={[324, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74005.geometry}
              material={materials.Material_26}
              position={[405, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74006.geometry}
              material={materials.Material_26}
              position={[486, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74007.geometry}
              material={materials.Material_26}
              position={[567, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74008.geometry}
              material={materials.Material_26}
              position={[648, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_74009.geometry}
              material={materials.Material_26}
              position={[729, 0, 0]}
            />
          </group>
          <group position={[-3.09, 1.46, -29.76]} rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]} scale={0.07}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh_75.geometry} material={materials.Material_26} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75001.geometry}
              material={materials.Material_26}
              position={[81, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75002.geometry}
              material={materials.Material_26}
              position={[162, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75003.geometry}
              material={materials.Material_26}
              position={[243, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75004.geometry}
              material={materials.Material_26}
              position={[324, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75005.geometry}
              material={materials.Material_26}
              position={[405, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75006.geometry}
              material={materials.Material_26}
              position={[486, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75007.geometry}
              material={materials.Material_26}
              position={[567, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75008.geometry}
              material={materials.Material_26}
              position={[648, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75009.geometry}
              material={materials.Material_26}
              position={[729, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_75010.geometry}
              material={materials.Material_26}
              position={[810, 0, 0]}
            />
          </group>
          <group position={[2.9, 1.98, -31.5]} rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]} scale={0.07}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh_76.geometry} material={materials.Material_26} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76001.geometry}
              material={materials.Material_26}
              position={[81, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76002.geometry}
              material={materials.Material_26}
              position={[162, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76003.geometry}
              material={materials.Material_26}
              position={[243, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76004.geometry}
              material={materials.Material_26}
              position={[324, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76005.geometry}
              material={materials.Material_26}
              position={[405, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76006.geometry}
              material={materials.Material_26}
              position={[486, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76007.geometry}
              material={materials.Material_26}
              position={[567, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76008.geometry}
              material={materials.Material_26}
              position={[648, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76009.geometry}
              material={materials.Material_26}
              position={[729, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76010.geometry}
              material={materials.Material_26}
              position={[810, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76011.geometry}
              material={materials.Material_26}
              position={[891, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_76012.geometry}
              material={materials.Material_26}
              position={[972, 0, 0]}
            />
          </group>
          <group position={[14.38, 2.99, -31.5]} rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]} scale={0.07}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh_81.geometry} material={materials.Material_26} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81001.geometry}
              material={materials.Material_26}
              position={[81, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81002.geometry}
              material={materials.Material_26}
              position={[162, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81003.geometry}
              material={materials.Material_26}
              position={[243, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81004.geometry}
              material={materials.Material_26}
              position={[324, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81005.geometry}
              material={materials.Material_26}
              position={[405, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81006.geometry}
              material={materials.Material_26}
              position={[486, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81007.geometry}
              material={materials.Material_26}
              position={[567, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81008.geometry}
              material={materials.Material_26}
              position={[648, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81009.geometry}
              material={materials.Material_26}
              position={[729, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81010.geometry}
              material={materials.Material_26}
              position={[810, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81011.geometry}
              material={materials.Material_26}
              position={[891, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_81012.geometry}
              material={materials.Material_26}
              position={[972, 0, 0]}
            />
          </group>
          <group position={[8.66, 2.49, -40.37]} rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]} scale={0.07}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh_82.geometry} material={materials.Material_26} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82001.geometry}
              material={materials.Material_26}
              position={[81, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82002.geometry}
              material={materials.Material_26}
              position={[162, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82003.geometry}
              material={materials.Material_26}
              position={[243, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82004.geometry}
              material={materials.Material_26}
              position={[324, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82005.geometry}
              material={materials.Material_26}
              position={[405, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82006.geometry}
              material={materials.Material_26}
              position={[486, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82007.geometry}
              material={materials.Material_26}
              position={[567, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82008.geometry}
              material={materials.Material_26}
              position={[648, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82009.geometry}
              material={materials.Material_26}
              position={[729, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82010.geometry}
              material={materials.Material_26}
              position={[810, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82011.geometry}
              material={materials.Material_26}
              position={[891, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_82012.geometry}
              material={materials.Material_26}
              position={[972, 0, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4002.geometry}
            material={materials.Material_11}
            position={[0.02, -0.67, 0]}
            rotation={[-Math.PI / 2, -0.09, 0]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keybord_lign_2.geometry}
            material={materials.Material_26}
            position={[14.38, 2.99, -31.5]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keybord_lign_3.geometry}
            material={materials.Material_26}
            position={[8.66, 2.49, -40.37]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keybord_lign_4.geometry}
            material={materials.Material_26}
            position={[2.9, 1.98, -31.5]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keybord_lign_5.geometry}
            material={materials.Material_26}
            position={[-3.09, 1.46, -29.76]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keybord_lign_6.geometry}
            material={materials.Material_26}
            position={[-8.93, 0.95, -26.7]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keybord_lign_8.geometry}
            material={materials.Material_26}
            position={[-14.73, 0.44, 22.9]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keybord_lign_9.geometry}
            material={materials.Material_26}
            position={[-14.73, 0.44, -40.47]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry003.geometry}
            material={materials.Material_38}
            position={[-6, 2.01, 0.16]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_10.geometry}
            material={materials.Material_26}
            position={[8.7, 2.49, 38.91]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_5002.geometry}
            material={materials.Material_26}
            position={[-14.69, 0.45, -21.49]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_7.geometry}
            material={materials.Material_26}
            position={[-14.69, 0.45, 16.11]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle001.geometry}
            material={materials.Material_26}
            position={[14.38, 2.99, -38.89]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus001.geometry}
            material={materials.Material_26}
            position={[14.3, 4.98, 40.33]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.09}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_72.geometry}
            material={materials.Material_26}
            position={[-14.73, 0.44, 22.9]}
            rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
            scale={0.07}
          />
        </group>
        <group position={[-24.91, 9.07, 111.91]} rotation={[Math.PI, -0.38, Math.PI]} scale={0.18}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Material_37}
            position={[6.9, 9.33, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.Material_37}
            position={[-36.2, -2.74, -1.37]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <group position={[-0.16, -48.04, -20.79]} scale={0.17}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry004.geometry}
            material={materials.Material_39}
            position={[0, -0.25, 140.64]}
            scale={6.04}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle_3.geometry}
          material={materials.Material_8}
          position={[-18.86, 1.42, 7.34]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.21}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/desk-transformed.glb')