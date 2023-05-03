import { useRef } from 'react'
import { Group } from 'three'

export const Ground = () => {
  const groundRef = useRef<Group | null>(null)

  return (
    <group ref={groundRef} name="ground" position={[0, -0.5, 0]}>
      <mesh>
        <boxGeometry args={[1000, 1, 1000]} />
        <meshBasicMaterial color="pink" />
      </mesh>
    </group>
  )
}
