// @ts-nocheck

import { useAnimations, useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { Group, SkinnedMesh, Texture } from 'three'
import { GLTF, SkeletonUtils } from 'three-stdlib'

import { CHARACTER_CONFIG_VALUE_MAPPING } from '@/libs/constants'
import { SubcategoryActiveItem } from '@/stores'

type GLTFResult = GLTF & {
  nodes: {
    body: THREE.SkinnedMesh
    hair002: THREE.SkinnedMesh
    Cube020: THREE.SkinnedMesh
    Cube020_1: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    body: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    head: THREE.MeshStandardMaterial
    ear: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'bow'
  | 'cheer'
  | 'clap'
  | 'dance'
  | 'discuss'
  | 'fall'
  | 'fall.001'
  | 'fall.003'
  | 'hit'
  | 'hit.001'
  | 'hit.003'
  | 'idle'
  | 'idle.001'
  | 'idle.002'
  | 'idle.003'
  | 'kick'
  | 'kick.001'
  | 'kick.002'
  | 'kick.003'
  | 'lay'
  | 'punch'
  | 'punch.001'
  | 'punch.003'
  | 'run'
  | 'sit'
  | 'sit.001'
  | 'sit.002'
  | 'sit.003'
  | 'victory'
  | 'walk'
  | 'wave'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

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

export function BaseCharacter({
  skin = [],
  hair = [],
  upper = [],
  lower = [],
  shoe = [],
  accessory = [],
  tattoo,
  ...props
}: ModelProps) {
  const group = useRef<Group>(null)
  const { scene, materials, animations } = useGLTF('/models/character.glb') as GLTFResult
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  const tattooRef = useRef<SkinnedMesh>(null)

  useEffect(() => {
    if (tattooRef.current) {
      tattooRef.current.material.map = tattoo
      tattooRef.current.material.needsUpdate = true
    }
  }, [tattoo])

  useEffect(() => {
    props.action && actions[props.action].reset().fadeIn(0.2).play()

    return () => actions[props.action] && actions[props.action].fadeOut(0.2)
  }, [props.action])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0, -2, 0]}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.015}>
          <primitive object={nodes.mixamorigHips} />

          {/* BASE PARTS */}
          {skin.map((s) => (
            <skinnedMesh key={s.id} ref={tattooRef} geometry={nodes.body.geometry} skeleton={nodes.body.skeleton}>
              <meshStandardMaterial color={CHARACTER_CONFIG_VALUE_MAPPING[s.itemId]} metalness={0} roughness={1} />
            </skinnedMesh>
          ))}
          <skinnedMesh geometry={nodes.Cube020.geometry} material={materials.head} skeleton={nodes.Cube020.skeleton} />
          <skinnedMesh
            geometry={nodes.Cube020_1.geometry}
            material={materials.ear}
            skeleton={nodes.Cube020_1.skeleton}
          />

          {/* HAIR PARTS */}
          {hair.map((h) => (
            <skinnedMesh
              key={h.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[h.itemId]].geometry}
              material={materials.hair}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[h.itemId]].skeleton}
            />
          ))}

          {/* UPPER PARTS */}
          {upper.map((u) => (
            <skinnedMesh
              key={u.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[u.itemId]].geometry}
              material={nodes.upper001001.material}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[u.itemId]].skeleton}
            />
          ))}

          {/* LOWER PARTS */}
          {lower.map((l) => (
            <skinnedMesh
              key={l.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[l.itemId]].geometry}
              material={nodes.lower001001.material}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[l.itemId]].skeleton}
            />
          ))}

          {/* SHOE PARTS */}
          {shoe.map((s) => (
            <skinnedMesh
              key={s.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[s.itemId]].geometry}
              material={nodes.shoe001001.material}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[s.itemId]].skeleton}
            />
          ))}

          {/* SHOE PARTS */}
          {accessory.map((a) => (
            <skinnedMesh
              key={a.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[a.itemId]].geometry}
              material={nodes.accessory001001.material}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[a.itemId]].skeleton}
            />
          ))}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/character.glb')
