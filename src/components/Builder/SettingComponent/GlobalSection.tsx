import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useBuilderStore } from '@/stores'

import { useBuilder } from '../hooks/useBuilder'
import { ColorPicker } from './ColorPicker'
import { GlobalSectionItem } from './GlobalSectionItem'

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  background-color: transparent;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #272728;
  }
`

export const GlobalSection = () => {
  const globalSettings = useBuilderStore((state) => state.globalSettings)

  const { convertValuesToOptions } = useBuilder()

  return (
    <Container>
      <Text size="small" weight="normal">
        Global Settings
      </Text>
      {Array.from(globalSettings).map(([property, { values, selected }]) => (
        <GlobalSectionItem
          key={property}
          options={convertValuesToOptions(values)}
          property={property}
          selected={selected}
        />
      ))}
      <ColorPicker />
    </Container>
  )
}
