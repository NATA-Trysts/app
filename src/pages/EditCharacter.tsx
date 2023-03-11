// import { useEffect } from 'react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

import { AvatarPanel, BackButton } from '@/components/EditCharacter'
// import { useEditCharacterStore } from '@/stores'

const EditCharacterContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

// const CharacterCanvas = styled(Canvas)`
//   width: 100%;
//   height: 100%;
//   background-color: #121316;
// `

const EditCharacter = () => {
  // const [categorySelectedId] = useEditCharacterStore((state) => [state.categorySelectedId])

  const handleClickBack = () => {}

  // event when category changed
  // useEffect(() => {
  //   console.log('category changed')
  // }, [categorySelectedId])

  return (
    <EditCharacterContainer>
      {/* <CharacterCanvas>
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
      </CharacterCanvas> */}
      <BackButton onClickBack={handleClickBack} />
      <AvatarPanel />
    </EditCharacterContainer>
  )
}

export default EditCharacter
