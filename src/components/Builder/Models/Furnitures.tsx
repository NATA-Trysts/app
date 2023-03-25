import { ThreeEvent, useFrame } from '@react-three/fiber'
import { animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Group } from 'three'

import { Chair, Desk } from '@/components/Furniture'
import { useBuilderStore, useEditorStore } from '@/stores'

type FurnitureProps = {
  id: string
}

const Furniture = (props: FurnitureProps) => {
  const [mousePosition] = useEditorStore((state) => [state.mousePosition])
  const [setIsEditing] = useBuilderStore((state) => [state.setIsEditing])

  const modelRef = useRef<Group>(null)
  const isModelClicked = useRef<boolean>(false)

  const INITIAL_Y = 0
  const HIGHEST_Y = 2

  const yU = useRef(INITIAL_Y)

  const onModelPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setIsEditing(true)
    isModelClicked.current = true
    animate(INITIAL_Y, HIGHEST_Y, {
      onUpdate: (latest) => {
        yU.current = latest
      },
    })
  }

  useEffect(() => {
    const handlePointerUp = (e: PointerEvent) => {
      e.stopPropagation()
      if (isModelClicked.current) {
        isModelClicked.current = false
        animate(yU.current, INITIAL_Y, {
          onUpdate: (latest) => {
            yU.current = latest
          },
        })
      }
      setIsEditing(false)
    }

    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.y = yU.current
    }

    if (modelRef.current && isModelClicked.current) {
      modelRef.current.position.x = mousePosition.x
      modelRef.current.position.z = mousePosition.z
    }
  })

  return (
    <group ref={modelRef} onPointerDown={onModelPointerDown}>
      {
        {
          1: <Chair position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
          2: <Desk position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
        }[props.id]
      }
    </group>
  )
}

export const Furnitures = () => {
  const [models] = useBuilderStore((state) => [state.models])

  return <>{models.length > 0 && models.map((model, index) => <Furniture key={index} id={model.id} />)}</>
}
