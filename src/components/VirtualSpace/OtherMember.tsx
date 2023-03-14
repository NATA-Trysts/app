import { isEmpty } from 'lodash-es'

import { Other } from '@/components/Member'
import { useMemberStore } from '@/stores'

export const OtherMember = () => {
  const otherMembers = useMemberStore((state) => state.otherMembers)

  return (
    <>
      {!isEmpty(otherMembers)
        ? Object.values(otherMembers).map((player) => (
            <Other
              key={player.id}
              action={player.action}
              id={player.id}
              position={[player.position.x, player.position.y, player.position.z]}
              quaternion={[player.quaternion.x, player.quaternion.y, player.quaternion.z, player.quaternion.w]}
            />
          ))
        : null}
    </>
  )
}
