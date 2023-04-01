import React, { useEffect } from 'react'
import styled from 'styled-components'

import axios from '@/api/axios'
import { ReactComponent as Play } from '@/assets/icons/play.svg'
import { ReactComponent as Save } from '@/assets/icons/save.svg'
import { ToolbarContainer, ToolbarItem, WithTooltip } from '@/components/Toolbar'
import { useBuilderStore } from '@/stores'

import { ZoomTool } from './ZoomTool'

const Container = styled.div`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  --color-5: #191a1d;
  --color-4: #212225;
  --color-3: #696969;
  user-select: none;
`

export const BuilderToolbar = () => {
  const [spaceInformation] = useBuilderStore((state) => [state.spaceInformation])

  const handleSave = () => {
    axios.put(`/spaces/${'olrWFR6VXN389Pzq'}`, {
      space: {
        name: spaceInformation.name,
        password: spaceInformation.isProtected ? spaceInformation.password : '',
      },
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      axios.put(`/spaces/${'olrWFR6VXN389Pzq'}`, {
        space: {
          name: spaceInformation.name,
          password: spaceInformation.isProtected ? spaceInformation.password : '',
        },
      })
    }, 20000)

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <Container>
      <ToolbarContainer>
        <ToolbarItem onClick={handleSave}>
          <WithTooltip content="Save" id="save">
            <Save />
          </WithTooltip>
        </ToolbarItem>
        <ToolbarItem>
          <ZoomTool />
        </ToolbarItem>
        <ToolbarItem>
          <WithTooltip content="Host space" id="host-space">
            <Play />
          </WithTooltip>
        </ToolbarItem>
      </ToolbarContainer>
    </Container>
  )
}
