import { ReactNode, useEffect, useState } from 'react'

type MobileDetectProps = {
  children: ReactNode
  fallback: ReactNode
  fallbackSmallWidth: ReactNode
}

export const MobileDetect = ({ children, fallback, fallbackSmallWidth }: MobileDetectProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallWidth, setIsSmallWidth] = useState(false)

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

  return <>{isSmallWidth && !isMobile ? fallbackSmallWidth : isMobile || isSmallWidth ? fallback : children}</>
}
