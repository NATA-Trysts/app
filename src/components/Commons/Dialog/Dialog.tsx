import * as RadixDialog from '@radix-ui/react-dialog'
import { DialogProps as RadixDialogProps } from '@radix-ui/react-dialog'
import {
  createContext,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import styled, { keyframes } from 'styled-components'

import { ReactComponent as CrossIcon } from '@/assets/icons/cross.svg'

type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent
}>
type FocusOutsideEvent = CustomEvent<{
  originalEvent: FocusEvent
}>

export type DialogProps = Omit<RadixDialogProps, 'open'> & {
  container?: HTMLElement
  onDialogClose?: (data: any) => void
  onOpenAutoFocus?: (e: Event) => void
  onCloseAutoFocus?: (e: Event) => void
  onEscapeKeyDown?: (e: KeyboardEvent) => void
  onPointerDownOutside?: (e: PointerDownOutsideEvent) => void
  onInteractOutside?: (e: PointerDownOutsideEvent | FocusOutsideEvent) => void
}

export type DialogRef = {
  open?: (content?: ReactNode) => void
}

export type DialogContext = {
  close: (data?: any) => void
  children?: ReactNode
}

const DialogContext = createContext<DialogContext | undefined>(undefined)

export const DialogProvider = (props: DialogContext) => {
  const { children, ...context } = props

  const value = useMemo(() => context, Object.values(context)) as DialogContext

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
}

export const useDialogContext = () => {
  return useContext(DialogContext)
}

export const Dialog = forwardRef<DialogRef, DialogProps>(
  (
    {
      container,
      onDialogClose,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onInteractOutside,
      defaultOpen,
      children,
      ...props
    }: DialogProps,
    ref,
  ) => {
    const [open, setOpen] = useState(defaultOpen)
    const [content, setContent] = useState<ReactNode>(children)
    const closeReturn = useRef<any>(undefined)

    useImperativeHandle(ref, () => ({
      open(contents) {
        setOpen(true)

        if (contents) setContent(contents)
      },
    }))

    useEffect(() => {
      if (!open) onDialogClose?.(closeReturn)
    }, [open, onDialogClose])

    const handleOnChange = useCallback((open: boolean) => {
      setOpen(open)
    }, [])

    const close = (data: any) => {
      closeReturn.current = data
      setOpen(false)
    }

    return (
      <RadixDialog.Root open={open} {...props} onOpenChange={handleOnChange}>
        <DialogProvider close={close}>
          <RadixDialog.Portal container={container}>
            <DialogOverlay />
            <DialogContent
              onCloseAutoFocus={onCloseAutoFocus}
              onEscapeKeyDown={onEscapeKeyDown}
              onInteractOutside={onInteractOutside}
              onOpenAutoFocus={onOpenAutoFocus}
              onPointerDownOutside={onPointerDownOutside}
            >
              <DialogContentBody>{content}</DialogContentBody>
              <RadixDialog.Close asChild>
                <CloseButton className="Button green">
                  <CrossIcon />
                </CloseButton>
              </RadixDialog.Close>
            </DialogContent>
          </RadixDialog.Portal>
        </DialogProvider>
      </RadixDialog.Root>
    )
  },
)

export const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const DialogOverlay = styled(RadixDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 9999;
`

export const DialogContent = styled(RadixDialog.Content)`
  background-color: hsla(225, 10%, 8%, 1);
  border-radius: 20px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  min-width: 450px;
  max-width: 90vw;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`

export const DialogContentBody = styled.div``

export const DialogTitle = styled(RadixDialog.Title)`
  margin: 0;
  font-weight: 500;
  color: var(--mauve12);
  font-size: 17px;
`

export const DialogDescription = styled(RadixDialog.Description)`
  margin: 10px 0 20px;
  color: var(--mauve11);
  font-size: 15px;
  line-height: 1.5;
`

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  background: hsla(225, 5%, 29%, 1);
  border-radius: 11.2px;
  border-width: 0;

  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: hsla(225, 5%, 39%, 1);
  }
`
