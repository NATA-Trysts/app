// import { useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { Modifier } from './Modifier'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: transparent;
`

export const ObjectSection = () => {
  // const [objectName, setObjectName] = useState('Computer')
  // const [properties, setProperties] = useState([
  //   {
  //     name: 'Scale',
  //     values: {
  //       x: 1,
  //       y: 1,
  //       z: 1,
  //     },
  //     canBeNegative: false,
  //   },
  //   {
  //     name: 'Rotation',
  //     values: {
  //       x: 0,
  //       y: 0,
  //       z: 0,
  //     },
  //     canBeNegative: true,
  //   },
  //   {
  //     name: 'Position',
  //     values: {
  //       x: 0,
  //       y: 0,
  //       z: 0,
  //     },
  //     canBeNegative: true,
  //   },
  // ])

  return (
    <Container>
      <Text size="small" weight="normal">
        Computer
      </Text>
      <Modifier property="Scale" />
    </Container>
  )
}
