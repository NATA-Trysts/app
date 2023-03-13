import { isEmpty } from 'lodash-es'

import { useMemberStore } from '@/stores'

import { VideoReference } from '../VideoCall/VideoReference'

export const OtherMemberVideoReference = () => {
  const otherMembers = useMemberStore((state) => state.otherMembers)

  return (
    <>
      {!isEmpty(otherMembers)
        ? Object.values(otherMembers).map((player) => <VideoReference key={player.id} id={`video-ref-${player.id}`} />)
        : null}
    </>
  )
}
