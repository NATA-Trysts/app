const a = 1

export { a }
// Ground and Model stick together
// const Ground = () => {
//   const groundRef = useRef<Group | null>(null)
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [isEditing, setIsEditing] = useBuilderStore((state) => [state.isEditing, state.setIsEditing])
//   const isModelClicked = useRef<boolean>(false)
//   const modelRef = useRef<Group | null>(null)

//   const INITIAL_Y = 0
//   const HIGHEST_Y = 2

//   const xU = useRef(0)
//   const yU = useRef(INITIAL_Y)
//   const zU = useRef(0)

//   const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
//     e.stopPropagation()

//     if (modelRef.current && isModelClicked.current) {
//       xU.current = e.point.x
//       zU.current = e.point.z
//     }
//   }

//   const onModelPointerDown = (e: ThreeEvent<PointerEvent>) => {
//     e.stopPropagation()
//     setIsEditing(true)
//     isModelClicked.current = true
//     animate(INITIAL_Y, HIGHEST_Y, {
//       onUpdate: (latest) => {
//         yU.current = latest
//       },
//     })
//   }

//   useEffect(() => {
//     const handlePointerUp = (e: PointerEvent) => {
//       e.stopPropagation()
//       if (isModelClicked.current) {
//         setIsEditing(false)
//         isModelClicked.current = false
//         animate(yU.current, INITIAL_Y, {
//           onUpdate: (latest) => {
//             yU.current = latest
//           },
//         })
//       }
//     }

//     window.addEventListener('pointerup', handlePointerUp)

//     return () => window.removeEventListener('pointerup', handlePointerUp)
//   }, [])

//   useFrame(() => {
//     if (modelRef.current) modelRef.current.position.set(xU.current, yU.current, zU.current)
//   })

//   return (
//     <>
//       <group ref={groundRef} name="ground" position={[0, -0.5, 0]} onPointerMove={onPointerMove}>
//         <mesh visible={false}>
//           <boxGeometry args={[100, 1, 100]} />
//           <meshBasicMaterial color="brown" />
//         </mesh>
//       </group>

//       <group ref={modelRef} position={[0, INITIAL_Y, 0]} onPointerDown={onModelPointerDown}>
//         <Desk position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />
//       </group>
//     </>
//   )
// }

// +++++++++++++++++ ANCHOR ++++++++++++++++
// const v = new Vector3()
//
// const Anchor = () => {
//   const [mousePosition] = useBuilderStore((state) => [state.mousePosition])
//   const anchorRef = useRef<Mesh>(null)

//   useFrame(() => {
//     v.set(mousePosition.x, 0, mousePosition.z)
//     anchorRef.current?.position.lerp(v, 0.3)
//   })

//   return (
//     <mesh ref={anchorRef} scale={[0.5, 0.5, 0.5]}>
//       <sphereGeometry />
//       <meshNormalMaterial />
//     </mesh>
//   )
// }

// const M = ({ id }: { id: string }) => {
//   const groundRef = useRef<Group | null>(null)
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [isEditing, setIsEditing] = useBuilderStore((state) => [state.isEditing, state.setIsEditing])
//   const isModelClicked = useRef<boolean>(false)
//   const modelRef = useRef<Group | null>(null)

//   const INITIAL_Y = 0
//   const HIGHEST_Y = 2

//   const xU = useRef(0)
//   const yU = useRef(INITIAL_Y)
//   const zU = useRef(0)

//   const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
//     e.stopPropagation()

//     if (modelRef.current && isModelClicked.current) {
//       xU.current = e.point.x
//       zU.current = e.point.z
//     }
//   }

//   const onModelPointerDown = (e: ThreeEvent<PointerEvent>) => {
//     e.stopPropagation()
//     setIsEditing(true)
//     isModelClicked.current = true
//     animate(INITIAL_Y, HIGHEST_Y, {
//       onUpdate: (latest) => {
//         yU.current = latest
//       },
//     })
//   }

//   useEffect(() => {
//     const handlePointerUp = (e: PointerEvent) => {
//       e.stopPropagation()
//       if (isModelClicked.current) {
//         setIsEditing(false)
//         isModelClicked.current = false
//         animate(yU.current, INITIAL_Y, {
//           onUpdate: (latest) => {
//             yU.current = latest
//           },
//         })
//       }
//     }

//     isModelClicked.current && window.addEventListener('pointerup', handlePointerUp)

//     return () => {
//       window.removeEventListener('pointerup', handlePointerUp)
//     }
//   }, [])

//   useFrame(() => {
//     if (modelRef.current) modelRef.current.position.set(xU.current, yU.current, zU.current)
//   })

//   return (
//     <>
//       <group ref={groundRef} name="ground" position={[0, -0.5, 0]} onPointerMove={onPointerMove}>
//         <mesh>
//           <boxGeometry args={[100, 1, 100]} />
//           <meshBasicMaterial color="brown" />
//         </mesh>
//       </group>
//       <group ref={modelRef} position={[0, INITIAL_Y, 0]} onPointerDown={onModelPointerDown}>
//         {
//           {
//             1: <Chair position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
//             2: <Desk position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
//           }[id]
//         }
//       </group>
//     </>
//   )
// }

// const M = ({ id }: { id: string }) => {
//   return (
//     <>
//       {
//         {
//           1: <Chair position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
//           2: <Desk position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />,
//         }[id]
//       }
//     </>
//   )
// }
