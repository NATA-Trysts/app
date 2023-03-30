import { isEmpty } from 'lodash-es'
import { Children, ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { ReactComponent as Micro } from '@/assets/icons/mic.svg'
import { ReactComponent as ArrowLeft } from '@/assets/icons/slider-arrow-left.svg'
import { ReactComponent as ArrowRight } from '@/assets/icons/slider-arrow-right.svg'
import { useMemberStore } from '@/stores'

import { Text } from '../Commons'
import { VideoReference } from '../VideoCall'

function useHorizontalScroll<T extends HTMLElement>(elRef: RefObject<T>): void {
  useEffect(() => {
    const el = elRef.current

    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 2.5 /*scroll-fast*/,
          behavior: 'smooth',
        })
      }

      el.addEventListener('wheel', onWheel)

      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [elRef])
}

export type useHorizontalDragScrollOptions = {
  onDrag?: () => void
  onLeave?: () => void
}

function useHorizontalDragScroll<T extends HTMLElement>(elRef: RefObject<T>, options?: useHorizontalDragScrollOptions) {
  useEffect(() => {
    const slider = elRef.current
    let isDown = false
    let startX: number
    let scrollLeft: number

    const toogleDrag = (isDrag: boolean) => {
      isDown = isDrag
      if (options) {
        if (isDrag) options.onDrag?.()
        else options.onLeave?.()
      }
    }

    if (slider) {
      slider.addEventListener('pointerdown', (e) => {
        slider.setPointerCapture(e.pointerId)
        document.body.style.cursor = 'grabbing'
        toogleDrag(true)
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })
      slider.addEventListener('pointerleave', () => {
        toogleDrag(false)
      })
      slider.addEventListener('pointerup', (e) => {
        slider.releasePointerCapture(e.pointerId)
        document.body.style.cursor = 'auto'
        toogleDrag(false)
      })
      slider.addEventListener('pointermove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 1 //scroll-fast

        slider.scrollLeft = scrollLeft - walk
        // console.log(walk)
      })
    }
  }, [elRef, options])
}

export type VideoSliderProps = {
  children?: ReactNode
}

export const VideoSlider = ({ children }: VideoSliderProps) => {
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
      <SliderContent ref={videoSliderContentRef} grabbing={isGrabbing}>
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
    <VideoContainer {...props}>
      <VideoSlider>
        {!isEmpty(otherMembers)
          ? Object.values(otherMembers).map((player) => (
              <MemberVideo key={player.id}>
                <VideoReference key={player.peerId} id={`video-ref-${player.peerId}`} />
                <MemberName>{`melvin_virus_${crypto.randomUUID()}`}</MemberName>
                <MemberIcon>
                  <Micro height={10} width={10} />
                </MemberIcon>
              </MemberVideo>
            ))
          : null}
      </VideoSlider>
    </VideoContainer>
  )
}

const VideoContainer = styled.section`
  max-width: 998px;
  height: 144px;
  padding: 8px;
  border-radius: 16px;
  background-color: var(--color-6);

  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0) scale(0.75);

  pointer-events: auto;
  z-index: 9;
`

const VideoSliderContainer = styled.div`
  position: relative;
`

const SliderContent = styled.div<{ grabbing: boolean }>`
  display: flex;
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
  /* padding: 8px 0; */
  /* ${(props) => `padding-${props.direction}`}: 8px; */
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
  padding: 4px;
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
