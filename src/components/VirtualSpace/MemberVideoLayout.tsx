import { motion } from 'framer-motion'
import { isEmpty, size } from 'lodash-es'
import { Children, ReactNode, useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { ReactComponent as Micro } from '@/assets/icons/mic.svg'
import { ReactComponent as ArrowLeft } from '@/assets/icons/slider-arrow-left.svg'
import { ReactComponent as ArrowRight } from '@/assets/icons/slider-arrow-right.svg'
import { Text } from '@/components/Commons'
import { VideoReference } from '@/components/VideoCall'
import { useHorizontalDragScroll, useHorizontalScroll } from '@/hooks'
import { useMemberStore } from '@/stores'

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
  const otherMembers = useMemberStore((state) => state.otherMembers)

  return (
    <>
      <VideoContainer
        animate={{
          opacity: !isEmpty(otherMembers) ? 1 : 0,
          width: !isEmpty(otherMembers) ? 'auto' : 0,
        }}
        {...props}
      >
        <VideoSlider memberCount={size(otherMembers)}>
          {!isEmpty(otherMembers) &&
            Object.values(otherMembers).map((player) => (
              <MemberVideo key={player.id}>
                <VideoReference key={player.peerId} id={`video-ref-${player.peerId}`} />
                <MemberName>{player.id}</MemberName>
                <MemberIcon>
                  <Micro height={10} width={10} />
                </MemberIcon>
              </MemberVideo>
            ))}
        </VideoSlider>
      </VideoContainer>
    </>
  )
}

const VideoContainer = styled(motion.section)`
  max-width: 998px;
  height: 144px;
  padding: 8px;
  border-radius: 16px;
  background-color: var(--color-6);

  position: absolute;
  top: 60px;
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

const MemberVideo = styled.div`
  width: 190px;
  height: 128px;
  border-radius: 8px;
  position: relative;

  > * {
    border-radius: inherit;
  }

  img {
    pointer-events: none;
  }
`

const MemberName = styled.div`
  max-width: 152px;
  height: 27px;
  padding: 4px 8px 4px 4px;
  border-radius: 0px 8px 0px 0px;
  background-color: var(--color-6);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: var(--color-2);

  position: absolute;
  bottom: 0;
  left: -1px;
`

const MemberIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: var(--color-6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 4px;
  right: 4px;
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
