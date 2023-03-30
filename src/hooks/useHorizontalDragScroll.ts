import { RefObject, useEffect } from 'react'

export type useHorizontalDragScrollOptions = {
  onDrag?: () => void
  onLeave?: () => void
}

export const useHorizontalDragScroll = <T extends HTMLElement>(
  elRef: RefObject<T>,
  options?: useHorizontalDragScrollOptions,
) => {
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
