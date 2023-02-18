import { ReactNode } from 'react'

type MobileDetectProps = {
  children: ReactNode
  fallback: ReactNode
  isMobile: boolean
  isSmallWidth: boolean
  setIsMobile(isMobile: boolean): void
  setIsSmallWidth(isSmallWidth: boolean): void
}

export { MobileDetectProps }
