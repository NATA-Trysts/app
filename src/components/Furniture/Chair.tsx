import { useGLTF, useTexture } from '@react-three/drei'
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

export function Chair(
  props: JSX.IntrinsicElements['group'] & {
    wireframe: boolean
    color: string
    roughness: number
    metalness: number
    texture: string
  },
) {
  const { nodes } = useGLTF(
    'https://cdn.jsdelivr.net/gh/NATA-Trysts/cdn@master/models-transform/chair-transformed.glb',
  ) as GLTFResult
  const textureMap = useTexture(props.texture)

  return (
    <group {...props} dispose={null} name="chair">
      <mesh geometry={nodes.chair.geometry} rotation={[-Math.PI, 0, -Math.PI]}>
        <meshStandardMaterial
          color={props.color}
          map={textureMap}
          metalness={props.metalness}
          roughness={props.roughness}
          wireframe={props.wireframe}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('https://cdn.jsdelivr.net/gh/NATA-Trysts/cdn@master/models-transform/chair-transformed.glb')
