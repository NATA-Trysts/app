import { FC } from 'react'
import styled from 'styled-components'

import { customColorHueMapping, Text } from '@/components/Commons'
import { MemberCard } from '@/components/MemberCard'
import { Option, Popover } from '@/components/Popover'
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
}

const CustomOption = styled(Option)<{ hoverBackground?: string; textColor: string }>`
  background: transparent;

  span {
    color: ${(props) => props.textColor};
  }

  :hover {
    background: ${(props) => props.hoverBackground};
  }
`

export const SingleMemberCard: FC<SingleMemberCardProps> = ({ name, handler }) => {
  const color = useAppStore((state) => state.customColor)

  return (
    <Popover
      align="start"
      content={
        <MemberInforContainer background={`hsla(${customColorHueMapping[color]}, 79%, 11%, 1)`}>
          <MemberHandler size="medium" weight="normal">
            {handler}
          </MemberHandler>
          <Gap />
          <CustomOption
            customHoverBackgroundColor="#FC677B"
            textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
            title="Kick out"
            onClick={() => {}}
          />
        </MemberInforContainer>
      }
      side="left"
      sideOffset={20}
    >
      <MemberCard handler={handler} name={name} />
    </Popover>
  )
}
