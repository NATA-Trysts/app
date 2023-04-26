// @ts-nocheck

import { GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls, Stats } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { GridHelper } from 'three'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import { useBuilderStore } from '@/stores'

import { Furnitures, Ground } from '../Models'

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

export const Scene = () => {
  const gridHelperRef = useRef<GridHelper | null>(null)
  const [globalSettings] = useBuilderStore((state) => [state.globalSettings, state.setZoom])

  // Dispose helper when unuse
  useEffect(() => {
    if (!globalSettings.get('wireframe')?.selected) gridHelperRef.current?.dispose()
  }, [globalSettings])

  return (
    <Container>
      <Canvas dpr={[0.5, 0.5]}>
        <Control />
        {/* <Perf /> */}
        <Stats />

        <group name="light">
          <ambientLight intensity={1} />
          <pointLight intensity={1} position={[0, 2, 0]} />
        </group>

        {globalSettings.get('grid')?.selected && <gridHelper ref={gridHelperRef} position={[0, 0, 0]} />}

        <GizmoHelper alignment="bottom-center" margin={[80, 80]} renderOrder={1}>
          {(globalSettings.get('gizmo')?.selected as string) === 'port' ? (
            <GizmoViewport axisColors={['#F97F8F', '#A0F8A9', '#91AEF8']} labelColor="black" />
          ) : (
            <GizmoViewcube />
          )}
        </GizmoHelper>
        <Selection>
          <EffectComposer autoClear={false} multisampling={8}>
            <Outline blur edgeStrength={100} visibleEdgeColor="white" width={700} />
          </EffectComposer>

          <Furnitures />
        </Selection>

        <Ground />
      </Canvas>
    </Container>
  )
}
