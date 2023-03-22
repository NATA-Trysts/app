import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    chair: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function Chair(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    'https://cdn.jsdelivr.net/gh/NATA-Trysts/cdn@master/models-transform/chair-transformed.glb',
  ) as GLTFResult

  return (
    <group {...props} dispose={null} name="chair">
      <mesh geometry={nodes.chair.geometry} material={materials.Material} rotation={[-Math.PI, 0, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('https://cdn.jsdelivr.net/gh/NATA-Trysts/cdn@master/models-transform/chair-transformed.glb')
