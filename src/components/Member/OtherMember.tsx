import { isEmpty } from 'lodash-es'

import { useMemberStore } from '@/stores'

import { Other } from './Other'

const OtherPlayers = () => {
  const otherPlayers = useMemberStore((state) => state.otherMembers)

  return (
    <>
      {!isEmpty(otherPlayers)
        ? Object.values(otherPlayers).map((player) => (
            <Other
              key={player.id}
              action={player.action}
              position={[player.position.x, player.position.y, player.position.z]}
              quaternion={[player.quaternion.x, player.quaternion.y, player.quaternion.z, player.quaternion.w]}
            />
          ))
        : null}
    </>
  )
}

export default OtherPlayers
