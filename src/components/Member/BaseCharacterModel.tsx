// @ts-nocheck
import { useAnimations, useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { forwardRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { Group } from 'three'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'Armature.001|mixamo.com|Layer0' | 'idle' | 'run'

type GLTFAction = {
  name: ActionName
} & THREE.AnimationClip

type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.SkinnedMesh
    cap: THREE.SkinnedMesh
    Ear004: THREE.SkinnedMesh
    Head: THREE.SkinnedMesh
    Horn001: THREE.SkinnedMesh
    khabanh: THREE.SkinnedMesh
    Leg005: THREE.SkinnedMesh
    Nose: THREE.SkinnedMesh
    ['police-hat']: THREE.SkinnedMesh
    ring: THREE.SkinnedMesh
    Ring005: THREE.SkinnedMesh
    ['shirt-body']: THREE.SkinnedMesh
    Hand: THREE.SkinnedMesh
    ['short-body']: THREE.SkinnedMesh
    Bone: THREE.Bone
    neutral_bone: THREE.Bone
    neutral_bone_1: THREE.Bone
    neutral_bone_2: THREE.Bone
    neutral_bone_3: THREE.Bone
    neutral_bone_4: THREE.Bone
    neutral_bone_5: THREE.Bone
    neutral_bone_6: THREE.Bone
    neutral_bone_7: THREE.Bone
    neutral_bone_8: THREE.Bone
    neutral_bone_9: THREE.Bone
    neutral_bone_10: THREE.Bone
    neutral_bone_11: THREE.Bone
    neutral_bone_12: THREE.Bone
    neutral_bone_13: THREE.Bone
  }
  materials: {
    Head: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type BaseCharacterModelProps = {
  action: string
} & JSX.IntrinsicElements['group']

export const BaseCharacterModel = forwardRef<Group, BaseCharacterModelProps>((props, ref) => {
  const { scene, materials, animations } = useGLTF('/models/character-sample.glb') as GLTFResult
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    actions[props.action].reset().fadeIn(0.2).play()

    return () => actions[props.action] && actions[props.action].fadeOut(0.2)
  }, [props.action])

  return (
    <group ref={ref} castShadow receiveShadow dispose={null} position={[0, -2, 0]}>
      <group castShadow receiveShadow name="Armature" rotation={[0.13, 0, 0.01]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.neutral_bone} />
        <primitive object={nodes.neutral_bone_1} />
        <primitive object={nodes.neutral_bone_2} />
        <primitive object={nodes.neutral_bone_3} />
        <primitive object={nodes.neutral_bone_4} />
        <primitive object={nodes.neutral_bone_5} />
        <primitive object={nodes.neutral_bone_6} />
        <primitive object={nodes.neutral_bone_7} />
        <primitive object={nodes.neutral_bone_8} />
        <primitive object={nodes.neutral_bone_9} />
        <primitive object={nodes.neutral_bone_10} />
        <primitive object={nodes.neutral_bone_11} />
        <primitive object={nodes.neutral_bone_12} />
        <primitive object={nodes.neutral_bone_13} />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          material={nodes.Body.material}
          skeleton={nodes.Body.skeleton}
        />

        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Ear004.geometry}
          material={nodes.Ear004.material}
          skeleton={nodes.Ear004.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Head.geometry}
          material={nodes.Head.material}
          skeleton={nodes.Head.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Horn001.geometry}
          material={nodes.Horn001.material}
          skeleton={nodes.Horn001.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.khabanh.geometry}
          material={materials['Material.002']}
          skeleton={nodes.khabanh.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Leg005.geometry}
          material={nodes.Leg005.material}
          skeleton={nodes.Leg005.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Nose.geometry}
          material={nodes.Nose.material}
          skeleton={nodes.Nose.skeleton}
        />

        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.ring.geometry}
          material={materials['Material.003']}
          skeleton={nodes.ring.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Ring005.geometry}
          material={materials.Material}
          skeleton={nodes.Ring005.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes['shirt-body'].geometry}
          material={materials['Material.004']}
          skeleton={nodes['shirt-body'].skeleton}
        />
        <skinnedMesh geometry={nodes.Hand.geometry} material={nodes.Hand.material} skeleton={nodes.Hand.skeleton} />
      </group>
    </group>
  )
})

useGLTF.preload('/models/character-sample.glb')
