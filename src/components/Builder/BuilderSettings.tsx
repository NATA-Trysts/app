import { useMemo } from 'react'
import styled from 'styled-components'

import { useBuilderStore } from '@/stores'

import { ObjectSection } from './ObjectAdjusting/ObjectSection'
import { GlobalSection } from './SettingComponent/GlobalSection'
import { SpaceInformationSection } from './SettingComponent/SpaceInformationSection'

const BuilderSettingsContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  width: 240px;
  height: calc(100vh - 32px);
  background-color: #191a1d;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  z-index: 999;
`

export const BuilderSettings = () => {
  const selectedModelUuid = useBuilderStore((state) => state.selectedModelUuid)

  const components = useMemo(() => {
    return selectedModelUuid ? (
      <ObjectSection />
    ) : (
      <>
        <SpaceInformationSection />
        <GlobalSection />
      </>
    )
  }, [selectedModelUuid])

  return <BuilderSettingsContainer>{components}</BuilderSettingsContainer>
}
