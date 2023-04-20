// @ts-nocheck

import { useAnimations, useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { Group, Texture } from 'three'
import { GLTF, SkeletonUtils } from 'three-stdlib'

import { JSDELIVR_URL } from '@/libs/constants'
import { SubcategoryActiveItem } from '@/stores'

//#region

type GLTFResult = GLTF & {
  nodes: {
    accessory001001001: THREE.SkinnedMesh
    accessory001002001: THREE.SkinnedMesh
    body: THREE.SkinnedMesh
    hair001001001: THREE.SkinnedMesh
    hair001002001: THREE.SkinnedMesh
    Cube020: THREE.SkinnedMesh
    Cube020_1: THREE.SkinnedMesh
    lower001001001: THREE.SkinnedMesh
    lower001002001: THREE.SkinnedMesh
    lower002001001: THREE.SkinnedMesh
    lower003001001: THREE.SkinnedMesh
    neck: THREE.SkinnedMesh
    shoe001001001: THREE.SkinnedMesh
    shoe001001002: THREE.SkinnedMesh
    upper001001001: THREE.SkinnedMesh
    upper001001002: THREE.SkinnedMesh
    upper002001001: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    body: THREE.MeshStandardMaterial
    hair: THREE.MeshStandardMaterial
    head: THREE.MeshStandardMaterial
    ear: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'angry.000'
  | 'bow.000'
  | 'cheer.000'
  | 'clap.000'
  | 'dance.000'
  | 'discuss.000'
  | 'fall.000'
  | 'fall.001'
  | 'fall.002'
  | 'hit.000'
  | 'hit.001'
  | 'hit.002'
  | 'idle.000'
  | 'idle.001'
  | 'idle.002'
  | 'idle.003'
  | 'idle.004'
  | 'kick.000'
  | 'kick.001'
  | 'kick.002'
  | 'kick.003'
  | 'lay.000'
  | 'punch.000'
  | 'punch.001'
  | 'punch.002'
  | 'run.000'
  | 'sad.000'
  | 'sad.001'
  | 'sit.000'
  | 'sit.001'
  | 'sit.002'
  | 'sit.003'
  | 'victory.000'
  | 'walk.000'
  | 'wave.000'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

//#endregion

type ModelProps = {
  action: string
  skin?: SubcategoryActiveItem[]
  hair?: SubcategoryActiveItem[]
  upper?: SubcategoryActiveItem[]
  lower?: SubcategoryActiveItem[]
  shoe?: SubcategoryActiveItem[]
  accessory?: SubcategoryActiveItem[]
  tattoo?: Texture
} & JSX.IntrinsicElements['group']

export function OtherCharacter({ ...props }: ModelProps) {
  const group = useRef<Group>(null)
  const { scene, materials, animations } = useGLTF(`${JSDELIVR_URL}/models-transform/character.glb`) as GLTFResult
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)

  useEffect(() => {
    actions[props.action].reset().fadeIn(0.2).play()

    return () => {
      props.action && actions[props.action] && actions[props.action]?.fadeOut(0.2)
    }
  }, [props.action])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0, -2, 0]}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.015}>
          <primitive object={nodes.mixamorigHips} />

          <skinnedMesh
            geometry={nodes.accessory001002001.geometry}
            material={nodes.accessory001002001.material}
            skeleton={nodes.accessory001002001.skeleton}
          />
          <skinnedMesh geometry={nodes.body.geometry} material={nodes.body.material} skeleton={nodes.body.skeleton} />

          <skinnedMesh
            geometry={nodes.hair001002001.geometry}
            material={nodes.hair001002001.material}
            skeleton={nodes.hair001002001.skeleton}
          />
          <skinnedMesh geometry={nodes.Cube020.geometry} material={materials.head} skeleton={nodes.Cube020.skeleton} />
          <skinnedMesh
            geometry={nodes.Cube020_1.geometry}
            material={materials.ear}
            skeleton={nodes.Cube020_1.skeleton}
          />

          <skinnedMesh
            geometry={nodes.lower003001001.geometry}
            material={nodes.lower003001001.material}
            skeleton={nodes.lower003001001.skeleton}
          />

          <skinnedMesh
            geometry={nodes.shoe001001002.geometry}
            material={nodes.shoe001001002.material}
            skeleton={nodes.shoe001001002.skeleton}
          />

          <skinnedMesh
            geometry={nodes.upper002001001.geometry}
            material={nodes.upper002001001.material}
            skeleton={nodes.upper002001001.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(`${JSDELIVR_URL}/models-transform/character.glb`)