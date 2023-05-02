import { motion } from 'framer-motion'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as LeftUpIcon } from '@/assets/icons/left-up.svg'
import { customColorHueMapping } from '@/components/Commons'
import { Option, Popover } from '@/components/Popover'
import { VirtualSpaceNameCard } from '@/components/VirtualSpace'
import { FullLogo } from '@/components/VirtualSpace/FullLogo'
import { useAppStore, useVirtualSpaceStore } from '@/stores'

const Container = styled(motion.section)`
  pointer-events: auto;
  grid-area: header;
  padding: 16px;
  display: flex;
  gap: 8px;
`

const LogoPopover = styled(motion.div)<{ backgroundColor: string }>`
  padding: 8px;
  border-radius: 12px;
  background: ${(props) => props.backgroundColor};
  border-radius: 12px;
`

const CustomOption = styled(Option)<{ textColor: string }>`
  width: 200px;
  height: 34px;
  background: transparent;

  span {
    color: ${(props) => props.textColor};
  }

  svg {
    position: absolute;
    right: 12px;
    path {
      stroke: ${(props) => props.textColor};
    }
    rect {
      stroke: ${(props) => props.textColor};
    }
    ellipse {
      stroke: ${(props) => props.textColor};
    }
  }

  &:hover {
    svg {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(154deg) brightness(108%)
        contrast(101%);
    }
  }
`

export const Header = () => {
  const [isEditAvatar, spaceName] = useVirtualSpaceStore((state) => [state.isEditAvatar, state.spaceName])
  const color = useAppStore((state) => state.customColor)
  const { spaceId } = useParams<{ spaceId: string }>()

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const logoOptions = [
    {
      title: 'Website',
      onClick: () => {
        window.open('https://trysts.io', '_blank')
        setIsPopoverOpen(false)
      },
      icon: <LeftUpIcon />,
    },
    {
      title: 'Twitter',
      onClick: () => window.open('https://twitter.com/trysts_io', '_blank'),
      icon: <LeftUpIcon />,
    },
    {
      title: 'Telegram',
      onClick: () => window.open('https://twitter.com/trysts_io', '_blank'),
      icon: <LeftUpIcon />,
    },
    {
      title: 'Discord',
      onClick: () => window.open('https://twitter.com/trysts_io', '_blank'),
      icon: <LeftUpIcon />,
    },
    {
      title: 'Contact support',
      onClick: () => {},
    },
    {
      title: 'Report issue',
      onClick: () => {},
    },
  ]

  return (
    <Container
      animate={{
        y: isEditAvatar ? -100 : 0,
      }}
    >
      <Popover
        align="start"
        content={
          <LogoPopover backgroundColor={`hsla(${customColorHueMapping[color]}, 79%, 11%, 1)`}>
            {logoOptions.map((option) => (
              <CustomOption
                key={option.title}
                hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
                textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
                title={option.title}
                onClick={option.onClick}
              >
                {option.icon}
              </CustomOption>
            ))}
          </LogoPopover>
        }
        handleClickTrigger={() => setIsPopoverOpen(!isPopoverOpen)} // ISSUE: does not close
        handleInteractOutside={() => setIsPopoverOpen(false)}
        isPopoverOpen={isPopoverOpen}
        side="bottom"
        sideOffset={6}
      >
        <div>
          <FullLogo />
        </div>
      </Popover>
      <VirtualSpaceNameCard name={spaceName} spaceId={spaceId} />
    </Container>
  )
}
