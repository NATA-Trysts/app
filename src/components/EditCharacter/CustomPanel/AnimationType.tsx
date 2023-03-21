import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg'
import { Text } from '@/components/Commons'
import { SelectItem } from '@/components/Select'
import { AnimationType as IAnimation, useEditCharacterStore } from '@/stores'

const AnimationTypeWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 160px;
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
  }
`

const CustomSelectItem = styled(SelectItem)`
  font-size: 12px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 28px;
  padding: 8px 12px;
  margin: 4px 0;
  position: relative;
  color: rgba(22, 23, 24, 0.2);
  user-select: none;
  border: 1px solid transparent;
  transition: border 0.2s ease;
  cursor: pointer;

  :hover {
    border: 1px solid #f7f6f6;
  }
`

const ScrollUpButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #37393e;
  height: 25px;
  cursor: pointer;
`

const ScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: #37393e;
  cursor: pointer;

  svg {
    transform: rotate(180deg);
  }
`

export const AnimationType = () => {
  const [animationTypeList, selectedAnimationType, setSelectedAnimationType] = useEditCharacterStore((state) => [
    state.animationTypeList,
    state.selectedAnimationType,
    state.setSelectedAnimationType,
  ])

  const handleSelectAnimationType = (id: string) => {
    const animationType = animationTypeList.find((animationType) => animationType.id === Number(id))

    if (animationType) {
      setSelectedAnimationType(animationType)
    }
  }

  return (
    <AnimationTypeWrapper>
      <Name size="small" weight="lighter">
        Animation Type
      </Name>
      <Select.Root onValueChange={handleSelectAnimationType}>
        <Trigger>
          <Select.Value placeholder={selectedAnimationType.name} />
        </Trigger>
        <Select.Portal>
          <Content>
            <ScrollUpButton>
              <ArrowUp />
            </ScrollUpButton>
            <Select.Viewport>
              <Select.Group>
                {animationTypeList.map((animationType: IAnimation) => (
                  <CustomSelectItem key={animationType.id} value={animationType.id}>
                    {animationType.name}
                  </CustomSelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <ScrollDownButton>
              <ArrowUp />
            </ScrollDownButton>
          </Content>
        </Select.Portal>
      </Select.Root>
    </AnimationTypeWrapper>
  )
}
