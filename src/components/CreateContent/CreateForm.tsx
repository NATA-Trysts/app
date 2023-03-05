import { ReactNode } from 'react'

import { CreateFormContainer } from './CreateItem'

export type CreateFormProps = {
  children?: ReactNode
  className?: string
}

export const CreateForm = ({ children }: CreateFormProps) => {
  return <CreateFormContainer>{children}</CreateFormContainer>
}
