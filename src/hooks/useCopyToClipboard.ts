import { useState } from 'react'

const useCopyToClipboard = () => {
  const [isCopy, setIsCopy] = useState(false)

  const copy = async (text: string) => {
    setIsCopy(false)
    try {
      await navigator.clipboard.writeText(text)
      setIsCopy(true)
    } catch (error) {
      setIsCopy(false)
    }
  }

  return { copy, isCopy, setIsCopy }
}

export { useCopyToClipboard }
