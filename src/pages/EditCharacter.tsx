import { useEffect, useState } from 'react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
import { useLocation } from 'react-router-dom'
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
  const location = useLocation()
  const [accessDirectly, setAccessDirectly] = useState(false)

  const handleClickBack = () => {}

  // event when category changed
  // useEffect(() => {
  //   console.log('category changed')
  // }, [categorySelectedId])

  useEffect(() => {
    if (location.state) {
      setAccessDirectly(true)
    } else {
      setAccessDirectly(false)
    }
  }, [location.state])

  return (
    <EditCharacterContainer>
      {/* <CharacterCanvas>
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
      </CharacterCanvas> */}
      {accessDirectly && <BackButton onClickBack={handleClickBack} />}
      <AvatarPanel />
    </EditCharacterContainer>
  )
}

export default EditCharacter
