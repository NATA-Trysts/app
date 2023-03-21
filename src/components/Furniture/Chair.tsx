import { CuboidCollider, RigidBody } from '@react-three/rapier'

import { useVirtualSpaceStore } from '@/stores'

export const Chair = () => {
  const setInteractable = useVirtualSpaceStore((state) => state.setInteractable)

  return (
    <group name="projector">
      <RigidBody type="fixed">
        <mesh position={[3, 0, 4]}>
          <boxGeometry args={[1, 5, 3]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <CuboidCollider
          sensor
          args={[5, 5, 5]}
          position={[3, 0, 4]}
          onIntersectionEnter={() => setInteractable(true)}
          onIntersectionExit={() => setInteractable(false)}
        />
      </RigidBody>
    </group>
  )
}
