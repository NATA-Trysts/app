import { Item, ItemText } from '@radix-ui/react-select'

type SelectItemProps = {
  children: React.ReactNode
  value: string | number
}

export const SelectItem = ({ children, value }: SelectItemProps) => {
  return (
    <Item value={value.toString()}>
      <ItemText>{children}</ItemText>
    </Item>
  )
}
