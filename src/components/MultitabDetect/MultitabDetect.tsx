import { ReactNode, useEffect, useState } from 'react'

type MultitabDetectProps = {
  children: ReactNode
  fallback: ReactNode
}

export const MultitabDetect = ({ children, fallback }: MultitabDetectProps) => {
  const [isOldTab, setIsOldTab] = useState(false)

  useEffect(() => {
    const date = Date.now().toString()

    localStorage.setItem('tab-id', date)
    const onStorage = (event: StorageEvent) => date === event.oldValue && setIsOldTab(true)

    window.addEventListener('storage', onStorage, false)
  }, [])

  return <>{isOldTab ? fallback : children}</>
}
