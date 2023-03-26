import { useFrame } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Group } from 'three'

import { Chair, Desk } from '@/components/Furniture'
import { useDoubleClickAndHold } from '@/hooks'
import { useBuilderStore, useEditorStore } from '@/stores'

type FurnitureProps = {
  id: string
  wireframe: boolean
}

const Furniture = (props: FurnitureProps) => {
  const mousePosition = useEditorStore((state) => state.mousePosition)
  const [setObjectAdjusting, selectedModelId] = useEditorStore((state) => [
    state.setObjectAdjusting,
    state.selectedModelId,
  ])
  const setIsEditing = useBuilderStore((state) => state.setIsEditing)
  const [hovered, setHovered] = useState(false)
  const modelRef = useRef<Group>(null)
  const isModelClicked = useRef<boolean>(false)
  const updateModel = useBuilderStore((state) => state.updateModel)

  const INITIAL_Y = 0
  const HIGHEST_Y = 1

  const yU = useRef(INITIAL_Y)

  const handleClick = useDoubleClickAndHold(
    () => {
      setObjectAdjusting({
        id: props.id,
        name: 'Chair Vjp',
        modifiers: [
          {
            name: 'position',
            values: { x: 0, y: 0, z: 0 },
            canBeNegative: true,
          },
          {
            name: 'rotation',
            values: { x: 0, y: 0, z: 0 },
            canBeNegative: true,
          },
          {
            name: 'scale',
            values: { x: 1, y: 1, z: 1 },
            canBeNegative: false,
          },
        ],
      })
    },
    () => {
      setIsEditing(true)
      isModelClicked.current = true
      animate(INITIAL_Y, HIGHEST_Y, {
        onUpdate: (latest) => {
          yU.current = latest
        },
      })
    },
    500,
  )

  useEffect(() => {
    const handlePointerUp = (e: PointerEvent) => {
      e.stopPropagation()
      if (isModelClicked.current && modelRef.current) {
        isModelClicked.current = false

        updateModel({
          id: props.id,
          position: {
            x: modelRef.current.position.x,
            y: 0,
            z: modelRef.current.position.z,
          },
          scale: {
            x: 1,
            y: 1,
            z: 1,
          },
          rotation: {
            x: 1,
            y: 1,
            z: 1,
          },
        })
        animate(yU.current, INITIAL_Y, {
          onUpdate: (latest) => {
            yU.current = latest
          },
        })
      }
      setIsEditing(false)
    }

    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [modelRef.current?.position])

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.y = yU.current
    }

    if (modelRef.current && isModelClicked.current) {
      modelRef.current.position.x = mousePosition.x
      modelRef.current.position.z = mousePosition.z
    }
  })

  return (
    <group
      ref={modelRef}
      name="furnitures"
      onPointerDown={handleClick}
      onPointerOut={() => setHovered(false)}
      onPointerOver={() => setHovered(true)}
    >
      <Select enabled={hovered || selectedModelId === props.id}>
        {
          {
            1: <Chair position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} wireframe={props.wireframe} />,
            2: <Desk position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
          }[props.id]
        }
      </Select>
    </group>
  )
}

export const Furnitures = () => {
  const [models, globalSettings] = useBuilderStore((state) => [state.models, state.globalSettings])

  return (
    <>
      {models.length > 0 &&
        models.map((model, index) => (
          <Furniture key={index} id={model.id} wireframe={globalSettings.get('wireframe')?.selected as boolean} />
        ))}
    </>
  )
}
