import { GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { GridHelper, Mesh } from 'three'
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
      if (child instanceof Mesh) child.material.wireframe = wireframe
    })
    console.log(scene)
  }, [wireframe])

  return <></>
}

export const BuilderScene = () => {
  const gridHelperRef = useRef<GridHelper | null>(null)
  const [globalSettings] = useBuilderStore((state) => [state.globalSettings, state.setZoom])

  // Dispose helper when unuse
  useEffect(() => {
    console.log('wf', globalSettings.get('wireframe')?.selected)
    console.log('grid', globalSettings.get('grid')?.selected)
    console.log('gizmo', globalSettings.get('gizmo')?.selected)
  }, [globalSettings])

  return (
    <Container>
      <Canvas performance={{ min: 0.1 }}>
        <Control />
        <Perf />

        <WireframeController wireframe={globalSettings.get('wireframe')?.selected as boolean} />
        {globalSettings.get('grid')?.selected && <gridHelper ref={gridHelperRef} position={[0, -1, 0]} />}

        <GizmoHelper alignment="bottom-center" margin={[80, 80]} renderOrder={1}>
          {(globalSettings.get('gizmo')?.selected as string) === 'port' ? (
            <GizmoViewport axisColors={['#F97F8F', '#A0F8A9', '#91AEF8']} labelColor="black" />
          ) : (
            <GizmoViewcube />
          )}
        </GizmoHelper>

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
