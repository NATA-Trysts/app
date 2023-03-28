import { useRef } from 'react'

export const useTitle = () => {
  const defaultTitle = useRef(document.title)

  const setTitle = (title: string) => {
    document.title = title
  }

  return { defaultTitle: defaultTitle.current, setTitle }
}
