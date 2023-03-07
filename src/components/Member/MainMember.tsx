import { CharacterControl, useCharacterControl } from '@sonhaaa/3d-playground'
import { useRef } from 'react'
import { Group } from 'three'

import { MESSAGES } from '@/libs/constants'
import { useNetworkStore, useVirtualSpaceStore } from '@/stores'

import { BaseCharacterModel } from './BaseCharacterModel'

export const MainMember = () => {
  const canControlCharacter = useVirtualSpaceStore((state) => state.canControlCharacter)
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const playerRef = useRef<Group>(null)
  const anim = useCharacterControl(['idle', 'run'])

  const dispatchMovement = (character: Group) => {
    roomInstance?.send(MESSAGES.MEMBER.MOVE, {
      position: {
        x: character.position.x,
        y: character.position.y - 2,
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

  return (
    <CharacterControl
      cameraPosition={[20, 6, 20]}
      canControl={canControlCharacter}
      collider={[1.5, 2, 1.5]}
      initialPosition={[0, 5, 0]}
      polarAngle={[0.5, Math.PI / 2]}
      onAnimationChange={dispatchAction}
      onCharacterMove={dispatchMovement}
    >
      <BaseCharacterModel ref={playerRef} action={anim} />
    </CharacterControl>
  )
}
