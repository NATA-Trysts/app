import { useRef, useState } from 'react'

export const useDoubleClickAndHold = (
  callbackSingleClick: () => void,
  callbackDoubleClick: () => void,
  delay: number,
) => {
  const [isHolding, setIsHolding] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const countRef = useRef(0)

  const handleClick = () => {
    callbackSingleClick()
    countRef.current++
    if (countRef.current === 2) {
      clearTimeout(timeoutId!)
      setIsHolding(false)
      countRef.current = 0
      callbackDoubleClick()
    } else if (!isHolding) {
      setIsHolding(true)
      setTimeoutId(
        setTimeout(() => {
          setIsHolding(false)
          countRef.current = 0
        }, delay),
      )
    }
  }

  return handleClick
}
