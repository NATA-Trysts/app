import React from 'react'
import styled from 'styled-components'

import { CustomColor } from '@/layouts/common'
import { COLOR_PICKER_LIST } from '@/libs/constants'
import { useAppStore } from '@/stores/app'

import { ColorItem } from './ColorItem'

const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: 1fr;
  gap: 12px;
`

export const ColorPicker = () => {
  const setCustomColor = useAppStore((state) => state.setCustomColor)

  return (
    <Container>
      {Object.entries(COLOR_PICKER_LIST).map((color) => (
        <ColorItem
          key={color[0]}
          colorName={color[0] as CustomColor}
          onChangeColor={() => setCustomColor(color[0] as CustomColor)}
        />
      ))}
    </Container>
  )
}
