// import { useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { useBuilderStore } from '@/stores'

import { Modifier } from './Modifier'

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

type IValues = {
  x: 'x'
  y: 'y'
  z: 'z'
}

export const ObjectSection = () => {
  const [objectAdjusting, setObjectAdjusting] = useBuilderStore((state) => [
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
  )
}
