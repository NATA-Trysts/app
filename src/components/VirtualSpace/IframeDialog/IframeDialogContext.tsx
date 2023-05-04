import { createContext, ReactNode, useCallback, useContext, useRef, useState } from 'react'

import { IframeDiaglog } from './IframeDialogItem'

export type OpenIframeOptions = {
  onClose: () => void
}

export type IframOverlayDialogType = {
  open: (children: ReactNode, options?: OpenIframeOptions) => void
  close: () => void
}

const IframeDialogContext = createContext<IframOverlayDialogType>({
  open: () => {},
  close: () => {},
})

export type IframeDialogProps = {
  defaultOpen?: boolean
  children: ReactNode
}

export const IframeDialogProvider = ({ children }: IframeDialogProps) => {
  const [isOpen, setOpen] = useState(false)
  const contentRef = useRef<ReactNode>()
  const onCloseRef = useRef<() => void>()

  console.log('IFRAME', isOpen, contentRef)

  const open = useCallback((content: ReactNode, options?: OpenIframeOptions) => {
    console.log('iframe open')

    setOpen(true)
    contentRef.current = content
    onCloseRef.current = options?.onClose
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    contentRef.current = null
  }, [])

  return (
    <IframeDialogContext.Provider value={{ open, close }}>
      {children}
      <IframeDiaglog
        open={isOpen}
        onDialogClose={() => onCloseRef.current?.()}
        onOpenChange={(open) => {
          setOpen(open)
        }}
      >
        {contentRef.current}
      </IframeDiaglog>
    </IframeDialogContext.Provider>
  )
}

export const useIframeDialog = () => {
  const { open, close } = useContext(IframeDialogContext)

  return [open, close] as const
}
