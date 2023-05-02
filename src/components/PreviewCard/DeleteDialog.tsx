import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled from 'styled-components'

import { useAxiosPrivate } from '@/hooks'
import { useDashboardStore, useSpacePreviewStore } from '@/stores'

const Content = styled(AlertDialog.Content)`
  background-color: #212225;
  border-radius: 12px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;

  user-select: none;

  :focus {
    outline: none;
  }
`

const Overlay = styled(AlertDialog.Overlay)`
  background-color: hsla(206, 22%, 7%, 0.7);
  position: fixed;
  inset: 0;
`

const Title = styled(AlertDialog.Title)`
  margin-bottom: 12px;
  color: var(--mauve12);
  font-size: 24px;
  font-weight: 600;
`

const Description = styled(AlertDialog.Description)`
  margin-bottom: 20px;
  color: rgb(124, 123, 133);
  font-size: 15px;
  line-height: 1.5;
`

const Cancel = styled(AlertDialog.Cancel)`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 1;
  font-weight: 600;
  height: 36px;
  background-color: hsl(289, 4.7%, 93.3%);
  color: hsl(252, 4%, 44.8%);

  :hover {
    background-color: hsl(283, 4.4%, 91.3%);
  }
`

const Action = styled(AlertDialog.Action)`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 1;
  font-weight: 600;
  height: 36px;
  background-color: hsl(360, 97.9%, 94.8%);
  color: hsl(358, 65%, 48.7%);

  :hover {
    background-color: hsl(360, 90.2%, 91.9%);
  }
`

export const DeleteDialog = () => {
  const [idToDelete, isOpenDeleteDialog, setIsOpenDeleteDialog] = useSpacePreviewStore((state) => [
    state.idToDelete,
    state.isOpenDeleteDialog,
    state.setIsOpenDeleteDialog,
  ])
  const [deleteSpace] = useDashboardStore((state) => [state.deleteSpace])

  const axiosPrivate = useAxiosPrivate()

  const handleDelete = () => {
    axiosPrivate.delete(`/spaces/${idToDelete}`).then(() => {
      deleteSpace(idToDelete)
      setIsOpenDeleteDialog(false)
    })
  }

  return (
    <AlertDialog.Root
      open={isOpenDeleteDialog}
      onOpenChange={(open: boolean) => {
        setIsOpenDeleteDialog(open)
      }}
    >
      <AlertDialog.Portal>
        <Overlay
          onClick={() => {
            setIsOpenDeleteDialog(false)
          }}
        />
        <Content>
          <Title>Are you absolutely sure?</Title>
          <Description>
            This action cannot be undone. This will permanently delete your virtual space and remove all members.
          </Description>
          <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
            <Cancel
              onClick={() => {
                setIsOpenDeleteDialog(false)
              }}
            >
              Cancel
            </Cancel>
            <Action onClick={handleDelete}>Yeah, I am sure</Action>
          </div>
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
