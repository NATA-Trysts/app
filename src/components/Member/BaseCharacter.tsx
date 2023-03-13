// @ts-nocheck

import { useAnimations, useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { Group } from 'three'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    body: THREE.SkinnedMesh
    ear: THREE.SkinnedMesh
    head: THREE.SkinnedMesh
    neck: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    head: THREE.MeshStandardMaterial
    ear: THREE.MeshStandardMaterial
    neck: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'Armature|mixamo.com|Layer0'
  | 'Armature|mixamo.com|Layer0.002'
  | 'idle'
  | 'idle.001'
  | 'run'
  | 'running'
  | 'walk'
  | 'walking'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

type ModelProps = {
  action: string
} & JSX.IntrinsicElements['group']

export function BaseCharacter(props: ModelProps) {
  const group = useRef<Group>()
  const { scene, materials, animations } = useGLTF('/models/character.glb') as GLTFResult
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)

  useEffect(() => {
    props.action && actions[props.action].reset().fadeIn(0.2).play()

    return () => actions[props.action] && actions[props.action].fadeOut(0.2)
  }, [props.action])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0, -2, 0]}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.015}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            geometry={nodes.body.geometry}
            material={materials.head}
            name="body"
            skeleton={nodes.body.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ear.geometry}
            material={materials.ear}
            name="ear"
            skeleton={nodes.ear.skeleton}
          />
          <skinnedMesh
            geometry={nodes.head.geometry}
            material={materials.head}
            name="head"
            skeleton={nodes.head.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/character.glb')
