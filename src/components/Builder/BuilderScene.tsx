import { GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls } from '@react-three/drei'
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { GridHelper, Group, Mesh } from 'three'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import { Desk } from '@/components/Furniture'
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
  const [zoom, setZoom] = useBuilderStore((state) => [state.zoom, state.setZoom])
  const prevZoom = useRef(0)

  useFrame(() => {
    if (oC.current) {
      prevZoom.current = Math.floor(((100 / oC.current?.getDistance()) * 20) / 2)
      prevZoom.current !== zoom && setZoom(Math.floor(((100 / oC.current?.getDistance()) * 20) / 2))
    }
  })

  return <OrbitControls ref={oC} />
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

// const T = () => {

// }

const Ground = () => {
  const groundRef = useRef<Group | null>(null)
  const updateMousePosition = useBuilderStore((state) => state.updateMousePosition)

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    updateMousePosition({ x: e.point.x, z: e.point.z })
  }

  return (
    <group
      ref={groundRef}
      name="ground"
      position={[0, -1, 0]}
      onPointerMove={onPointerMove}
      // onPointerUp={handlePointerUp}
    >
      <mesh>
        <boxGeometry args={[100, 1, 100]} />
        <meshBasicMaterial color="brown" />
      </mesh>
    </group>
  )
}

const Anchor = () => {
  const mousePosition = useBuilderStore((state) => state.mousePosition)
  const anchorRef = useRef<Mesh | null>(null)

  useFrame(() => {
    if (anchorRef.current) {
      anchorRef.current.position.x = mousePosition.x
      anchorRef.current.position.z = mousePosition.z
    }
  })

  return (
    <mesh ref={anchorRef} scale={[0.5, 0.5, 0.5]}>
      <sphereGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

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

        {/* <Chair position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} /> */}
        <Desk position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />

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

        <Anchor />

        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>

        <mesh>
          <boxGeometry args={[3, 1, 5]} />
          <meshNormalMaterial />
        </mesh> */}
      </Canvas>
    </Container>
  )
}
