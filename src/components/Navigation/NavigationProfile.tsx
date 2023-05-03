import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Avatar from 'boring-avatars'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Character } from '@/components/CharacterPreview'
import { MyInformationCard } from '@/components/MyInformationCard'
import { useGetMe } from '@/hooks'
import { useDashboardStore } from '@/stores'

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
                <MyInformationCard handler={me.handler} name={me.username} />
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
              <Avatar name="trysts" size={40} variant="beam" />
            )}
          </>
        )}
      </>
    </NavigationProfileContainer>
  )
}
