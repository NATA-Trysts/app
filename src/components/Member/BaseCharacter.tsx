// @ts-nocheck

import { useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { Group } from 'three'
import { GLTF, SkeletonUtils } from 'three-stdlib'

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
} & JSX.IntrinsicElements['group']

export function BaseCharacter(props: ModelProps) {
  const group = useRef<Group>()
  const { scene, materials, animations } = useGLTF('/models/character.glb') as GLTFResult
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)

  const [tattooCircle] = useTexture(['/textures/t.tattoo.001.png'], (textures) => {
    textures.map((t) => (t.flipY = false))
  })

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
          <skinnedMesh geometry={nodes.body.geometry} skeleton={nodes.body.skeleton}>
            <meshBasicMaterial map={tattooCircle} />
          </skinnedMesh>
          <skinnedMesh geometry={nodes.Cube020.geometry} material={materials.head} skeleton={nodes.Cube020.skeleton} />
          <skinnedMesh
            geometry={nodes.Cube020_1.geometry}
            material={materials.ear}
            skeleton={nodes.Cube020_1.skeleton}
          />
          {/* <skinnedMesh geometry={nodes.neck.geometry} material={nodes.neck.material} skeleton={nodes.neck.skeleton} /> */}

          {/* HAIR PARTS */}
          {/* <skinnedMesh geometry={nodes.hair001.geometry} material={materials.hair} skeleton={nodes.hair001.skeleton} /> */}
          <skinnedMesh
            geometry={nodes.hair002.geometry}
            material={materials.Material}
            skeleton={nodes.hair002.skeleton}
          />

          {/* HAT PARTS */}
          {/* <skinnedMesh
            geometry={nodes.hat001.geometry}
            material={nodes.hat001.material}
            skeleton={nodes.hat001.skeleton}
          />
          <skinnedMesh
            geometry={nodes.hat002.geometry}
            material={nodes.hat002.material}
            skeleton={nodes.hat002.skeleton}
          /> */}

          {/* UPPER PARTS */}
          {/* <skinnedMesh
            geometry={nodes.upper001.geometry}
            material={nodes.upper001.material}
            skeleton={nodes.upper001.skeleton}
          /> */}
          {/* <skinnedMesh
            geometry={nodes.upper002.geometry}
            material={nodes.upper002.material}
            skeleton={nodes.upper002.skeleton}
          /> */}

          {/* LOWER PARTS */}
          <skinnedMesh
            geometry={nodes.lower001.geometry}
            material={nodes.lower001.material}
            skeleton={nodes.lower001.skeleton}
          />
          {/* <skinnedMesh
            geometry={nodes.lower002.geometry}
            material={nodes.lower002.material}
            skeleton={nodes.lower002.skeleton}
          /> */}

          {/* SHOE PARTS */}
          <skinnedMesh
            geometry={nodes.shoe001.geometry}
            material={nodes.shoe001.material}
            skeleton={nodes.shoe001.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/character.glb')
