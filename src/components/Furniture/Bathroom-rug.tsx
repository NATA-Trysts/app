/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.5 ./models/bathroom-rug.glb -t -T --shadows
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Rectangle_9001: THREE.Mesh
  }
  materials: {
    Material_9: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/bathroom-rug-transformed.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle_9001.geometry}
        material={materials.Material_9}
        position={[0, -0.02, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/bathroom-rug-transformed.glb')
