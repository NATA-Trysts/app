import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { createContainer, removeContainer } from './container'
import { MobileOrSmallVersion } from './MobileOrSmallVersion'

type MobileDetectProps = {
  children: ReactNode
}

export const MobileDetect = ({ children }: MobileDetectProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallWidth, setIsSmallWidth] = useState(false)
  const [message, setMessage] = useState('We are not in mobile yet!')
  const [container, setContainer] = useState<HTMLElement | null>(null)

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
  })

  useEffect(() => {
    if (isSmallWidth && !isMobile) {
      setMessage('Make screen wider to continue experience Trysts')
      const containerDiv = createContainer()

      setContainer(containerDiv)
    } else if (isMobile || isSmallWidth) {
      setMessage('We are not in mobile yet!')
      const containerDiv = createContainer()

      setContainer(containerDiv)
    } else if (!isMobile && !isSmallWidth) removeContainer()
    else {
      setMessage('We are not in mobile yet!')
      const containerDiv = createContainer()

      setContainer(containerDiv)
    }
  }, [container, isMobile, isSmallWidth])

  return (
    <>
      {(isMobile || isSmallWidth) && container ? (
        createPortal(<MobileOrSmallVersion message={message} />, container)
      ) : (
        <></>
      )}
      {children}
    </>
  )
}
