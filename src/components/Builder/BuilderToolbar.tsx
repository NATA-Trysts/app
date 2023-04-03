import React from 'react'
import { useDebounce } from 'react-use'
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
  const [spaceInformation, models] = useBuilderStore((state) => [state.spaceInformation, state.models])

  const handleSave = () => {
    // temp fixed id
    axios.put(`/spaces/${'Dvhq09IY6CFwpj75'}`, {
      space: {
        name: spaceInformation.name,
        password: spaceInformation.isProtected ? spaceInformation.password : '',
        models: models,
      },
    })
  }

  useDebounce(
    () => {
      // temp fixed id
      axios.put(`/spaces/${'Dvhq09IY6CFwpj75'}`, {
        space: {
          name: spaceInformation.name,
          password: spaceInformation.isProtected ? spaceInformation.password : '',
          models: models,
        },
      })
    },
    2000,
    [spaceInformation, models],
  )

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
