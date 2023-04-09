import { selectIsLocalVideoEnabled, selectLocalPeer, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CharacterControl, useCharacterControl } from '@sonhaaa/3d-playground'
import { useEffect, useRef, useState } from 'react'
import { useKeyPressEvent } from 'react-use'
import {
  Group,
  Mesh,
  // Quaternion,
  Texture,
  // Vector3,
  VideoTexture,
} from 'three'

import { MESSAGES } from '@/libs/constants'
import { generateAnimationString } from '@/libs/utils'
import { useEditCharacterStore, useMemberStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

// import { Pug } from '../Pet'
import { BaseCharacter } from './BaseCharacter'

const VIDEO_WIDTH = 2

// const pV = new Vector3(1, -2, 2)
// const pQ = new Quaternion()
// const pP = new Vector3(0, -2, 0)

type StringMapping<T> = {
  [id: string]: T
}

const ANIMATION_COUNT_MAPPING: StringMapping<number> = {
  angry: 1,
  bow: 1,
  cheer: 1,
  clap: 1,
  dance: 1,
  discuss: 1,
  fall: 3,
  hit: 3,
  idle: 5,
  // idle: 1,
  kick: 4,
  lay: 1,
  punch: 3,
  run: 1,
  sad: 2,
  sit: 4,
  victory: 1,
  wave: 1,
  walk: 1,
}

export const MainMember = () => {
  const isInputFocus = useEditCharacterStore((state) => state.isInputFocus)
  const categorySelectedItemIds = useEditCharacterStore((state) => state.categorySelectedItemIds)
  const isEditAvatar = useVirtualSpaceStore((state) => state.isEditAvatar)
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const anim = useCharacterControl(['idle', 'walk'])
  const videoFrame = useRef<Mesh>(null)
  const [videoTexture, setVideoTexture] = useState<VideoTexture>()
  const [tempTexture] = useTexture([
    'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
  ])
  const [tattooSpot, tattooDragon, tattooRing] = useTexture(
    ['/textures/t.tattoo.001.001.png', '/textures/t.tattoo.001.002.png', '/textures/t.tattoo.001.003.png'],
    (textures) => {
      ;(textures as Texture[]).map((t) => (t.flipY = false))
    },
  )

  const TATTOO_MAPPING: StringMapping<Texture> = {
    'tattoo.001.001.001': tattooSpot,
    'tattoo.001.001.002': tattooDragon,
    'tattoo.001.001.003': tattooRing,
  }

  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled)
  const localPeer = useHMSStore(selectLocalPeer)
  const hmsActions = useHMSActions()
  const videoElement = document.getElementById('my-video') as HTMLVideoElement
  const [mainMemberAnimation, setMainMemberAnimation] = useMemberStore((state) => [
    state.mainMemberAnimation,
    state.setMainMemberAnimation,
  ])
  // const pugRef = useRef<Group>(null)
  // const pugRunTime = useRef(0)

  const attachVideo = () => {
    if (localPeer && localPeer.videoTrack && videoElement) {
      hmsActions.attachVideo(localPeer.videoTrack, videoElement)
      setVideoTexture(new VideoTexture(videoElement))
    }
  }

  useEffect(() => {
    attachVideo()
  }, [videoEnabled, isEditAvatar, localPeer])

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

  useFrame(({ camera }) => {
    if (videoFrame.current) videoFrame.current.lookAt(camera.position)

    // if (anim == 'walk') {
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

  const changeAnimation = (animation: string) => {
    const randomAnimation: string = generateAnimationString(animation, ANIMATION_COUNT_MAPPING[animation] - 1)

    setMainMemberAnimation(randomAnimation)
    roomInstance?.send(MESSAGES.MEMBER.ACTION, {
      action: randomAnimation,
    })
  }

  const bow = () => changeAnimation('bow')
  const cheer = () => changeAnimation('cheer')
  const clap = () => changeAnimation('clap')
  const dance = () => changeAnimation('dance')
  const discuss = () => changeAnimation('discuss')
  const lay = () => changeAnimation('lay')
  const angry = () => changeAnimation('angry')
  const wave = () => changeAnimation('wave')
  const sad = () => changeAnimation('sad')
  // const punch = () => changeAnimation('punch')
  // const sit = () => changeAnimation('sit')
  // const kick = () => changeAnimation('kick')
  // const hit = () => changeAnimation('hit')

  useKeyPressEvent('1', wave)
  useKeyPressEvent('2', bow)
  useKeyPressEvent('3', cheer)
  useKeyPressEvent('4', dance)
  useKeyPressEvent('5', discuss)
  useKeyPressEvent('6', lay)
  useKeyPressEvent('7', clap)
  useKeyPressEvent('8', sad)
  useKeyPressEvent('9', angry)

  return (
    <>
      <CharacterControl
        cameraPosition={[20, 6, 20]}
        canControl={!isInputFocus}
        collider={[1.25, 2, 1.25]}
        initialPosition={[0, 5, 0]}
        polarAngle={[0.5, Math.PI / 2]}
        speed={6}
        onAnimationChange={() => changeAnimation(anim)}
        onCharacterMove={dispatchMovement}
      >
        <BaseCharacter
          accessory={categorySelectedItemIds.get('accessory')}
          action={mainMemberAnimation}
          hair={categorySelectedItemIds.get('hair')}
          lower={categorySelectedItemIds.get('lower')}
          shoe={categorySelectedItemIds.get('shoe')}
          skin={categorySelectedItemIds.get('skin')}
          tattoo={
            TATTOO_MAPPING[
              ((categorySelectedItemIds.get('tattoo') as any).length > 0
                ? (categorySelectedItemIds.get('tattoo') as any)[0].itemId
                : '') as any
            ]
          }
          upper={categorySelectedItemIds.get('upper')}
        />
        {isEditAvatar && videoEnabled && (
          <mesh ref={videoFrame} position={[0, 4.5, 0]}>
            <planeGeometry args={[VIDEO_WIDTH, (VIDEO_WIDTH * 3) / 4]} />
            <meshBasicMaterial map={videoTexture || tempTexture} toneMapped={true} />
          </mesh>
        )}
      </CharacterControl>
      {/* <Pug ref={pugRef} anim={anim === 'idle.000' ? 'Idle' : 'Run'} /> */}
    </>
  )
}
