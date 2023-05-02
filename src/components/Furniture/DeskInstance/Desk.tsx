import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

// import { JSDELIVR_URL } from '@/libs/constants'

type GLTFResult = GLTF & {
  nodes: {
    Mesh_83001: THREE.Mesh
    Mesh_83001_1: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}
export function Desk(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/d-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null} name="desk" scale={[0.025, 0.025, 0.025]}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh_83001.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_83001_1.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/models/d-transformed.glb')
