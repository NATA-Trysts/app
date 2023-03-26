import { ThreeEvent } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'

import { useEditorStore } from '@/stores'

export const Ground = () => {
  const groundRef = useRef<Group | null>(null)
  const [updateMousePosition] = useEditorStore((state) => [state.updateMousePosition])
  // const [updateMousePosition] = useBuilderStore((state) => [state.updateMousePosition])

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    updateMousePosition({ x: e.point.x, z: e.point.z })
  }

  return (
    <group ref={groundRef} name="ground" position={[0, -0.5, 0]} onPointerMove={onPointerMove}>
      <mesh>
        <boxGeometry args={[100, 1, 100]} />
        <meshBasicMaterial color="pink" />
      </mesh>
    </group>
  )
}
