import { Html, useProgress } from '@react-three/drei'

export const Loading = () => {
  const { progress } = useProgress()

  console.log(progress)

  return <Html>{/* <span style={{ color: 'black' }}>{progress}</span> */}</Html>
}
