import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

const EditCharacterContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const CharacterCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
  background-color: #121316;
`

const EditCharacter = () => {
  return (
    <EditCharacterContainer>
      <CharacterCanvas>
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
      </CharacterCanvas>
    </EditCharacterContainer>
  )
}

export default EditCharacter
