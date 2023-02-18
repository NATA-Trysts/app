import { useEffect } from 'react'

import { MobileDetectProps } from './models/mobile-detect.model'

export const MobileDetect = ({
  isMobile,
  isSmallWidth,
  setIsMobile,
  setIsSmallWidth,
  children,
  fallback,
}: MobileDetectProps) => {
  const handleResize = () => {
    const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
    const smallWidth = Boolean(window.innerWidth < 900)

    setIsMobile(mobile)
    setIsSmallWidth(smallWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <>{isMobile || isSmallWidth ? fallback : children}</>
}
