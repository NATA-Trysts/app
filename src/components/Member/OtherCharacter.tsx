// @ts-nocheck

import { useAnimations, useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { Group } from 'three'
import { GLTF, SkeletonUtils } from 'three-stdlib'

import { CHARACTER_CONFIG_VALUE_MAPPING } from '@/libs/constants'
import { SubcategoryActiveItem } from '@/stores'

//#region

type GLTFResult = GLTF & {
  nodes: {
    accessory001001002: THREE.SkinnedMesh
    accessory001001003: THREE.SkinnedMesh
    accessory001001005: THREE.SkinnedMesh
    accessory001001001: THREE.SkinnedMesh
    accessory001001004: THREE.SkinnedMesh
    accessory001002004: THREE.SkinnedMesh
    accessory001002003: THREE.SkinnedMesh
    accessory001002001: THREE.SkinnedMesh
    accessory001002005: THREE.SkinnedMesh
    accessory001002006: THREE.SkinnedMesh
    accessory001002002: THREE.SkinnedMesh
    accessory001003003: THREE.SkinnedMesh
    accessory001003001: THREE.SkinnedMesh
    choker: THREE.SkinnedMesh
    accessory001003004: THREE.SkinnedMesh
    hair001001002: THREE.SkinnedMesh
    accessory001003002: THREE.SkinnedMesh
    hair001001001: THREE.SkinnedMesh
    hair001001003: THREE.SkinnedMesh
    hair001001004: THREE.SkinnedMesh
    body: THREE.SkinnedMesh
    accessory001003005: THREE.SkinnedMesh
    hair001001005: THREE.SkinnedMesh
    hair001002002: THREE.SkinnedMesh
    hair001001007: THREE.SkinnedMesh
    hair001001006: THREE.SkinnedMesh
    head: THREE.SkinnedMesh
    hair001001008: THREE.SkinnedMesh
    hair001002004: THREE.SkinnedMesh
    lower001002002: THREE.SkinnedMesh
    lower001001002: THREE.SkinnedMesh
    hair001002001: THREE.SkinnedMesh
    hair001002003: THREE.SkinnedMesh
    lower001001004: THREE.SkinnedMesh
    lower001001001: THREE.SkinnedMesh
    lower001002001: THREE.SkinnedMesh
    lower001002006: THREE.SkinnedMesh
    lower001001003: THREE.SkinnedMesh
    lower001002004: THREE.SkinnedMesh
    lower001002005: THREE.SkinnedMesh
    lower001002010: THREE.SkinnedMesh
    lower001002015: THREE.SkinnedMesh
    lower001002003: THREE.SkinnedMesh
    lower001002009: THREE.SkinnedMesh
    lower001002008: THREE.SkinnedMesh
    lower001002012: THREE.SkinnedMesh
    lower001002007: THREE.SkinnedMesh
    lower001003004: THREE.SkinnedMesh
    lower001002014: THREE.SkinnedMesh
    lower001002011: THREE.SkinnedMesh
    lower001002013: THREE.SkinnedMesh
    lower001003005: THREE.SkinnedMesh
    lower001003001: THREE.SkinnedMesh
    lower001003003: THREE.SkinnedMesh
    lower001003007: THREE.SkinnedMesh
    lower001003006: THREE.SkinnedMesh
    lower001003009: THREE.SkinnedMesh
    lower001003002: THREE.SkinnedMesh
    shoe001001001: THREE.SkinnedMesh
    lower001003011: THREE.SkinnedMesh
    lower001003010: THREE.SkinnedMesh
    shoe001001003: THREE.SkinnedMesh
    shoe001001005: THREE.SkinnedMesh
    lower001003008: THREE.SkinnedMesh
    neck: THREE.SkinnedMesh
    shoe001001004: THREE.SkinnedMesh
    shoe001001007: THREE.SkinnedMesh
    shoe001001009: THREE.SkinnedMesh
    shoe001001008: THREE.SkinnedMesh
    shoe001001002: THREE.SkinnedMesh
    shoe001002001: THREE.SkinnedMesh
    shoe001002003: THREE.SkinnedMesh
    shoe001002002: THREE.SkinnedMesh
    shoe001001006: THREE.SkinnedMesh
    shoe001001010: THREE.SkinnedMesh
    upper001001001: THREE.SkinnedMesh
    shoe001002004: THREE.SkinnedMesh
    upper001001003: THREE.SkinnedMesh
    upper001001002: THREE.SkinnedMesh
    upper001002001: THREE.SkinnedMesh
    upper001001005: THREE.SkinnedMesh
    upper001001004: THREE.SkinnedMesh
    upper001002005: THREE.SkinnedMesh
    upper001001006: THREE.SkinnedMesh
    upper001002003: THREE.SkinnedMesh
    upper001002006: THREE.SkinnedMesh
    upper001002002: THREE.SkinnedMesh
    upper001002004: THREE.SkinnedMesh
    upper002001003: THREE.SkinnedMesh
    upper002001002: THREE.SkinnedMesh
    upper002001004: THREE.SkinnedMesh
    upper002001001: THREE.SkinnedMesh
    upper002001007: THREE.SkinnedMesh
    upper002001006: THREE.SkinnedMesh
    upper002001008: THREE.SkinnedMesh
    upper002001005: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.027']: THREE.MeshStandardMaterial
    ['Material.026']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Material.028']: THREE.MeshStandardMaterial
    ['Material.025']: THREE.MeshStandardMaterial
    ['Material.044']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
    ['Material.045']: THREE.MeshStandardMaterial
    ['Material.034']: THREE.MeshStandardMaterial
    ['Material.043']: THREE.MeshStandardMaterial
    hair: THREE.MeshStandardMaterial
    ['Material.035']: THREE.MeshStandardMaterial
    ['Material.036']: THREE.MeshStandardMaterial
    ['skin 1']: THREE.MeshStandardMaterial
    ['Material.046']: THREE.MeshStandardMaterial
    ['Material.037']: THREE.MeshStandardMaterial
    ['Material.048']: THREE.MeshStandardMaterial
    ['Material.039']: THREE.MeshStandardMaterial
    ['Material.038']: THREE.MeshStandardMaterial
    ['Material.040']: THREE.MeshStandardMaterial
    ['Material.047']: THREE.MeshStandardMaterial
    ['Material.055']: THREE.MeshStandardMaterial
    ['Material.052']: THREE.MeshStandardMaterial
    ['Material.050']: THREE.MeshStandardMaterial
    ['Material.049']: THREE.MeshStandardMaterial
    ['Material.053']: THREE.MeshStandardMaterial
    ['Material.051']: THREE.MeshStandardMaterial
    ['Material.054']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.057']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.080']: THREE.MeshStandardMaterial
    ['Material.085']: THREE.MeshStandardMaterial
    ['Material.056']: THREE.MeshStandardMaterial
    ['Material.079']: THREE.MeshStandardMaterial
    ['Material.078']: THREE.MeshStandardMaterial
    ['Material.082']: THREE.MeshStandardMaterial
    ['Material.077']: THREE.MeshStandardMaterial
    ['Material.060']: THREE.MeshStandardMaterial
    ['Material.084']: THREE.MeshStandardMaterial
    ['Material.081']: THREE.MeshStandardMaterial
    ['Material.083']: THREE.MeshStandardMaterial
    ['Material.020']: THREE.MeshStandardMaterial
    ['Material.029']: THREE.MeshStandardMaterial
    ['Material.062']: THREE.MeshStandardMaterial
    ['Material.061']: THREE.MeshStandardMaterial
    ['Material.064']: THREE.MeshStandardMaterial
    ['Material.022']: THREE.MeshStandardMaterial
    ['Material.067']: THREE.MeshStandardMaterial
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.065']: THREE.MeshStandardMaterial
    ['Material.068']: THREE.MeshStandardMaterial
    ['Material.070']: THREE.MeshStandardMaterial
    ['Material.063']: THREE.MeshStandardMaterial
    ['Material.069']: THREE.MeshStandardMaterial
    ['Material.073']: THREE.MeshStandardMaterial
    ['Material.075']: THREE.MeshStandardMaterial
    ['Material.074']: THREE.MeshStandardMaterial
    ['Material.072']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.032']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.071']: THREE.MeshStandardMaterial
    ['Material.076']: THREE.MeshStandardMaterial
    ['Material.087']: THREE.MeshStandardMaterial
    ['Material.033']: THREE.MeshStandardMaterial
    ['Material.088']: THREE.MeshStandardMaterial
    ['Material.086']: THREE.MeshStandardMaterial
    neon: THREE.MeshStandardMaterial
    ['Material.090']: THREE.MeshStandardMaterial
    ['Material.089']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.091']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Material.093']: THREE.MeshStandardMaterial
    ['Material.094']: THREE.MeshStandardMaterial
    ['Material.092']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshPhysicalMaterial
    ['Material.007']: THREE.MeshPhysicalMaterial
    ['Material.009']: THREE.MeshPhysicalMaterial
    ['Material.006']: THREE.MeshPhysicalMaterial
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
  // tattoo?: Texture
} & JSX.IntrinsicElements['group']

export const OtherCharacter = ({
  skin = [],
  hair = [],
  upper = [],
  lower = [],
  shoe = [],
  accessory = [],
  // tattoo,
  ...props
}: ModelProps) => {
  const group = useRef<Group>(null)
  const { scene, materials, animations } = useGLTF.preload(`/models/character-v4.glb`) as GLTFResult
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  const tattooRef = useRef<SkinnedMesh>(null)

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
              material={materials[MATERIAL_MAPPING[h.itemId]]}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[h.itemId]].skeleton}
            />
          ))}

          {/* UPPER PARTS */}
          {upper.map((u) => (
            <skinnedMesh
              key={u.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[u.itemId]].geometry}
              material={materials[MATERIAL_MAPPING[u.itemId]]}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[u.itemId]].skeleton}
            />
          ))}

          {/* LOWER PARTS */}
          {lower.map((l) => (
            <skinnedMesh
              key={l.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[l.itemId]].geometry}
              material={materials[MATERIAL_MAPPING[l.itemId]]}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[l.itemId]].skeleton}
            />
          ))}

          {/* SHOE PARTS */}
          {shoe.map((s) => (
            <skinnedMesh
              key={s.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[s.itemId]].geometry}
              material={materials[MATERIAL_MAPPING[s.itemId]]}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[s.itemId]].skeleton}
            />
          ))}

          {/* SHOE PARTS */}
          {accessory.map((a) => (
            <skinnedMesh
              key={a.id}
              geometry={nodes[CHARACTER_CONFIG_VALUE_MAPPING[a.itemId]].geometry}
              material={materials[MATERIAL_MAPPING[a.itemId]]}
              skeleton={nodes[CHARACTER_CONFIG_VALUE_MAPPING[a.itemId]].skeleton}
            />
          ))}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(`/models/character-v4-transformed.glb`)
