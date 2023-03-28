import { selectIsLocalVideoEnabled, selectLocalPeer, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CharacterControl, useCharacterControl } from '@sonhaaa/3d-playground'
import { useEffect, useRef, useState } from 'react'
import { Group, Mesh, VideoTexture } from 'three'

import { MESSAGES } from '@/libs/constants'
import { useEditCharacterStore, useNetworkStore, useVirtualSpaceStore } from '@/stores'

import { BaseCharacter } from './BaseCharacter'

const VIDEO_WIDTH = 2

export const MainMember = () => {
  const isInputFocus = useEditCharacterStore((state) => state.isInputFocus)
  const isEditAvatar = useVirtualSpaceStore((state) => state.isEditAvatar)
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const anim = useCharacterControl(['idle', 'walk'])
  const videoFrame = useRef<Mesh>(null)
  const [videoTexture, setVideoTexture] = useState<VideoTexture>()
  const [tempTexture] = useTexture([
    'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
  ])
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled)
  const localPeer = useHMSStore(selectLocalPeer)
  const hmsActions = useHMSActions()

  useEffect(() => {
    const videoElement = document.getElementById(`my`) as HTMLVideoElement

    if (localPeer && localPeer.videoTrack && videoElement) {
      hmsActions.attachVideo(localPeer.videoTrack, videoElement)
      setVideoTexture(new VideoTexture(videoElement))
    }
  }, [videoEnabled, isEditAvatar])

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
  }

  const dispatchAction = () => {
    roomInstance?.send(MESSAGES.MEMBER.ACTION, {
      action: anim,
    })
  }

  useFrame(({ camera }) => {
    if (videoFrame.current) videoFrame.current.lookAt(camera.position)
  })

  return (
    <CharacterControl
      cameraPosition={[20, 6, 20]}
      canControl={!isInputFocus}
      collider={[1.5, 2, 1.5]}
      initialPosition={[0, 5, 0]}
      polarAngle={[0.5, Math.PI / 2]}
      speed={6}
      onAnimationChange={dispatchAction}
      onCharacterMove={dispatchMovement}
    >
      <BaseCharacter action={anim} />
      {isEditAvatar && videoEnabled && (
        <mesh ref={videoFrame} position={[0, 4.5, 0]}>
          <planeGeometry args={[VIDEO_WIDTH, (VIDEO_WIDTH * 3) / 4]} />
          <meshBasicMaterial map={videoTexture || tempTexture} toneMapped={true} />
        </mesh>
      )}
    </CharacterControl>
  )
}
