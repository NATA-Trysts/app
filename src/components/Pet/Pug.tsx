// @ts-nocheck
import { useAnimations, useGLTF } from '@react-three/drei'
import { forwardRef, useEffect } from 'react'
import * as THREE from 'three'
import { Group } from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.SkinnedMesh
    Cylinder_1: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    Beige: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

type PugProps = JSX.IntrinsicElements['group'] & {
  anim?: string
}

type ActionName = 'Death' | 'Idle' | 'Jump' | 'Run' | 'Walk' | 'WalkSlow'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export const Pug = forwardRef<Group, PugProps>(({ anim = 'Idle', ...props }: PugProps, ref) => {
  const { nodes, materials, animations } = useGLTF('/models/pug.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, ref)

  useEffect(() => {
    actions[anim].reset().fadeIn(0.2).play()

    return () => actions[anim].fadeOut(0.5)
  }, [anim])

  return (
    <group ref={ref} {...props} dispose={null} position={[0, -2, 0]} scale={0.3}>
      <primitive object={nodes.root} />
      <skinnedMesh geometry={nodes.Cylinder.geometry} material={materials.Beige} skeleton={nodes.Cylinder.skeleton} />
      <skinnedMesh
        geometry={nodes.Cylinder_1.geometry}
        material={materials.Brown}
        skeleton={nodes.Cylinder_1.skeleton}
      />
    </group>
  )
})

useGLTF.preload('/models/pug.glb')
