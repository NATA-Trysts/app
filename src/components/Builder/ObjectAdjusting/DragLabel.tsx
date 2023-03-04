import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

const Axis = styled(Text)`
  color: #727272;
  padding: 0 4px;
  margin-left: 2px;
  text-transform: uppercase;
  cursor: ew-resize;

  // disable user-select
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

type DragLabelProps = {
  axisName: string
  value: number
  canBeNegative?: boolean
  setValue: (value: number, axis: string) => void
}

const SPEED_FACTOR = 0.1

export const DragLabel = ({ axisName, canBeNegative = true, value, setValue }: DragLabelProps) => {
  const [snapshot, setSnapshot] = useState(value)
  const [startVal, setStartVal] = useState(0)

  const onStart = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setSnapshot(value)
      setStartVal(e.clientX)
      document.body.classList.add('dragging')
    },
    [value],
  )

  const onEnd = () => {
    setStartVal(0)
  }

  useEffect(() => {
    const onUpdate = (event: MouseEvent) => {
      if (startVal) {
        const distance = (event.clientX - startVal) * SPEED_FACTOR
        const newValue = Math.round(snapshot + distance)

        canBeNegative ? setValue(newValue, axisName) : setValue(Math.max(newValue, 0), axisName)
      }
    }

    const onEnd = () => {
      setStartVal(0)
      document.body.classList.remove('dragging')
    }

    document.addEventListener('mousemove', onUpdate)
    document.addEventListener('mouseup', onEnd)

    return () => {
      document.removeEventListener('mousemove', onUpdate)
      document.removeEventListener('mouseup', onEnd)
    }
  }, [startVal, setValue, snapshot, canBeNegative, axisName])

  return (
    <Axis size="small" weight="normal" onMouseDown={onStart} onMouseUp={onEnd}>
      {axisName}
    </Axis>
  )
}
