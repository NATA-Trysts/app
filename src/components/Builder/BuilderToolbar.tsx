import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDebounce } from 'react-use'
import styled from 'styled-components'

import { ReactComponent as Play } from '@/assets/icons/play.svg'
import { ReactComponent as Save } from '@/assets/icons/save.svg'
import { ToolbarContainer, ToolbarItem, WithTooltip } from '@/components/Toolbar'
import { useAxiosPrivate } from '@/hooks'
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

type BuilderToolbarProps = {
  spaceCode: string
}

export const BuilderToolbar = ({ spaceCode }: BuilderToolbarProps) => {
  const [spaceInformation, models] = useBuilderStore((state) => [state.spaceInformation, state.models])
  const { fileId } = useParams()
  const navigate = useNavigate()
  const axiosPrivate = useAxiosPrivate()

  const handleSave = () => {
    axiosPrivate.put(`/spaces/${fileId}`, {
      space: {
        name: spaceInformation.name,
        password: spaceInformation.isProtected ? spaceInformation.password : '',
        models: models,
      },
    })
  }

  useDebounce(
    () => {
      axiosPrivate.put(`/spaces/${fileId}`, {
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
        <ToolbarItem
          onClick={() => {
            navigate(`/${spaceCode}`)
          }}
        >
          <WithTooltip content="Host space" id="host-space">
            <Play />
          </WithTooltip>
        </ToolbarItem>
      </ToolbarContainer>
    </Container>
  )
}
