import React from 'react'

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' && (window.document?.createElement || window.navigator?.product === 'ReactNative')
    ? React.useLayoutEffect
    : React.useEffect

export function useMutableCallback<T>(fn: T) {
  const ref = React.useRef<T>(fn)

  useIsomorphicLayoutEffect(() => void (ref.current = fn), [fn])

  return ref
}

export function isValidUrl(urlString: string) {
  try {
    return Boolean(new URL(urlString))
  } catch (e) {
    return false
  }
}
