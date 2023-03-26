import { useMemo } from 'react'
import styled from 'styled-components'

import {
  //useBuilderStore,
  useEditorStore,
} from '@/stores'

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

// type ISettingOption = {
//   space: 'space'
//   object: 'object'
// }

export const BuilderSettings = () => {
  // re-render cause be setSettingOption => removed
  // const settingOption = useBuilderStore((state) => state.settingOption)
  const selectedModelId = useEditorStore((state) => state.selectedModelId)

  const components = useMemo(() => {
    return selectedModelId ? (
      <ObjectSection />
    ) : (
      <>
        <SpaceInformationSection />
        <GlobalSection />
      </>
    )
    // return {
    //   space: (
    //     <>
    //       <SpaceInformationSection />
    //       <GlobalSection />
    //     </>
    //   ),
    //   object: <ObjectSection />,
    // }
  }, [selectedModelId])

  return <BuilderSettingsContainer>{components}</BuilderSettingsContainer>
}
