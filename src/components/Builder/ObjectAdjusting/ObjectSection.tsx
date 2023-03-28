import { useMemo } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SpaceModel, useBuilderStore } from '@/stores'

import { Modifier } from './Modifier'

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  background-color: transparent;
  transition: background-color 0.2s ease;
  user-select: none;

  &:hover {
    background-color: #272728;
  }
`

export const ObjectSection = () => {
  const selectedModelUuid = useBuilderStore(
    (state) => state.selectedModelUuid,
    (current, prev) => current !== prev,
  )
  const updateModelByField = useBuilderStore((state) => state.updateModelByField)
  const setIsInputFocus = useBuilderStore((state) => state.setIsInputFocus)
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
  }

  return (
    <>
      {filteredModel ? (
        <Container>
          <Text size="small" weight="normal">
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
        </Container>
      ) : null}
    </>
  )
}
