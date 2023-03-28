import { useRef } from 'react'
import { Group } from 'three'

export const Ground = () => {
  const groundRef = useRef<Group | null>(null)

  return (
    <group ref={groundRef} name="ground" position={[0, -0.5, 0]}>
      <mesh>
        <boxGeometry args={[100, 1, 100]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </group>
  )
}
