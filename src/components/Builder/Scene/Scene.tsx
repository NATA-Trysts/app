// @ts-nocheck
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
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
      <Canvas
        camera={{
          position: [0, 10, 20],
        }}
        dpr={[0.5, 0.5]}
      >
        <Control />

        <group name="light">
          <ambientLight intensity={1} />
          <directionalLight
            castShadow
            intensity={0.8}
            name="Directional Light"
            position={[274.61, 586.79, 630.88]}
            shadow-camera-bottom={-1250}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-near={-10000}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
          />
          <pointLight intensity={1} position={[0, 2, 0]} />
        </group>

        {globalSettings.get('grid')?.selected && (
          <gridHelper ref={gridHelperRef} args={[1000, 1000]} position={[0, 0, 0]} />
        )}

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
