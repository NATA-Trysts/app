import { useMemo } from 'react'
import styled from 'styled-components'

import { useBuilderStore } from '@/stores/builder'

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
  align-items: flex-start;
  justify-content: center;
  /* overflow: hidden; */
  z-index: 999;
`

export const BuilderSettings = () => {
  const [settingOption, setSettingOption] = useBuilderStore((state) => [state.settingOption, state.setSettingOption])

  const components = useMemo(() => {
    return {
      space: (
        <>
          <SpaceInformationSection />
          <GlobalSection />
        </>
      ),
      object: <ObjectSection name="Computer" />,
    }
  }, [])

  return (
    <>
      <BuilderSettingsContainer>{components[settingOption]}</BuilderSettingsContainer>
      {/* TEMP BUTTON TO TEST */}
      <button
        onClick={() => {
          setSettingOption(settingOption === 'space' ? 'object' : 'space')
        }}
      >
        Test
      </button>
    </>
  )
}
