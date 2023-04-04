import { useMemo } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SpaceModel, useBuilderStore } from '@/stores'

import { useBuilder } from '../hooks/useBuilder'
import { ColorPicker } from './ColorPicker'
import { Modifier } from './Modifier'
import { Slider } from './Slider'

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  background-color: transparent;
  transition: background-color 0.2s ease;
  user-select: none;

  /* &:hover {
    background-color: #272728;
  } */
`

const Adjusting = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ObjectSection = () => {
  const { updateHistory } = useBuilder()
  const selectedModelUuid = useBuilderStore((state) => state.selectedModelUuid)
  const updateModelByField = useBuilderStore((state) => state.updateModelByField)
  const setIsInputFocus = useBuilderStore((state) => state.setIsInputFocus)
  const updateModelRoughness = useBuilderStore((state) => state.updateModelRoughness)
  const updateModelMetalness = useBuilderStore((state) => state.updateModelMetalness)
  const models = useBuilderStore((state) => state.models)
  const filteredModel = useMemo(() => {
    let a: SpaceModel[] | null = null

    if (selectedModelUuid) {
      a = models.filter((model) => model.uuid === selectedModelUuid)
    }

    return a ? a[0] : null
  }, [selectedModelUuid, models])

  const handleChange = (property: string, axis: string, value: number | string) => {
    filteredModel && updateModelByField(property, axis, value as number)

    updateHistory((models) => {
      models.map((model) =>
        model.uuid === selectedModelUuid
          ? { ...model, [property]: { ...model[property as 'position' | 'rotation'], [axis]: value } }
          : model,
      )
    })
  }

  return (
    <>
      {filteredModel ? (
        <Container>
          <Adjusting>
            <Text size="medium" weight="normal">
              {filteredModel.name}
            </Text>
            <Modifier
              canBeNegative={true}
              name="position"
              values={filteredModel.position}
              onBlur={() => setIsInputFocus(false)}
              onChange={handleChange}
              onFocus={() => setIsInputFocus(true)}
            />
            <Modifier
              canBeNegative={false}
              name="rotation"
              values={filteredModel.rotation}
              onBlur={() => setIsInputFocus(false)}
              onChange={handleChange}
              onFocus={() => setIsInputFocus(true)}
            />
          </Adjusting>
          <ColorPicker filteredModel={filteredModel} modelColor={filteredModel.color} />
          <Slider
            modelValue={filteredModel.metalness}
            setModelValue={(value) => updateModelMetalness(value)}
            title="metalness"
          />
          <Slider
            modelValue={filteredModel.roughness}
            setModelValue={(value) => updateModelRoughness(value)}
            title="roughness"
          />
        </Container>
      ) : null}
    </>
  )
}
