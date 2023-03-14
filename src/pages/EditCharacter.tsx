import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import {
  AvatarPanel,
  BackButton,
  CustomPanel,
  JoinButton,
  NameBox,
  ThemePicker,
  ToolbarMiddle,
} from '@/components/EditCharacter'
import { PricingModal } from '@/components/Pricing'
import { useEditCharacterStore } from '@/stores'

const EditCharacterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CharacterCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
  background-color: #121316;
`

const EditCharacter = () => {
  // const [categorySelectedId] = useEditCharacterStore((state) => [state.categorySelectedId])
  // const location = useLocation()
  // const [accessDirectly, setAccessDirectly] = useState(true)
  const [openPricingModal, setOpenPricingModal] = useEditCharacterStore((state) => [
    state.openPricingModal,
    state.setOpenPricingModal,
  ])

  const handleClickBack = () => {}

  // event when category changed
  // useEffect(() => {
  //   console.log('category changed')
  // }, [categorySelectedId])

  // useEffect(() => {
  //   if (location.state) {
  //     setAccessDirectly(true)
  //   } else {
  //     setAccessDirectly(false)
  //   }
  // }, [location.state])

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
      <CustomPanel />
      <PricingModal isOpen={openPricingModal} setIsOpen={setOpenPricingModal} />
      <ThemePicker />
      <NameBox name="Hoang Tien Thinh" />
      <ToolbarMiddle />
      <JoinButton />
    </EditCharacterContainer>
  )
}

export default EditCharacter
