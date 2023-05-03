// @ts-nocheck

import { useAnimations, useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { memo, useEffect, useMemo, useRef } from 'react'
import { Group, LoopOnce, SkinnedMesh, Texture } from 'three'
import { GLTF, SkeletonUtils } from 'three-stdlib'

import { CHARACTER_CONFIG_VALUE_MAPPING } from '@/libs/constants'
import { SubcategoryActiveItem } from '@/stores'

//#region

type GLTFResult = GLTF & {
  nodes: {
    accessory001001001: THREE.SkinnedMesh
    accessory001001003: THREE.SkinnedMesh
    accessory001001004: THREE.SkinnedMesh
    accessory001001002: THREE.SkinnedMesh
    accessory001001005: THREE.SkinnedMesh
    accessory001002001: THREE.SkinnedMesh
    accessory001002002: THREE.SkinnedMesh
    accessory001002003: THREE.SkinnedMesh
    accessory001002004: THREE.SkinnedMesh
    accessory001002005: THREE.SkinnedMesh
    accessory001002006: THREE.SkinnedMesh
    accessory001003001: THREE.SkinnedMesh
    accessory001003002: THREE.SkinnedMesh
    accessory001003003: THREE.SkinnedMesh
    accessory001003004: THREE.SkinnedMesh
    accessory001003005: THREE.SkinnedMesh
    body: THREE.SkinnedMesh
    choker: THREE.SkinnedMesh
    hair001001001: THREE.SkinnedMesh
    hair001001002: THREE.SkinnedMesh
    hair001001003: THREE.SkinnedMesh
    hair001001004: THREE.SkinnedMesh
    hair001001005: THREE.SkinnedMesh
    hair001001006: THREE.SkinnedMesh
    hair001001007: THREE.SkinnedMesh
    hair001001008: THREE.SkinnedMesh
    hair001002002: THREE.SkinnedMesh
    hair001002003: THREE.SkinnedMesh
    hair001002004: THREE.SkinnedMesh
    hair001002001: THREE.SkinnedMesh
    head: THREE.SkinnedMesh
    lower001001001: THREE.SkinnedMesh
    lower001001002: THREE.SkinnedMesh
    lower001001003: THREE.SkinnedMesh
    lower001001004: THREE.SkinnedMesh
    lower001002001: THREE.SkinnedMesh
    lower001002002: THREE.SkinnedMesh
    lower001002003: THREE.SkinnedMesh
    lower001002004: THREE.SkinnedMesh
    lower001002005: THREE.SkinnedMesh
    lower001002006: THREE.SkinnedMesh
    lower001002007: THREE.SkinnedMesh
    lower001002008: THREE.SkinnedMesh
    lower001002009: THREE.SkinnedMesh
    lower001002010: THREE.SkinnedMesh
    lower001002011: THREE.SkinnedMesh
    lower001002012: THREE.SkinnedMesh
    lower001002013: THREE.SkinnedMesh
    lower001002014: THREE.SkinnedMesh
    lower001002015: THREE.SkinnedMesh
    lower001003001: THREE.SkinnedMesh
    lower001003002: THREE.SkinnedMesh
    lower001003003: THREE.SkinnedMesh
    lower001003004: THREE.SkinnedMesh
    lower001003005: THREE.SkinnedMesh
    lower001003006: THREE.SkinnedMesh
    lower001003007: THREE.SkinnedMesh
    lower001003008: THREE.SkinnedMesh
    lower001003009: THREE.SkinnedMesh
    lower001003010: THREE.SkinnedMesh
    lower001003011: THREE.SkinnedMesh
    neck: THREE.SkinnedMesh
    shoe001001001: THREE.SkinnedMesh
    shoe001001003: THREE.SkinnedMesh
    shoe001001004: THREE.SkinnedMesh
    shoe001001005: THREE.SkinnedMesh
    shoe001001006: THREE.SkinnedMesh
    shoe001001002: THREE.SkinnedMesh
    shoe001001007: THREE.SkinnedMesh
    shoe001001008: THREE.SkinnedMesh
    shoe001001009: THREE.SkinnedMesh
    shoe001001010: THREE.SkinnedMesh
    shoe001002001: THREE.SkinnedMesh
    shoe001002002: THREE.SkinnedMesh
    shoe001002003: THREE.SkinnedMesh
    shoe001002004: THREE.SkinnedMesh
    upper001001001: THREE.SkinnedMesh
    upper001001002: THREE.SkinnedMesh
    upper001001003: THREE.SkinnedMesh
    upper001001004: THREE.SkinnedMesh
    upper001001005: THREE.SkinnedMesh
    upper001001006: THREE.SkinnedMesh
    upper001002001: THREE.SkinnedMesh
    upper001002002: THREE.SkinnedMesh
    upper001002003: THREE.SkinnedMesh
    upper001002004: THREE.SkinnedMesh
    upper001002005: THREE.SkinnedMesh
    upper001002006: THREE.SkinnedMesh
    upper002001001: THREE.SkinnedMesh
    upper002001002: THREE.SkinnedMesh
    upper002001003: THREE.SkinnedMesh
    upper002001004: THREE.SkinnedMesh
    upper002001005: THREE.SkinnedMesh
    upper002001006: THREE.SkinnedMesh
    upper002001007: THREE.SkinnedMesh
    upper002001008: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Material.027']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
    ['skin 1']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
    hair: THREE.MeshStandardMaterial
    ['Material.036']: THREE.MeshStandardMaterial
    ['Material.048']: THREE.MeshStandardMaterial
    ['Material.051']: THREE.MeshStandardMaterial
    ['Material.054']: THREE.MeshStandardMaterial
    ['Material.056']: THREE.MeshStandardMaterial
    ['Material.077']: THREE.MeshStandardMaterial
    ['Material.081']: THREE.MeshStandardMaterial
    ['Material.020']: THREE.MeshStandardMaterial
    ['Material.060']: THREE.MeshStandardMaterial
    ['Material.063']: THREE.MeshStandardMaterial
    ['Material.067']: THREE.MeshStandardMaterial
    ['Material.072']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.087']: THREE.MeshStandardMaterial
    neon: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Material.092']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
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
  scale?: number
  action: [string, boolean]
  onAnimationFinished?: () => void
  skin?: SubcategoryActiveItem[]
  hair?: SubcategoryActiveItem[]
  upper?: SubcategoryActiveItem[]
  lower?: SubcategoryActiveItem[]
  shoe?: SubcategoryActiveItem[]
  accessory?: SubcategoryActiveItem[]
  tattoo?: Texture
  positionY?: number
} & JSX.IntrinsicElements['group']

export const BaseCharacter = memo(
  ({
    scale = 0.015,
    skin = [],
    hair = [],
    upper = [],
    lower = [],
    shoe = [],
    accessory = [],
    tattoo,
    positionY = -2,
    ...props
  }: ModelProps) => {
    const group = useRef<Group>(null)
    const { scene, materials, animations } = useGLTF(`/models/character-v4-transformed.glb`) as GLTFResult
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
      if (!props.action[1]) {
        actions[props.action[0]].reset().fadeIn(0.2).play()
      }
      if (props.action[1]) {
        actions[props.action[0]].setLoop(LoopOnce)
        actions[props.action[0]].clampWhenFinished = true
        actions[props.action[0]].enable = false
        actions[props.action[0]].reset().fadeIn(0.2).play()
        mixer.addEventListener('finished', props.onAnimationFinished)
      }

      return () => {
        mixer.removeEventListener('finished', props.onAnimationFinished)
        props.action && actions[props.action[0]] && actions[props.action[0]].fadeOut(0.2)
      }
    }, [props.action])

    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene" position={[0, positionY, 0]}>
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={scale}>
            <primitive object={nodes.mixamorigHips} />
            {skin.length === 0 ? (
              <skinnedMesh ref={tattooRef} geometry={nodes.body.geometry} skeleton={nodes.body.skeleton}>
                <meshStandardMaterial
                  color={CHARACTER_CONFIG_VALUE_MAPPING['skin.default']}
                  metalness={0}
                  roughness={1}
                />
              </skinnedMesh>
            ) : (
              skin.map((s) => (
                <skinnedMesh key={s.id} ref={tattooRef} geometry={nodes.body.geometry} skeleton={nodes.body.skeleton}>
                  <meshStandardMaterial color={CHARACTER_CONFIG_VALUE_MAPPING[s.itemId]} metalness={0} roughness={1} />
                </skinnedMesh>
              ))
            )}
            <skinnedMesh
              geometry={nodes.head.geometry}
              material={materials['skin 1']}
              name="head"
              skeleton={nodes.head.skeleton}
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
  },
)

useGLTF.preload(`/models/character-v4-transformed.glb`)
