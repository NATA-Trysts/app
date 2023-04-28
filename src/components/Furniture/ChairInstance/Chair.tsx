import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

import { JSDELIVR_URL } from '@/libs/constants'

type GLTFResult = GLTF & {
  nodes: {
    chair: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function Chair(
  props: JSX.IntrinsicElements['group'] & {
    wireframe: boolean
    color: string
    roughness: number
    metalness: number
  },
) {
  const { nodes } = useGLTF(`${JSDELIVR_URL}/models-transform/chair.glb`) as GLTFResult

  return (
    <group {...props} dispose={null} name="chair" scale={[0.025, 0.025, 0.025]}>
      <mesh geometry={nodes.chair.geometry} rotation={[-Math.PI, 0, -Math.PI]}>
        <meshStandardMaterial
          color={props.color}
          metalness={props.metalness}
          roughness={props.roughness}
          wireframe={props.wireframe}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(`${JSDELIVR_URL}/models-transform/chair.glb`)
