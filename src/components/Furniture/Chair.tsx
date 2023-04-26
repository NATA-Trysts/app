/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/chair.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    chair: THREE.Mesh
  }
  materials: {
    Material_5: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/chair-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials.Material_5}
        position={[0, 0.58, 0]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/chair-transformed.glb')
