import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'

import { customColorHueMapping, Text } from '@/components/Commons'
import { MyInformationCard as InformationCard } from '@/components/MyInformationCard'
import { Option, Popover } from '@/components/Popover'
import { useAppStore, useVirtualSpaceStore } from '@/stores'

//#region STYLES
const MemberInforContainer = styled.div<{ background: string }>`
  padding: 8px;
  border-radius: 12px;
  background: ${(props) => props.background};
`

const MemberHandler = styled(Text)`
  margin-left: 12px;
`

const Gap = styled.div`
  height: 14px;
  width: 2px;
`

type MyInformationCardProps = {
  name: string
  handler: string
  avatar: string
}

const CustomInformationCard = styled(motion.div)`
  display: flex;
  width: 200px;
`

const CharacterPreviewContainer = styled.div`
  width: 174px;
  height: 182px;
  background: red;
  border-radius: 6px;
`

const CustomOption = styled(Option)<{ hoverBackground?: string; textColor: string }>`
  background: transparent;
  color: ${(props) => props.textColor};

  span {
    color: ${(props) => props.textColor};
  }

  :hover {
    background: ${(props) => props.hoverBackground};
  }
`
//#endregion

export const MyInformationCard: FC<MyInformationCardProps> = ({ name, handler, avatar }) => {
  const color = useAppStore((state) => state.customColor)
  const [isEditAvatar, setIsEditAvatar] = useVirtualSpaceStore((state) => [state.isEditAvatar, state.setIsEditAvatar])

  const h = () => {
    setIsEditAvatar(!isEditAvatar)
  }

  return (
    <Popover
      align="end"
      content={
        <MemberInforContainer background={`hsla(${customColorHueMapping[color]}, 79%, 11%, 1)`}>
          <CharacterPreviewContainer>
            <Canvas>
              <OrbitControls />
              <mesh>
                <boxGeometry />
                <meshNormalMaterial />
              </mesh>
            </Canvas>
          </CharacterPreviewContainer>
          <Gap />
          <MemberHandler size="medium" weight="normal">
            {handler}
          </MemberHandler>
          <Gap />
          <CustomOption
            hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
            textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
            title="Edit avatar"
            onClick={h}
          />
          <CustomOption
            customHoverBackgroundColor="#FC677B"
            textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
            title="Log out"
            onClick={() => {}}
          />
        </MemberInforContainer>
      }
      side="right"
      sideOffset={12}
    >
      <CustomInformationCard
        animate={{
          y: isEditAvatar ? 100 : 0,
        }}
      >
        <InformationCard avatar={avatar} handler={handler} name={name} />
      </CustomInformationCard>
    </Popover>
  )
}
