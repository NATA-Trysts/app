import { useMemberStore } from '@/stores'

export const useMember = () => {
  const [mainMember, otherMembers] = useMemberStore((state) => [state.mainMember, state.otherMembers])
  const allMember = [mainMember, ...Object.values(otherMembers)]
  const hostMember = allMember.find((member) => member?.isHost === true)

  return { allMember, hostMember }
}
