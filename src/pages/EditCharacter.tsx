import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

import { AvatarPanel, BackButton } from '@/components/EditCharacter'

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
  const handleClickBack = () => {
    console.log('back')
  }

  return (
    <EditCharacterContainer>
      <CharacterCanvas>
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
      </CharacterCanvas>
      <BackButton onClickBack={handleClickBack} />
      <AvatarPanel />
    </EditCharacterContainer>
  )
}

export default EditCharacter
