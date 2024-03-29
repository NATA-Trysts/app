import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

import { customColorHueMapping, Text } from '@/components/Commons'
import { MyInformationCard as InformationCard } from '@/components/MyInformationCard'
import { Option, Popover } from '@/components/Popover'
import { useAppStore, useMemberStore, useVirtualSpaceStore } from '@/stores'

//#region STYLES
const MemberInforContainer = styled.div<{ background: string }>`
  padding: 8px;
  border-radius: 12px;
  background: ${(props) => props.background};
`

const MemberHandler = styled(Text)`
  margin-left: 12px;
  margin-right: 12px;
`

const Gap = styled.div`
  height: 14px;
  width: 2px;
`

const CustomInformationCard = styled(motion.div)`
  display: flex;
  width: 200px;
`

const CustomOption = styled(Option)<{ hoverBackground?: string; textColor: string }>`
  background: transparent;
  color: ${(props) => props.textColor};

  span {
    color: ${(props) => props.textColor};
  }

  :hover {
    background: ${(props) => props.hoverBackground};
  }
`
//#endregion

export const MyInformationCard = () => {
  const color = useAppStore((state) => state.customColor)
  const [isEditAvatar, setIsEditAvatar] = useVirtualSpaceStore((state) => [state.isEditAvatar, state.setIsEditAvatar])
  const [user] = useMemberStore((state) => [state.user])

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const openEditAvatar = () => {
    setIsEditAvatar(!isEditAvatar)
    setIsPopoverOpen(false)
  }

  return (
    <Popover
      align="end"
      content={
        <MemberInforContainer background={`hsla(${customColorHueMapping[color]}, 79%, 11%, 1)`}>
          <Gap />
          <MemberHandler size="medium" weight="normal">
            {user.handler}
          </MemberHandler>
          <Gap />
          <CustomOption
            hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
            textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
            title="Edit avatar"
            onClick={openEditAvatar}
          />
          <CustomOption
            customHoverBackgroundColor="#FC677B"
            textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
            title="Log out"
            onClick={() => {}}
          />
        </MemberInforContainer>
      }
      handleClickTrigger={() => setIsPopoverOpen(!isPopoverOpen)} // ISSUE: does not close
      handleInteractOutside={() => setIsPopoverOpen(false)}
      isPopoverOpen={isPopoverOpen}
      side="right"
      sideOffset={12}
    >
      <CustomInformationCard
        animate={{
          y: isEditAvatar ? 100 : 0,
        }}
      >
        <InformationCard handler={user.handler} name={user.username} />
      </CustomInformationCard>
    </Popover>
  )
}
