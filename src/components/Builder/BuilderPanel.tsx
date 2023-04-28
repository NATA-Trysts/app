// @ts-nocheck

import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { MODELS_DATA } from '@/libs/constants'

import { BuilderContent } from './BuilderContent'
import { BuilderTab } from './BuilderTab'
import { useBuilder } from './hooks/useBuilder'

const BuilderPanelContainer = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  bottom: 16px;
  width: 272px;
  height: calc(100vh - 32px);
  background-color: #191a1d;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 999;

  user-select: none;
`

export const BuilderPanel = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { mappingData } = useBuilder()

  useEffect(() => {
    mappingData(MODELS_DATA)
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <BuilderPanelContainer>
      <BuilderTab />
      <BuilderContent isLoading={isLoading} />
    </BuilderPanelContainer>
  )
}
