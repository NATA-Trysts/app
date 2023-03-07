import { GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import styled from 'styled-components'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import { useBuilderStore } from '@/stores/builder'

//#region STYLE
const Container = styled.section`
  width: 100%;
  height: 100vh;
  z-index: -1;
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

export const BuilderScene = () => {
  return (
    <Container>
      <Canvas>
        <Control />

        <gridHelper position={[0, -1, 0]} />

        <GizmoHelper alignment="bottom-center" margin={[80, 80]} renderOrder={1}>
          <GizmoViewport axisColors={['#F97F8F', '#A0F8A9', '#91AEF8']} labelColor="black" />
        </GizmoHelper>

        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </Container>
  )
}
