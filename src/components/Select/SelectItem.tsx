import { Item, ItemText } from '@radix-ui/react-select'
import styled from 'styled-components'

type SelectItemProps = {
  children: React.ReactNode
  value: string | number
}

const CustomItem = styled(Item)`
  font-size: 12px;
  font-weight: 500;
  position: relative;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border 0.2s ease;
  border-radius: 6px;

  &[data-highlighted] {
    outline: none;
    background-color: var(--violet9);
    color: var(--violet1);
    border: 1px solid #f7f6f6;
  }
`

export const SelectItem = ({ children, value }: SelectItemProps) => {
  return (
    <CustomItem value={value.toString()}>
      <ItemText>{children}</ItemText>
    </CustomItem>
  )
}
