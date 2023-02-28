export type CreateFormProps = {
  onValidate?: (valid: boolean) => void
  doValidate?: (value: any) => boolean
  name: string
  value?: any
}
