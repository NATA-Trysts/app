import { Environment, Loader, OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Texture } from 'three'

import { BaseCharacter } from '@/components/Member'
import { MyInformationCard } from '@/components/MyInformationCard'
import { useGetMe } from '@/hooks'
import { ValueMapping } from '@/libs/constants'
import { useDashboardStore, useEditCharacterStore } from '@/stores'

const NavigationProfileContainer = styled.div`
  width: 100%;
  background-color: #212225;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
`

const ProfileCharacter = styled.div`
  width: 184px;
  height: 184px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 8px;
`

const ProfileCharacterCanvas = styled(Canvas)`
  background-color: #191a1d;
`

// for collapse mode
const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const Character = () => {
  const categorySelectedItemIds = useEditCharacterStore((state) => state.categorySelectedItemIds)

  const [tattooSpot, tattooDragon, tattooRing] = useTexture(
    ['/textures/t.tattoo.001.001.png', '/textures/t.tattoo.001.002.png', '/textures/t.tattoo.001.003.png'],
    (textures) => {
      ;(textures as Texture[]).map((t) => (t.flipY = false))
    },
  )

  const TATTOO_MAPPING: ValueMapping<Texture> = {
    'tattoo.001.001.001': tattooSpot,
    'tattoo.001.001.002': tattooDragon,
    'tattoo.001.001.003': tattooRing,
  }

  return (
    <Suspense fallback={null}>
      <Environment preset="city" />
      <ambientLight intensity={0.7} />
      <BaseCharacter
        accessory={categorySelectedItemIds.get('accessory')}
        action={['idle.000', false]}
        hair={categorySelectedItemIds.get('hair')}
        lower={categorySelectedItemIds.get('lower')}
        scale={0.013}
        shoe={categorySelectedItemIds.get('shoe')}
        skin={categorySelectedItemIds.get('skin')}
        tattoo={
          TATTOO_MAPPING[
            ((categorySelectedItemIds.get('tattoo') as any).length > 0
              ? (categorySelectedItemIds.get('tattoo') as any)[0].itemId
              : '') as any
          ]
        }
        upper={categorySelectedItemIds.get('upper')}
      />
    </Suspense>
  )
}

export const NavigationProfile = () => {
  const isExpanded = useDashboardStore((state) => state.isExpanded)
  const [isDisplayed, setIsDisplayed] = useState(false)
  const { me, isLoading, error } = useGetMe()

  // delay display of help title to prevent flickering
  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => setIsDisplayed(true), 160)
    } else {
      setIsDisplayed(false)
    }
  }, [isExpanded])

  return (
    <NavigationProfileContainer>
      <>
        {!isLoading && !error && me && (
          <>
            {isDisplayed ? (
              <>
                <MyInformationCard
                  avatar={'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg'}
                  handler={me.handler}
                  name={me.username}
                />
                <ProfileCharacter>
                  <Loader />
                  <ProfileCharacterCanvas>
                    <OrbitControls
                      dampingFactor={0.2}
                      enableDamping={true}
                      enablePan={false}
                      enableRotate={true}
                      enableZoom={false}
                      maxAzimuthAngle={Infinity}
                      maxPolarAngle={Math.PI / 2}
                      minAzimuthAngle={Infinity}
                      minPolarAngle={Math.PI / 2}
                      rotateSpeed={0.5}
                    />
                    <Character />
                  </ProfileCharacterCanvas>
                </ProfileCharacter>
              </>
            ) : (
              <ProfileAvatar src={'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg'} />
            )}
          </>
        )}
      </>
    </NavigationProfileContainer>
  )
}
