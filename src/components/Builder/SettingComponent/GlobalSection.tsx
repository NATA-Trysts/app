import { useCallback } from 'react'
import styled from 'styled-components'

import { Text } from '@/layouts/common'
import { useBuilderStore } from '@/stores/builder'

import { ColorPicker } from './ColorPicker'
import { GlobalSectionItem } from './GlobalSectionItem'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 16px 16px 16px;
  border-radius: 0 0 16px 16px;
  background-color: transparent;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #272728;
  }
`

export const GlobalSection = () => {
  const [globalSettings, setGlobalSettings] = useBuilderStore((state) => [
    state.globalSettings,
    state.setGlobalSettings,
  ])

  const handleGlobalSettingChange = useCallback((property: string, value: string | boolean) => {
    const newGlobalSettings = new Map(globalSettings)

    newGlobalSettings.set(property, {
      values: newGlobalSettings.get(property)?.values as string[] | boolean[],
      selected: value,
    })

    setGlobalSettings(newGlobalSettings)
  }, [])

  const convertValuesToOptions = (values: string[] | boolean[]) => {
    return values.map((value) => {
      return {
        value,
        display: value === true ? 'Yes' : value === false ? 'No' : value,
      }
    })
  }

  return (
    <Container>
      <Text size="small" weight="normal">
        Global Settings
      </Text>
      {Array.from(globalSettings).map(([property, { values, selected }]) => (
        <GlobalSectionItem
          key={property}
          handleGlobalSettingChange={handleGlobalSettingChange}
          options={convertValuesToOptions(values)}
          property={property}
          selected={selected}
        />
      ))}
      <ColorPicker />
    </Container>
  )
}
