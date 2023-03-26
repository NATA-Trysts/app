<<<<<<< HEAD
import { useMemo } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SpaceModel, useBuilderStore } from '@/stores'
=======
// import { useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useEditorStore } from '@/stores'
>>>>>>> d3af627 (feat: double click event)

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

<<<<<<< HEAD
export const ObjectSection = () => {
  const selectedModelUuid = useBuilderStore((state) => state.selectedModelUuid)
  const updateModelByField = useBuilderStore((state) => state.updateModelByField)
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
          <Modifier canBeNegative={true} name="position" values={filteredModel.position} onChange={handleChange} />
          <Modifier canBeNegative={false} name="rotation" values={filteredModel.rotation} onChange={handleChange} />
        </Container>
      ) : null}
    </>
=======
type IValues = {
  x: 'x'
  y: 'y'
  z: 'z'
}

export const ObjectSection = () => {
  const [objectAdjusting, setObjectAdjusting] = useEditorStore((state) => [
    state.objectAdjusting,
    state.setObjectAdjusting,
  ])

  const handleChange = (property: string, axis: string, value: number | string) => {
    if (!objectAdjusting) return

    const newObjectAdjusting = { ...objectAdjusting }
    const modifier = newObjectAdjusting.modifiers.find((modifier) => modifier.name === property)

    if (!modifier) return

    modifier.values[axis as keyof IValues] = value
    setObjectAdjusting(newObjectAdjusting)
  }

  return (
    <Container>
      <Text size="small" weight="normal">
        {objectAdjusting?.name}
      </Text>
      {objectAdjusting?.modifiers.map((modifier) => (
        <Modifier
          key={modifier.name}
          canBeNegative={modifier.canBeNegative}
          name={modifier.name}
          values={modifier.values}
          onChange={handleChange}
        />
      ))}
    </Container>
>>>>>>> d3af627 (feat: double click event)
  )
}
