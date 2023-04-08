import { isEmpty } from 'lodash-es'

import { Other } from '@/components/Member'
import { useMemberStore } from '@/stores'

export const OtherMember = () => {
  const otherMembers = useMemberStore((state) => state.otherMembers)
  const [nearestMemberIds, addNearestMemberId, removeNearestMemberId] = useMemberStore((state) => [
    state.nearestMemberIds,
    state.addNearestMemberId,
    state.removeNearestMemberId,
  ])

  return (
    <>
      {!isEmpty(otherMembers)
        ? Object.values(otherMembers).map((player) => (
            <Other
              key={player.id}
              action={player.action}
              isNearestMember={nearestMemberIds.includes(player.id)}
              peerId={player.peerId}
              position={[player.position.x, player.position.y, player.position.z]}
              quaternion={[player.quaternion.x, player.quaternion.y, player.quaternion.z, player.quaternion.w]}
              onIntersectEnter={() => {
                addNearestMemberId(player.id)
              }}
              onIntersectExit={() => {
                removeNearestMemberId(player.id)
              }}
            />
          ))
        : null}
    </>
  )
}
