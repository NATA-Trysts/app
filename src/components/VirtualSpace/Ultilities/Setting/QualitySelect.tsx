import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { SelectItem } from '@/components/Select'
import { useVirtualSpaceStore } from '@/stores'

const QualitySelectWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 128px;
  align-items: center;
  margin: 4px 0;
`

const Name = styled(Text)`
  color: #727272;
`

const Trigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 28px;
  padding-left: 8px;
  background-color: #37393e;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: border 0.2s ease;
  cursor: pointer;
  outline-width: 0;

  span {
    font-size: 12px;
    font-weight: 500;
    color: #f7f6f6;
  }

  :hover {
    border: 1px solid #f7f6f6;
  }
`

const Content = styled(Select.Content)`
  overflow: hidden;
  border-radius: 6px;
  background-color: #37393e;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  z-index: 4;

  span {
    color: #f7f6f6;
    height: 28px;
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
`

const listQuality = [
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export const QualitySelect = () => {
  const [quality, setQuality] = useVirtualSpaceStore((state) => [state.quality, state.setQuality])

  return (
    <QualitySelectWrapper>
      <Name size="small" weight="lighter">
        Quality
      </Name>
      <Select.Root value={quality} onValueChange={setQuality}>
        <Trigger>
          <Select.Value placeholder={quality} />
        </Trigger>
        <Select.Portal>
          <Content>
            <Select.Viewport>
              <Select.Group>
                {listQuality.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Content>
        </Select.Portal>
      </Select.Root>
    </QualitySelectWrapper>
  )
}
