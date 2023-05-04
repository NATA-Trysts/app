/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas } from '@react-three/fiber'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { ReactNode, Suspense } from 'react'

import { Hint } from '@/components/Hint'
import { MainMember } from '@/components/Member'
import { City, Forest, Home, KidsPlayground } from '@/components/SpaceTheme'
import { Container } from '@/layouts/common'
import { BuiltInTheme } from '@/models/Space'

import { MemberVideoLayout } from '../VirtualSpace/MemberVideoLayout'
import { OtherMember } from '../VirtualSpace/OtherMember'

// import { MemberVideoLayout } from '../MemberVideoLayout'
// import { OtherMember } from '../OtherMember'

type ThemeElements = {
  [key in BuiltInTheme]: ReactNode
}

const themes: ThemeElements = {
  home: <Home />,
  city: <City />,
  forest: <Forest />,
  kidsplayground: <KidsPlayground />,
}

export const ThemeScene = ({ theme }: { theme: BuiltInTheme }) => {
  return (
    <Container>
      <MemberVideoLayout />
      <Suspense fallback={null}>
        <Canvas flat linear shadows dpr={[1, 1]}>
          {/* <Perf /> */}

          <Physics gravity={[0, -9.82, 0]}>
            <Debug />
            {themes[theme]}
            <RigidBody position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} type="fixed">
              <mesh castShadow receiveShadow>
                <planeGeometry args={[1000, 1000]} />
                <meshBasicMaterial wireframe />
              </mesh>
            </RigidBody>
            <MainMember />
            <OtherMember />
          </Physics>
        </Canvas>
      </Suspense>
      <Hint />
    </Container>
  )
}
