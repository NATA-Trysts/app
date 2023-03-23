import { GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls } from '@react-three/drei'
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { animate } from 'framer-motion'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { GridHelper, Group, Mesh } from 'three'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import { useBuilderStore } from '@/stores'

//#region STYLE
const Container = styled.section`
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: auto;
`

//#endregion

const Control = () => {
  const oC = useRef<OrbitControlsImpl>(null)
  const [zoom, setZoom, isEditing] = useBuilderStore((state) => [state.zoom, state.setZoom, state.isEditing])
  const prevZoom = useRef(0)

  useFrame(() => {
    if (oC.current) {
      prevZoom.current = Math.floor(((100 / oC.current?.getDistance()) * 20) / 2)
      prevZoom.current !== zoom && setZoom(Math.floor(((100 / oC.current?.getDistance()) * 20) / 2))
    }
  })

  return (
    <OrbitControls ref={oC} enableRotate={!isEditing} maxAzimuthAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2.1} />
  )
}

const WireframeController = ({ wireframe = true }: { wireframe: boolean }) => {
  const { scene } = useThree()

  useEffect(() => {
    scene.children.forEach((child) => {
      if (child instanceof Group && ['chair', 'desk'].includes(child.name))
        child.children.forEach((c) => {
          if (c instanceof Mesh) c.material.wireframe = wireframe
        })
    })
  }, [wireframe])

  return <></>
}

const Ground = () => {
  const groundRef = useRef<Group | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isEditing, setIsEditing] = useBuilderStore((state) => [state.isEditing, state.setIsEditing])
  const [updateMousePosition] = useBuilderStore((state) => [state.updateMousePosition])
  const isModelClicked = useRef<boolean>(false)
  // const modelRef = useRef<Group | null>(null)

  const INITIAL_Y = 0
  // const HIGHEST_Y = 2

  // const xU = useRef(0)
  const yU = useRef(INITIAL_Y)
  // const zU = useRef(0)

  const xX = useRef(0)
  const zX = useRef(0)

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()

    // if (isEditing && isModelClicked.current) {
    // updateMousePosition({ x: e.point.x, z: e.point.z })
    xX.current = e.point.x
    zX.current = e.point.z
    // xU.current = e.point.x
    // zU.current = e.point.z
    // }
  }

  // const onModelPointerDown = (e: ThreeEvent<PointerEvent>) => {
  //   e.stopPropagation()
  //   setIsEditing(true)
  //   isModelClicked.current = true
  //   animate(INITIAL_Y, HIGHEST_Y, {
  //     onUpdate: (latest) => {
  //       yU.current = latest
  //     },
  //   })
  // }

  useEffect(() => {
    const handlePointerUp = (e: PointerEvent) => {
      e.stopPropagation()
      if (isModelClicked.current) {
        setIsEditing(false)
        isModelClicked.current = false
        animate(yU.current, INITIAL_Y, {
          onUpdate: (latest) => {
            yU.current = latest
          },
        })
      }
    }

    window.addEventListener('pointerup', handlePointerUp)

    return () => window.removeEventListener('pointerup', handlePointerUp)
  }, [])

  const counter = useRef(0)
  const offset = 5

  useFrame(() => {
    counter.current += 1
    if (counter.current % offset === 0) updateMousePosition({ x: xX.current, z: zX.current })

    // if (modelRef.current) modelRef.current.position.set(xU.current, yU.current, zU.current)
  })

  return (
    <>
      <group ref={groundRef} name="ground" position={[0, -0.5, 0]} onPointerMove={onPointerMove}>
        <mesh>
          <boxGeometry args={[100, 1, 100]} />
          <meshBasicMaterial color="brown" />
        </mesh>
      </group>

      {/* <group ref={modelRef} position={[0, INITIAL_Y, 0]} onPointerDown={onModelPointerDown}>
        <Desk position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />
      </group> */}
    </>
  )
}

// const M2 = ({ id }: { id: string }) => {
//   const [mousePosition] = useBuilderStore((state) => [state.mousePosition])
//   const anchorRef = useRef<Mesh>(null)
//   const [isEditing, setIsEditing] = useBuilderStore((state) => [state.isEditing, state.setIsEditing])
//   const isModelClicked = useRef<boolean>(false)
//   const modelRef = useRef<Group | null>(null)

//   const INITIAL_Y = 0
//   const HIGHEST_Y = 2

//   const xU = useRef(0)
//   const yU = useRef(INITIAL_Y)
//   const zU = useRef(0)

//   const onModelPointerDown = (e: ThreeEvent<PointerEvent>) => {
//     e.stopPropagation()
//     setIsEditing(true)

//     // isModelClicked.current = true
//     animate(INITIAL_Y, HIGHEST_Y, {
//       onUpdate: (latest) => {
//         modelRef.current?.position.set(xU.current, latest, zU.current)
//       },
//     })
//   }

//   // useEffect(() => {
//   //   const handlePointerUp = (e: PointerEvent) => {
//   //     e.stopPropagation()
//   //     if (isModelClicked.current) {
//   //       setIsEditing(false)
//   //       isModelClicked.current = false
//   //       animate(yU.current, INITIAL_Y, {
//   //         onUpdate: (latest) => {
//   //           yU.current = latest
//   //         },
//   //       })
//   //     }
//   //   }

//   //   isModelClicked.current && window.addEventListener('pointerup', handlePointerUp)

//   //   return () => {
//   //     window.removeEventListener('pointerup', handlePointerUp)
//   //   }
//   // }, [])

//   // useFrame(() => {
//   //   console.log('::', yU.current)
//   //   if (modelRef.current) modelRef.current.position.set(xU.current, yU.current, zU.current)
//   // })

//   return (
//     <group ref={modelRef} position={[0, INITIAL_Y, 0]} onPointerDown={onModelPointerDown}>
//       {
//         {
//           1: <Chair position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
//           2: <Desk position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
//         }[id]
//       }
//     </group>
//   )
// }

// const Furnitures = () => {
//   const [models] = useBuilderStore((state) => [state.models])

//   useEffect(() => {
//     console.log(models)
//   }, [models])

//   return (
//     <Suspense fallback={null}>
//       {/* <Mo /> */}
//       {models.length > 0 && models.map((model) => <M2 key={Math.random().toString()} id={model.id} />)}
//     </Suspense>
//   )
// }

export const BuilderScene = () => {
  const gridHelperRef = useRef<GridHelper | null>(null)
  const [globalSettings] = useBuilderStore((state) => [state.globalSettings, state.setZoom])

  // Dispose helper when unuse
  useEffect(() => {
    if (!globalSettings.get('wireframe')?.selected) gridHelperRef.current?.dispose()
  }, [globalSettings])

  return (
    <Container>
      <Canvas performance={{ min: 0.1 }}>
        <Control />
        <Perf />

        <group name="light">
          <ambientLight intensity={1} />
        </group>

        <WireframeController wireframe={globalSettings.get('wireframe')?.selected as boolean} />
        {globalSettings.get('grid')?.selected && <gridHelper ref={gridHelperRef} position={[0, 0, 0]} />}

        <GizmoHelper alignment="bottom-center" margin={[80, 80]} renderOrder={1}>
          {(globalSettings.get('gizmo')?.selected as string) === 'port' ? (
            <GizmoViewport axisColors={['#F97F8F', '#A0F8A9', '#91AEF8']} labelColor="black" />
          ) : (
            <GizmoViewcube />
          )}
        </GizmoHelper>

        <Ground />

        {/* <Anchor /> */}

        {/* <Furnitures /> */}

        {/* <Ground /> */}

        {/* <Anchor /> */}
      </Canvas>
    </Container>
  )
}
