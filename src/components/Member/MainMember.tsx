import { selectIsLocalVideoEnabled, selectLocalPeer, useHMSStore } from '@100mslive/react-sdk'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CharacterControl, useCharacterControl } from '@sonhaaa/3d-playground'
import { useRef } from 'react'
import { useKeyPressEvent } from 'react-use'
import {
  Group,
  // Quaternion,
  // Vector3
  Texture,
} from 'three'

import { ANIMATION_COUNT_MAPPING, MESSAGES, ValueMapping } from '@/libs/constants'
import { generateAnimationString } from '@/libs/utils'
import { useEditCharacterStore, useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

// import { Pug } from '../Pet'
import { BaseCharacter } from './BaseCharacter'
import { Vid } from './Other'

// const pV = new Vector3(1, -2, 2)
// const pQ = new Quaternion()
// const pP = new Vector3(0, -2, 0)

export const MainMember = () => {
  const isInputFocus = useEditCharacterStore((state) => state.isInputFocus)
  const categorySelectedItemIds = useEditCharacterStore((state) => state.categorySelectedItemIds)
  const isEditAvatar = useVirtualSpaceStore((state) => state.isEditAvatar)
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const anim = useCharacterControl(['idle', 'walk'])
  const [tattooSpot, tattooDragon, tattooRing] = useTexture(
    ['/textures/t.tattoo.001.001.png', '/textures/t.tattoo.001.002.png', '/textures/t.tattoo.001.003.png'],
    (textures) => {
      ;(textures as Texture[]).map((t) => (t.flipY = false))
    },
  )
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled)
  const localPeer = useHMSStore(selectLocalPeer)

  const [mainMemberAnimation, setMainMemberAnimation] = useMemberStore((state) => [
    state.mainMemberAnimation,
    state.setMainMemberAnimation,
  ])
  const prevAnim = useRef(mainMemberAnimation[0])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const TATTOO_MAPPING: ValueMapping<Texture> = {
    'tattoo.001.001.001': tattooSpot,
    'tattoo.001.001.002': tattooDragon,
    'tattoo.001.001.003': tattooRing,
  }

  // const pugRef = useRef<Group>(null)
  // const pugRunTime = useRef(0)

  const dispatchMovement = (character: Group) => {
    roomInstance?.send(MESSAGES.MEMBER.MOVE, {
      position: {
        x: character.position.x,
        y: character.position.y,
        z: character.position.z,
      },
      quaternion: {
        x: character.quaternion.x,
        y: character.quaternion.y,
        z: character.quaternion.z,
        w: character.quaternion.w,
      },
    })

    // pV.set(character.position.x - 2, -2, character.position.z - 2)
    // pQ.setFromEuler(character.rotation)
  }

  useFrame(() => {
    // if (anim === 'walk') {
    //   pugRunTime.current += delta
    // } else {
    //   pugRunTime.current = 0
    // }
    // pP.set(pV.x, pV.y, pV.z)
    // pP.setX(pP.x + Math.sin(2 * pugRunTime.current))
    // pP.setZ(pP.z + Math.sin(2 * pugRunTime.current))
    // pugRef.current?.position.lerp(pP, 0.05)
    // pugRef.current?.quaternion.slerp(pQ, 0.2)
  })

  const changeAnimation = (animation: string, once: boolean) => {
    const randomAnimation: string = generateAnimationString(animation, ANIMATION_COUNT_MAPPING[animation] - 1)

    if (prevAnim.current !== randomAnimation) {
      setMainMemberAnimation([randomAnimation, once])
      prevAnim.current = randomAnimation
      roomInstance?.send(MESSAGES.MEMBER.ACTION, {
        action: randomAnimation,
      })
    }
  }

  const bow = () => changeAnimation('bow', false)
  const cheer = () => changeAnimation('cheer', false)
  const clap = () => changeAnimation('clap', false)
  const dance = () => changeAnimation('dance', false)
  const discuss = () => changeAnimation('discuss', false)
  const lay = () => changeAnimation('lay', false)
  const angry = () => changeAnimation('angry', false)
  const wave = () => changeAnimation('wave', false)
  const sad = () => changeAnimation('sad', false)
  const sit = () => changeAnimation('sit', false)
  const punch = () => changeAnimation('punch', true)
  const kick = () => changeAnimation('kick', true)

  useKeyPressEvent('1', wave)
  useKeyPressEvent('2', bow)
  useKeyPressEvent('3', cheer)
  useKeyPressEvent('4', dance)
  useKeyPressEvent('5', discuss)
  useKeyPressEvent('6', lay)
  useKeyPressEvent('7', clap)
  useKeyPressEvent('8', sad)
  useKeyPressEvent('9', angry)

  useKeyPressEvent('c', punch)
  useKeyPressEvent('x', sit)
  useKeyPressEvent('k', kick)

  return (
    <>
      <CharacterControl
        cameraPosition={[20, 6, 20]}
        canControl={!isInputFocus}
        collider={[1.25, 2, 1.25]}
        frameOffset={1}
        initialPosition={[0, 0, 0]}
        polarAngle={[0.5, Math.PI / 2]}
        speed={6}
        onAnimationChange={() => changeAnimation(anim, false)}
        onCharacterMove={dispatchMovement}
      >
        <BaseCharacter
          accessory={categorySelectedItemIds.get('accessory')}
          action={mainMemberAnimation}
          hair={categorySelectedItemIds.get('hair')}
          lower={categorySelectedItemIds.get('lower')}
          shoe={categorySelectedItemIds.get('shoe')}
          skin={categorySelectedItemIds.get('skin')}
          // tattoo={
          //   TATTOO_MAPPING[
          //     ((categorySelectedItemIds.get('tattoo') as any).length > 0
          //       ? (categorySelectedItemIds.get('tattoo') as any)[0].itemId
          //       : '') as any
          //   ]
          // }
          upper={categorySelectedItemIds.get('upper')}
          onAnimationFinished={() => {
            changeAnimation('idle', false)
          }} //use for the animation that plays once (punch, kick, etc)
        />
        {isEditAvatar && videoEnabled && <Vid peerId={localPeer?.id} />}
      </CharacterControl>
      {/* <Pug ref={pugRef} anim={anim === 'idle.000' ? 'Idle' : 'Run'} /> */}
    </>
  )
}
