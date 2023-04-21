import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

import { JSDELIVR_URL } from '@/libs/constants'

type GLTFResult = GLTF & {
  nodes: {
    Rectangle_6002: THREE.Mesh
    Rectangle_6003: THREE.Mesh
    Rectangle_5004: THREE.Mesh
    Rectangle_4002: THREE.Mesh
    Rectangle_3001: THREE.Mesh
    Merged_Geometry001: THREE.Mesh
    Merged_Geometry_10001: THREE.Mesh
    Ellipse_2001: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cube003: THREE.Mesh
    Cube_7006: THREE.Mesh
    Cube_7007: THREE.Mesh
    Cube_7008: THREE.Mesh
    Cube_6003: THREE.Mesh
    Cube_5005: THREE.Mesh
    Cube_5006: THREE.Mesh
    Cube_4005: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Desk(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${JSDELIVR_URL}/models-transform/desk.glb`) as GLTFResult

  return (
    <group {...props} dispose={null} name="desk" scale={[0.025, 0.025, 0.025]}>
      <mesh geometry={nodes.Rectangle_6002.geometry} material={nodes.Rectangle_6002.material} />
      <mesh geometry={nodes.Rectangle_6003.geometry} material={nodes.Rectangle_6003.material} />
      <mesh geometry={nodes.Rectangle_5004.geometry} material={nodes.Rectangle_5004.material} />
      <mesh geometry={nodes.Rectangle_4002.geometry} material={nodes.Rectangle_4002.material} />
      <mesh geometry={nodes.Rectangle_3001.geometry} material={nodes.Rectangle_3001.material} />
      <mesh geometry={nodes.Merged_Geometry001.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Merged_Geometry_10001.geometry} material={nodes.Merged_Geometry_10001.material} />
      <mesh geometry={nodes.Ellipse_2001.geometry} material={nodes.Ellipse_2001.material} />
      <mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} />
      <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} />
      <mesh geometry={nodes.Cube_7006.geometry} material={nodes.Cube_7006.material} />
      <mesh geometry={nodes.Cube_7007.geometry} material={nodes.Cube_7007.material} />
      <mesh geometry={nodes.Cube_7008.geometry} material={nodes.Cube_7008.material} />
      <mesh geometry={nodes.Cube_6003.geometry} material={nodes.Cube_6003.material} />
      <mesh geometry={nodes.Cube_5005.geometry} material={nodes.Cube_5005.material} />
      <mesh geometry={nodes.Cube_5006.geometry} material={nodes.Cube_5006.material} />
      <mesh geometry={nodes.Cube_4005.geometry} material={nodes.Cube_4005.material} />
    </group>
  )
}

useGLTF.preload(`${JSDELIVR_URL}/models-transform/desk.glb`)
