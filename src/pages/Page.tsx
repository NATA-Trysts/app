import { ReactNode, useEffect } from 'react'

export type PageProps = {
  title?: string
  children: ReactNode
}

export const Page = ({ title = 'Summer Open Call', children }: PageProps) => {
  const titlePrefix = 'Trysts | '

  useEffect(() => {
    document.title = `${titlePrefix}${title}`
  }, [title])

  return <>{children}</>
}
