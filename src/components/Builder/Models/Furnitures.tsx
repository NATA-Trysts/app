/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck

import { ThreeEvent, useFrame } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useEvent, useKeyPressEvent } from 'react-use'
import useKeyboardJs from 'react-use/lib/useKeyboardJs'
import { Group } from 'three'

import {
  AccentTable,
  AppleTree,
  Artboard,
  Bath,
  BathroomRug,
  BeanBagChair,
  BeanBagChairCoffee,
  BedCabinet,
  Bookshelf,
  BubbleLamp,
  Cabinet,
  CabinetBathroom,
  CabinetBook,
  Carpet,
  Chair,
  CircleTable,
  Desk,
  DinningChair,
  DinningTable,
  DoubleBed,
  Fan,
  Fence,
  KitchenCabinet,
  KitchenRug,
  KitchenShelf,
  LeafPlant,
  LeatherSofa,
  OneLegLamp,
  ParkBench,
  PatternRug,
  PearTree,
  Refrigerator,
  RelaxChair,
  Shiba,
  Sofa,
  TrianglePatternRug,
  TvStand,
  WallLayoutHome,
} from '@/components/Furniture'
import { useDoubleClickAndHold } from '@/hooks'
import { SpaceModel, useBuilderStore } from '@/stores'

import { useBuilder } from '../hooks/useBuilder'

type FurnitureProps = SpaceModel & {
  wireframe: boolean
}

const INITIAL_Y = 0
const HIGHEST_Y = 1.5

const Furniture = (props: FurnitureProps) => {
  const { updateHistory } = useBuilder()
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
        color: props.color,
        roughness: props.roughness,
        metalness: props.metalness,
      })
    }
  }

  const pointerUp = () => {
    if (isModelClicked.current && modelRef.current) {
      const modelUpdate = {
        uuid: props.uuid,
        id: props.id,
        name: props.name,
        position: {
          x: modelRef.current.position.x,
          y: 0,
          z: modelRef.current.position.z,
        },
        rotation: {
          x: modelRef.current.rotation.x,
          y: modelRef.current.rotation.y,
          z: modelRef.current.rotation.z,
        },
        color: props.color,
        roughness: props.roughness,
        metalness: props.metalness,
      }

      updateHistory((models) => {
        return models.map((model) => (model.uuid === modelUpdate.uuid ? { ...model, ...modelUpdate } : model))
      })

      isModelClicked.current = false
      animate(yP.current, INITIAL_Y, {
        type: 'spring',
        bounce: 0.5,
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
              'desk-d61cf1db-b68e-4e4e-9bbd-797962b63dbf': <AccentTable />,
              'plant-10680d63-f2cf-4f30-ae45-3d309f4e4464': <AppleTree />,
              'decoration-b186a8a9-9e0e-483e-9779-18abfe477fa3': <Artboard />,
              'bath-2c419d45-c99e-45d6-8554-f0dbcaf4a6cd': <Bath />,
              'bath-1c61a31c-4164-4cad-8ca5-73ac3168ad2d': <BathroomRug />,
              'chair-868c1619-2cdf-4249-bb74-2c9309def2a2': <BeanBagChairCoffee />,
              'chair-908ea24b-1e9f-47b2-973b-a6c4128b3f7f': <BeanBagChair />,
              'cabinet-41223ee1-e7fd-48a0-ab74-677eae6a78b2': <BedCabinet />,
              'decoration-308b504b-d99a-4005-a265-503b2de768e5': <Bookshelf />,
              'decoration-4781c552-af73-4d69-bbab-33b21bfcb77a': <BubbleLamp />,
              'cabinet-a99b7fbf-37f3-49a1-8657-d0bcc2997d98': <CabinetBathroom />,
              'cabinet-29524f5b-0486-446e-a01f-181c4b7e5402': <CabinetBook />,
              'cabinet-28f52db2-46da-4bb1-86da-ef5d256099ff': <Cabinet />,
              'decoration-26e29954-007d-408f-9243-86c518bfc035': <Carpet />,
              'chair-bf76df41-9c51-4ae4-8d26-6a54e0e2265d': <Chair />,
              'desk-68eccc2e-9d7b-4c66-972e-9aca69b76505': <CircleTable />,
              'desk-58d0bc2c-871f-45ae-a73d-178c0ad41f31': <Desk />,
              'chair-5b879d1e-ca56-49e2-8af8-f348dc043f03': <DinningChair />,
              'desk-bb79046f-20c9-4eb3-b527-5470bfe8e967': <DinningTable />,
              'decoration-1510441a-f8e8-444e-aea8-cc530a0fedb6': <DoubleBed />,
              'decoration-3e35cb45-7d05-474d-8529-663638698841': <Fan />,
              'cabinet-d6ad2e25-e3ef-407f-aeda-496c067b3762': <KitchenCabinet />,
              'decoration-52dfe16a-b978-43bb-b90b-1981b8be5d6e': <KitchenRug />,
              'decoration-3fca352a-ef32-42af-ac04-fa045253c5d2': <KitchenShelf />,
              'decoration-792e50e3-5999-4589-a9cc-e3a1a0a3b5c7': <LeafPlant />,
              'chair-312d6ba3-6e09-42c6-af59-6d4a7d9325d5': <LeatherSofa />,
              'decoration-a956af13-de12-4bf7-8871-04db2b847402': <OneLegLamp />,
              'chair-73a25ea2-3079-4c49-9673-6675cfaa32a2': <ParkBench />,
              'decoration-d414bcda-2df6-48c3-9ba6-8017925e733f': <PatternRug />,
              'decoration-56fb707b-8b61-4feb-af13-f90544fc4a15': <PearTree />,
              'decoration-628e56c5-095b-4e55-9989-d4a3696afec6': <Refrigerator />,
              'chair-c266dcd6-0dfe-49a1-be25-cf5c9161ae52': <RelaxChair />,
              'decoration-4504276e-81f1-4882-97af-7b86d604c36d': <Shiba />,
              'chair-0b9eb21c-5a3f-4e71-b914-e817cc5ecd0e': <Sofa />,
              'decoration-1776bb75-87b3-4cad-ac68-1105e4a4ceb3': <TrianglePatternRug />,
              'decoration-fd9ee033-e41c-4210-8e6b-de57e90bf23a': <TvStand />,
              'layout-40eea2e9-124e-48d9-8397-5284a9e8e97f': <WallLayoutHome />,
            }[props.uuid]
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
  const { deleteModelBuilder } = useBuilder()
  const [models, setModels, globalSettings] = useBuilderStore((state) => [
    state.models,
    state.setModels,
    state.globalSettings,
  ])
  const [selectedModelUuid, setSelectedModelUuid] = useBuilderStore((state) => [
    state.selectedModelUuid,
    state.setSelectedModelUuid,
  ])
  const isInputFocus = useBuilderStore((state) => state.isInputFocus)

  const [isUndo] = useKeyboardJs('ctrl + z')
  const [isRedo] = useKeyboardJs('ctrl + y')

  useKeyPressEvent('Backspace', () => {
    if (!isInputFocus && selectedModelUuid) {
      deleteModelBuilder(selectedModelUuid)
    }
  })
  useKeyPressEvent('Delete', () => {
    if (!isInputFocus && selectedModelUuid) {
      deleteModelBuilder(selectedModelUuid)
    }
  })
  useKeyPressEvent('Escape', () => !isInputFocus && setSelectedModelUuid(null))

  useEffect(() => {
    const history = JSON.parse(sessionStorage.getItem('history') as string)
    let historyIndex = JSON.parse(sessionStorage.getItem('historyIndex') as string)

    if (isUndo && history.length > 0) {
      if (historyIndex === 0) {
        return
      } else {
        historyIndex -= 1

        const previousModels = history[historyIndex]

        setSelectedModelUuid(null)
        setModels(previousModels)

        sessionStorage.setItem('historyIndex', JSON.stringify(historyIndex))
      }
    }

    if (isRedo && history.length > 0) {
      if (historyIndex === history.length - 1) {
        return
      } else {
        historyIndex += 1

        const next = history[historyIndex]

        setSelectedModelUuid(null)
        setModels(next)

        sessionStorage.setItem('historyIndex', JSON.stringify(historyIndex))
      }
    }
  }, [isUndo, isRedo, setModels, setSelectedModelUuid])

  useEffect(() => {
    sessionStorage.setItem('history', JSON.stringify([models]))
    sessionStorage.setItem('historyIndex', JSON.stringify(0))
  }, [])

  return (
    <>
      {models.length > 0 &&
        models.map((model, index) => (
          <Furniture
            key={index}
            color={model.color}
            id={model.uuid}
            metalness={model.metalness}
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
            roughness={model.roughness}
            uuid={model.uuid}
            wireframe={globalSettings.get('wireframe')?.selected as boolean}
          />
        ))}
    </>
  )
}
