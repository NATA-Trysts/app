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
  const { scene, materials, animations } = useGLTF('/models/character-base-v3-uv-transformed.glb') as GLTFResult
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone) as GLTFResult
  const { actions, mixer } = useAnimations<GLTFActions>(animations, group)
  const tattooRef = useRef<SkinnedMesh>(null)

  useEffect(() => {
    if (tattooRef.current) {
      tattooRef.current.material.map = tattoo
      tattooRef.current.material.needsUpdate = true
    }
  }, [tattoo])

  useEffect(() => {
    props.action && actions[props.action].reset().fadeIn(0.2).play()
    mixer.addEventListener('finished', (e) => console.log('end', e))

    return () => {
      // mixer.removeEventListener('finished', fn)
      actions[props.action] && actions[props.action].fadeOut(0.2)
    }
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
              material={nodes.upper001001001.material}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[u.itemId]].skeleton}
            />
          ))}

          {/* LOWER PARTS */}
          {lower.map((l) => (
            <skinnedMesh
              key={l.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[l.itemId]].geometry}
              material={nodes.lower001001001.material}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[l.itemId]].skeleton}
            />
          ))}

          {/* SHOE PARTS */}
          {shoe.map((s) => (
            <skinnedMesh
              key={s.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[s.itemId]].geometry}
              material={nodes.shoe001001001.material}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[s.itemId]].skeleton}
            />
          ))}

          {/* SHOE PARTS */}
          {accessory.map((a) => (
            <skinnedMesh
              key={a.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[a.itemId]].geometry}
              material={nodes.accessory001001001.material}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[a.itemId]].skeleton}
            />
          ))}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/character-base-v3-uv-transformed.glb')
