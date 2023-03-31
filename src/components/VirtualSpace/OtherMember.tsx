import { isEmpty } from 'lodash-es'

import { Other } from '@/components/Member'
import { useMemberStore } from '@/stores'

export const OtherMember = () => {
  const otherMembers = useMemberStore((state) => state.otherMembers)
  const [nearestMembers, addNearestMember, removeNearestMember] = useMemberStore((state) => [
    state.nearestMembers,
    state.addNearestMember,
    state.removeNearestMember,
  ])

  return (
    <>
      {!isEmpty(otherMembers)
        ? Object.values(otherMembers).map((player) => (
            <Other
              key={player.id}
              action={player.action}
              isNearestMember={!!nearestMembers[player.id]}
              peerId={player.peerId}
              position={[player.position.x, player.position.y, player.position.z]}
              quaternion={[player.quaternion.x, player.quaternion.y, player.quaternion.z, player.quaternion.w]}
              onIntersectEnter={() => addNearestMember(player.id, player)}
              onIntersectExit={() => removeNearestMember(player.id)}
            />
          ))
        : null}
    </>
  )
}
