import { motion } from 'framer-motion'
import { Children, ReactNode, useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { ReactComponent as ArrowLeft } from '@/assets/icons/slider-arrow-left.svg'
import { ReactComponent as ArrowRight } from '@/assets/icons/slider-arrow-right.svg'
import { Text } from '@/components/Commons'
import { useHorizontalDragScroll, useHorizontalScroll } from '@/hooks'
import { useMemberStore, useVirtualSpaceStore } from '@/stores'

import { MemberVideoCard } from './MemberVideoCard'

export type VideoSliderProps = {
  children?: ReactNode
  memberCount: number
}

export const VideoSlider = ({ children, memberCount }: VideoSliderProps) => {
  const videoSliderContentRef = useRef<HTMLDivElement>(null)

  const [isGrabbing, setGrabbing] = useState(false)
  const [leftHiddenVideo, setLeftHiddenVideo] = useState(0)
  const maxShowableVideo = 5
  const videoAmount = Children.count(children)
  const rightHiddenVideo = videoAmount <= maxShowableVideo ? 0 : videoAmount - leftHiddenVideo - maxShowableVideo

  useHorizontalScroll(videoSliderContentRef)
  useHorizontalDragScroll(videoSliderContentRef, { onDrag: () => setGrabbing(true), onLeave: () => setGrabbing(false) })

  useEffect(() => {
    videoSliderContentRef.current?.addEventListener('scroll', (e: Event) => {
      const element = e.target as HTMLDivElement

      const widthOfElementWhenFullyHide = 198
      const hiddenElementRatio = element.scrollLeft / widthOfElementWhenFullyHide
      const hideRatioToBeCountAsHidden = 0.7
      const elementBeCountedAsHidden = Math.floor(hiddenElementRatio - hideRatioToBeCountAsHidden + 1)

      setLeftHiddenVideo(elementBeCountedAsHidden)
    })
  }, [])

  return (
    <VideoSliderContainer>
      <SliderContent ref={videoSliderContentRef} columnCount={memberCount} grabbing={isGrabbing}>
        {children}
      </SliderContent>

      {leftHiddenVideo !== 0 ? (
        <SliderDirection direction="left">
          <SliderDirectionContent>
            <SliderArrowLeft />
            <Text size="large" weight="normal">
              {leftHiddenVideo}
            </Text>
          </SliderDirectionContent>
        </SliderDirection>
      ) : (
        <></>
      )}
      {rightHiddenVideo !== 0 ? (
        <SliderDirection direction="right">
          <SliderDirectionContent>
            <Text size="large" weight="normal">
              {rightHiddenVideo}
            </Text>
            <SliderArrowRight />
          </SliderDirectionContent>
        </SliderDirection>
      ) : (
        <></>
      )}
    </VideoSliderContainer>
  )
}

export type MemberVideoLayoutProps = {
  className?: string
}

export const MemberVideoLayout = ({ ...props }: MemberVideoLayoutProps) => {
  const [videoLayout, isEditAvatar] = useVirtualSpaceStore((state) => [state.videoLayout, state.isEditAvatar])
  const nearestMemberIds = useMemberStore((state) => state.nearestMemberIds)
  const otherMembers = useMemberStore((state) => state.otherMembers)

  return (
    <>
      {!isEditAvatar ? (
        <VideoContainer
          animate={{
            opacity: nearestMemberIds.length === 0 || videoLayout !== 'slide' ? 0 : 1,
            width: 190 * nearestMemberIds.length + 8 * (nearestMemberIds.length + 1),
          }}
          initial={{
            opacity: 0,
          }}
          {...props}
        >
          <VideoSlider memberCount={nearestMemberIds.length}>
            {nearestMemberIds.length > 0 &&
              nearestMemberIds.map((memberId) => <MemberVideoCard key={memberId} member={otherMembers[memberId]} />)}
          </VideoSlider>
        </VideoContainer>
      ) : null}
      <Video autoPlay muted playsInline id="my-video" />
    </>
  )
}

const Video = styled.video`
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
`

const VideoContainer = styled(motion.section)`
  max-width: 998px;
  height: 144px;
  padding: 8px;
  border-radius: 16px;
  background-color: var(--color-6);

  position: absolute;
  top: 68px;
  left: 50%;
  transform: translate(-50%, 0);

  pointer-events: auto;
  z-index: 9;
`

const VideoSliderContainer = styled.div`
  position: relative;
`

const SliderContent = styled.div<{ grabbing: boolean; columnCount: number }>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${(props) => `repeat(${props.columnCount}, 1fr)`};
  gap: 8px;
  border-radius: 8px;
  overflow-x: scroll;
  overflow-y: hidden;
  cursor: ${(props) => (props.grabbing ? 'grabbing' : 'grab')};

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const SliderDirection = styled.div<{ direction?: 'left' | 'right' }>`
  height: 100%;
  width: 58px;
  border-radius: ${(props) => (props.direction == 'left' ? '8px 0 0 8px' : '0 8px 8px 0')};
  background: ${(props) =>
    props.direction === 'left'
      ? 'linear-gradient(270deg, hsla(291, 79%, 11%, 0) 0%, hsla(0, 0%, 15%, 0.43) 50.52%, hsla(0, 0%, 0%, 0.6) 100%)'
      : 'linear-gradient(270deg, hsla(0, 0%, 0%, 0.6) 0%, hsla(0, 0%, 15%, 0.43) 50.52%, hsla(291, 79%, 11%, 0) 100%)'};
  backdrop-filter: blur(7.5px);

  position: absolute;
  top: 0;
  ${(props) => `${props.direction}`}: -2px;
`

const SliderDirectionContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
`

const arrowRight = keyframes`
    0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(5px, 0);
  }
`

const SliderArrowRight = styled(ArrowRight)`
  animation: ${arrowRight} 1s ease-in-out infinite;
`

const arrowLeft = keyframes`
    0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-5px, 0);
  }
`

const SliderArrowLeft = styled(ArrowLeft)`
  animation: ${arrowLeft} 1s ease-in-out infinite;
`
