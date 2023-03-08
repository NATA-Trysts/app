import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { MyInformationCard as InformationCard } from '@/components/MyInformationCard'
import { Option, Popover } from '@/components/Popover'
import { useAppStore } from '@/stores'

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

const customColorHueMapping = {
  purple: 291,
  green: 137,
  blue: 216,
}

const CustomInformationCard = styled.div`
  display: flex;
  width: 200px;
`

const CharacterPreviewContainer = styled.div`
  width: 174px;
  height: 182px;
  background: red;
  border-radius: 6px;
`

const CustomOption = styled(Option)<{ hoverBackground?: string }>`
  background: transparent;

  :hover {
    background: ${(props) => props.hoverBackground};
  }
`

export const MyInformationCard: FC<MyInformationCardProps> = ({ name, handler, avatar }) => {
  const color = useAppStore((state) => state.customColor)

  return (
    <Popover
      align="end"
      content={
        <MemberInforContainer background={`hsla(${customColorHueMapping[color]}, 81%, 6%, 1)`}>
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
            title="Change name"
            onClick={() => {}}
          />
          <CustomOption
            hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
            title="Edit avatar"
            onClick={() => {}}
          />
          <CustomOption customHoverBackgroundColor="#FC677B" title="Log out" onClick={() => {}} />
        </MemberInforContainer>
      }
      side="right"
      sideOffset={12}
    >
      <CustomInformationCard>
        <InformationCard avatar={avatar} handler={handler} name={name} />
      </CustomInformationCard>
    </Popover>
  )
}
