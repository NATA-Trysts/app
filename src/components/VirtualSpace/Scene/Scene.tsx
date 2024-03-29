import { selectLocalPeerID, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CollisionEnterHandler, CollisionExitHandler, Physics, RigidBody } from '@react-three/rapier'
import { XR } from '@react-three/xr'
import { Suspense, useState } from 'react'
import { Object3D } from 'three'

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
  // Fence,
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
import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { useInteract } from '@/hooks'
import { Container } from '@/layouts/common'
import { MESSAGES } from '@/libs/constants'
import { SpaceModel, useNetworkStore, useVirtualSpaceStore } from '@/stores'

import { useIframeDialog } from '../IframeDialog/IframeDialogContext'
import { MemberVideoLayout } from '../MemberVideoLayout'
import { OtherMember } from '../OtherMember'
import { Poker } from '../Poker'
import { WhiteBoard } from '../WhiteBoard'

type CollectionEnterDataType = {
  newTarget: any
  model: SpaceModel
}

type FurnitureModelProps = {
  children?: React.ReactNode
  color?: string
  model: SpaceModel
  position: [number, number, number]
  onCollisionEnter?: (collectionEnterData: CollectionEnterDataType) => void
  onCollisionExit?: () => void
  rotation: [number, number, number]
}

const FurnitureModel = ({ onCollisionEnter, onCollisionExit, children, ...props }: FurnitureModelProps) => {
  console.log(`FurnitureModel ${props.model.uuid} rerender`, children)

  const hanleOnCollisionEnter: CollisionEnterHandler = ({ target }) => {
    if (target) {
      const position = (target.rigidBodyObject as Object3D).position
      const rotation = (target.rigidBodyObject as Object3D).rotation

      const newTarget: any = {
        position: { x: position.x, y: position.y, z: position.z },
        rotation: { x: rotation.x, y: rotation.y, z: rotation.z },
      }

      console.log(onCollisionEnter)

      onCollisionEnter?.({ model: props.model, newTarget })
    }
  }

  const hanleOnCollisionExit: CollisionExitHandler = () => {
    onCollisionExit?.()
  }

  return (
    <RigidBody
      type="fixed"
      onCollisionEnter={hanleOnCollisionEnter}
      onCollisionExit={hanleOnCollisionExit}
      {...props}
      colliders="trimesh"
    >
      {children}
    </RigidBody>
  )
}

export type InteractFuniture = {
  action: (data: any) => void
  hintKey: string
  hintAction: string
}

export const Scene = () => {
  const [spaceModels, quality, setInteractable] = useVirtualSpaceStore((state) => [
    state.spaceModels,
    state.quality,
    state.setInteractable,
  ])
  const [target, setTarget] = useState<Object3D | null>(null)
  // const [targetCategory, setTargetCategory] = useState<string | null>(null)
  const [interactFurniture, setInteractFurniture] = useState<InteractFuniture | null>(null)
  const [openIframe] = useIframeDialog()
  const roomInstance = useNetworkStore((state) => state.roomInstance)
  const [screenShares, openViewScreenShare] = useVirtualSpaceStore((state) => [
    state.screenShares,
    state.openViewScreenShare,
  ])
  const hmsActions = useHMSActions()
  const localPeerId = useHMSStore(selectLocalPeerID)
  const { setInteract, clearInteract } = useInteract()

  const openPoker = (iframeId: string) => {
    openIframe(<Poker id={iframeId} />)
  }

  const openWhiteboard = (iframeId: string) => {
    openIframe(<WhiteBoard id={`${roomInstance?.id}-${iframeId}`} />)
  }

  const dispatchOpenScreenShare = (iframeId: string) => {
    console.log(roomInstance)

    roomInstance?.send(MESSAGES.SCREENSHARE.OPEN, { furnitureIframeId: iframeId, screenSharePeerId: localPeerId })
  }

  const openScreenShare = (iframeId: string) => {
    const screenshare = screenShares.get(iframeId)

    console.log('join', iframeId, screenShares, screenshare)

    if (screenshare) openViewScreenShare(screenshare.screenSharePeerId)
    else
      hmsActions.setScreenShareEnabled(true).then(() => {
        dispatchOpenScreenShare(iframeId)
      })
  }

  const interactFurnitures: { [key: string]: InteractFuniture | null } = {
    'desk-d61cf1db-b68e-4e4e-9bbd-797962b63dbf': { action: openPoker, hintAction: 'play poker', hintKey: 'F' },
    'decoration-b186a8a9-9e0e-483e-9779-18abfe477fa3': {
      action: openWhiteboard,
      hintAction: 'draw',
      hintKey: 'F',
    },
    'desk-58d0bc2c-871f-45ae-a73d-178c0ad41f31': {
      action: openScreenShare,
      hintAction: 'share screen',
      hintKey: 'F',
    },
  }

  const onFurnitureColliderEnter = (data: CollectionEnterDataType) => {
    console.log(interactFurnitures)

    setTarget(data.newTarget)
    // setTargetCategory(data.model.type)
    setInteractable(true)
    setInteractFurniture(interactFurnitures[data.model.uuid])
    setInteract({ key: 'f', action: () => interactFurnitures[data.model.uuid]?.action(data.model.iframeId) })
  }

  const onFurnitureCollisionExit = () => {
    setTarget(null)
    // setTargetCategory(null)
    setInteractable(false)
    setInteractFurniture(null)
    clearInteract()
  }

  return (
    <Container>
      <MemberVideoLayout />
      <Canvas dpr={quality === 'high' ? [1, 1] : [0.35, 0.35]}>
        <XR>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <ambientLight intensity={0.7} />

            <Physics gravity={[0, -9.82, 0]}>
              {spaceModels.map((model: any) => (
                <FurnitureModel
                  key={model.uuid}
                  model={model}
                  position={[model.position.x, model.position.y - 2, model.position.z]}
                  rotation={[model.rotation.x, model.rotation.y, model.rotation.z]}
                  onCollisionEnter={onFurnitureColliderEnter}
                  onCollisionExit={onFurnitureCollisionExit}
                >
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
                    }[model.uuid as string]
                  }
                </FurnitureModel>
              ))}
              <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <mesh castShadow receiveShadow>
                  <planeGeometry args={[1000, 1000]} />
                  <meshBasicMaterial color="pink" />
                </mesh>
              </RigidBody>
              <MainMember target={target} />
              <OtherMember />
            </Physics>
          </Suspense>
        </XR>
      </Canvas>
      <Hint action={interactFurniture?.hintAction} actionKey={interactFurniture?.hintKey} />
    </Container>
  )
}
