import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

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
  background-color: white;
`

// for collapse mode
const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const NavigationProfile = () => {
  const isExpanded = useDashboardStore((state) => state.isExpanded)
  const [isDisplayed, setIsDisplayed] = useState(false)
  const { result, isLoading, error } = useGetMe()

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
        {!isLoading && !error && result && (
          <>
            {isDisplayed ? (
              <>
                <MyInformationCard
                  avatar={'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg'}
                  handler={result.handler}
                  name={result.username}
                />
                <ProfileCharacter>
                  <ProfileCharacterCanvas>
                    <OrbitControls />
                    <mesh>
                      <boxGeometry args={[1, 1, 1]} />
                      <meshNormalMaterial />
                    </mesh>
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
