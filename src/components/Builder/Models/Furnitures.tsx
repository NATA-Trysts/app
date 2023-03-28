import { ThreeEvent, useFrame } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { animate } from 'framer-motion'
import { useRef, useState } from 'react'
import { useEvent, useKeyPressEvent } from 'react-use'
import { Group } from 'three'

import { Chair, Desk } from '@/components/Furniture'
import { useDoubleClickAndHold } from '@/hooks'
import { SpaceModel, useBuilderStore } from '@/stores'

type FurnitureProps = SpaceModel & {
  wireframe: boolean
}

const INITIAL_Y = 0
const HIGHEST_Y = 1

const Furniture = (props: FurnitureProps) => {
  const setSelectedModelUuid = useBuilderStore((state) => state.setSelectedModelUuid)
  const selectedModelUuid = useBuilderStore((state) => state.selectedModelUuid)
  const setIsEditing = useBuilderStore((state) => state.setIsEditing)
  const updateModel = useBuilderStore((state) => state.updateModel)

  const isModelClicked = useRef<boolean>(false)
  const modelRef = useRef<Group>(null)
  const yP = useRef(INITIAL_Y)
  const groundRef = useRef<Group | null>(null)

  const [hovered, setHovered] = useState(false)

  const pointerDown = useDoubleClickAndHold(
    () => {
      if (modelRef.current) {
        setSelectedModelUuid(props.uuid)
      }
    },
    () => {
      setIsEditing(true)
      isModelClicked.current = true
      animate(INITIAL_Y, HIGHEST_Y, {
        onUpdate: (latest) => {
          yP.current = latest
        },
      })
    },
    500,
  )

  const pointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isModelClicked.current && modelRef.current) {
      modelRef.current.position.x = e.point.x
      modelRef.current.position.z = e.point.z

      updateModel({
        uuid: props.uuid,
        id: props.id,
        name: props.name,
        position: {
          x: e.point.x,
          y: 0,
          z: e.point.z,
        },
        rotation: {
          x: modelRef.current.rotation.x,
          y: modelRef.current.rotation.y,
          z: modelRef.current.rotation.z,
        },
      })
    }
  }

  const pointerUp = () => {
    if (isModelClicked.current && modelRef.current) {
      isModelClicked.current = false
      animate(yP.current, INITIAL_Y, {
        onUpdate: (latest) => {
          yP.current = latest
        },
      })
      setIsEditing(false)
    }
  }

  useEvent('pointerup', pointerUp)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.y = yP.current
    }
  })

  return (
    <>
      <group
        ref={modelRef}
        name="furnitures"
        position={[
          parseFloat(props.position.x as string),
          parseFloat(props.position.y as string),
          parseFloat(props.position.z as string),
        ]}
        rotation={[
          parseFloat(props.rotation.x as string),
          parseFloat(props.rotation.y as string),
          parseFloat(props.rotation.z as string),
        ]}
        onPointerDown={pointerDown}
        onPointerOut={() => setHovered(false)}
        onPointerOver={() => setHovered(true)}
      >
        <Select enabled={hovered || selectedModelUuid === props.uuid}>
          {
            {
              1: <Chair scale={[0.01, 0.01, 0.01]} wireframe={props.wireframe} />,
              2: <Desk scale={[0.01, 0.01, 0.01]} />,
            }[props.id]
          }
        </Select>
      </group>
      <group
        ref={groundRef}
        name="moving-reference"
        position={[0, -0.5, 0]}
        visible={false}
        onPointerMove={pointerMove}
      >
        <mesh>
          <boxGeometry args={[100, 1, 100]} />
        </mesh>
      </group>
    </>
  )
}

export const Furnitures = () => {
  const [models, globalSettings] = useBuilderStore((state) => [state.models, state.globalSettings])
  const [selectedModelUuid, setSelectedModelUuid] = useBuilderStore((state) => [
    state.selectedModelUuid,
    state.setSelectedModelUuid,
  ])
  const isInputFocus = useBuilderStore((state) => state.isInputFocus)
  const deleteModel = useBuilderStore((state) => state.deleteModel)

  useKeyPressEvent('Backspace', () => !isInputFocus && selectedModelUuid && deleteModel(selectedModelUuid))
  useKeyPressEvent('Delete', () => !isInputFocus && selectedModelUuid && deleteModel(selectedModelUuid))
  useKeyPressEvent('Escape', () => !isInputFocus && setSelectedModelUuid(null))

  return (
    <>
      {models.length > 0 &&
        models.map((model, index) => (
          <Furniture
            key={index}
            id={model.id}
            name={model.name}
            position={{
              x: parseFloat(model.position.x as string),
              y: parseFloat(model.position.y as string),
              z: parseFloat(model.position.z as string),
            }}
            rotation={{
              x: parseFloat(model.rotation.x as string),
              y: parseFloat(model.rotation.y as string),
              z: parseFloat(model.rotation.z as string),
            }}
            uuid={model.uuid}
            wireframe={globalSettings.get('wireframe')?.selected as boolean}
          />
        ))}
    </>
  )
}
