import { useCallback, useEffect } from 'react'

import { useInteractStore } from '@/stores/interact'

export const useInteract = () => {
  const [interact, setInteract] = useInteractStore((state) => [state.interact, state.setInteract])

  const clearInteract = () => {
    setInteract(undefined)
  }

  const onTriggerAction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === interact?.key) {
        interact?.action()
      }
    },
    [interact],
  )

  useEffect(() => {
    console.log(interact)

    if (interact) {
      window.addEventListener('keypress', onTriggerAction)
    }

    return () => {
      window.removeEventListener('keypress', onTriggerAction)
    }
  }, [interact])

  return { setInteract, clearInteract, interact }
}
