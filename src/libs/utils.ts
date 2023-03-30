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

export function isOnlyWhitespace(str: string) {
  return str.trim().length !== 0
}

export const approximatelyEqual = (a: number, b: number, epsilon = 0.001) => Math.abs(a - b) < epsilon

export const convertCustomFormatedResponseToObject = (str: string) =>
  JSON.parse(`{${str.match(/{([^}]+)}/)?.[1]?.replace(/'/g, '"')}}`)
