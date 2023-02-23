import { FC } from 'react'
import styled from 'styled-components'

import { MemberCard } from '@/components/MemberCard'
import { Option, Popover } from '@/components/Popover'
import { Text } from '@/layouts/common'
import { useAppStore } from '@/stores'

const MemberInforContainer = styled.div<{ background: string }>`
  padding: 8px;
  border-radius: 12px;
  background: ${(props) => props.background};
  width: 160px;
`

const MemberHandler = styled(Text)`
  margin-left: 12px;
`

const Gap = styled.div`
  height: 8px;
  width: 2px;
`

type SingleMemberCardProps = {
  name: string
  handler: string
  avatar: string
}

const customColorHueMapping = {
  purple: 291,
  green: 137,
  blue: 216,
}

const CustomOption = styled(Option)<{ hoverBackground?: string }>`
  background: transparent;

  :hover {
    background: ${(props) => props.hoverBackground};
  }
`

export const SingleMemberCard: FC<SingleMemberCardProps> = ({ name, handler, avatar }) => {
  const color = useAppStore((state) => state.customColor)

  return (
    <Popover
      align="start"
      content={
        <MemberInforContainer background={`hsla(${customColorHueMapping[color]}, 81%, 6%, 1)`}>
          <MemberHandler size="medium" weight="normal">
            {handler}
          </MemberHandler>
          <Gap />
          <CustomOption customHoverBackgroundColor="#FC677B" title="Kick out" onClick={() => {}} />
        </MemberInforContainer>
      }
      side="left"
      sideOffset={20}
    >
      <MemberCard avatar={avatar} handler={handler} name={name} />
    </Popover>
  )
}
