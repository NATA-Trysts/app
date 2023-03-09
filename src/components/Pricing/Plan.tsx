import styled from 'styled-components'

import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg'
import { Text } from '@/components/Commons'
import {
  PLAN_BORDER,
  PLAN_BOX_SHADOW,
  PLAN_BUTTON_COLOR,
  PLAN_ICON_FILTER,
  PLAN_NAME_BACKGROUND_TEXT,
} from '@/libs/constants'

import { SelectMAU } from './SelectMAU'

const PlanContainer = styled.div<{ type: 'individual' | 'startup' | 'enterprise' }>`
  width: 268px;
  height: 440px;
  padding: 16px;
  margin: 0 12px;
  background: rgba(12, 2, 32, 0.7);
  border-width: 1px;
  border-style: solid;
  border-color: ${({ type }) => PLAN_BORDER[type]};
  box-shadow: none;
  border-radius: 20px;
  z-index: 2;
  position: relative;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${({ type }) => PLAN_BOX_SHADOW[type]};
  }
`

const TopTextWrapper = styled.div`
  display: flex;
  align-items: center;
`

const PlanName = styled(Text)<{ type: 'individual' | 'startup' | 'enterprise' }>`
  display: block;
  text-transform: capitalize;
  background: ${({ type }) => PLAN_NAME_BACKGROUND_TEXT[type]};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const PopularBadge = styled.span`
  width: 52px;
  font-size: 10px;
  font-weight: 500;
  color: #d9dfb2;
  padding: 4px 8px;
  border: 1px solid #d9dfb2;
  border-radius: 50px;
  margin-left: 12px;
`

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Price = styled(Text)`
  display: block;
  font-size: 32px;
  margin: 12px 0;
  text-transform: capitalize;
`

const Discount = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #d8d8d8;
  padding: 2px 6px;
  border-radius: 50px;
  border: 1px solid #d8d8d8;
  margin-left: 8px;
`

const Options = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-left: 8px;
  }
`

const Option = styled.div<{ type: 'individual' | 'startup' | 'enterprise' }>`
  display: flex;

  svg {
    filter: ${({ type }) => PLAN_ICON_FILTER[type]};
  }
`

const StartButton = styled.button<{ planType: 'individual' | 'startup' | 'enterprise' }>`
  display: block;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  height: 44px;
  border-radius: 8px;
  border: none;
  background: ${({ planType }) => PLAN_BUTTON_COLOR[planType]};
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`

type PlanProps = {
  type: 'individual' | 'startup' | 'enterprise'
  price: string
  discount?: number
  isPopular?: boolean
}

export const Plan = ({ isPopular = false, discount, type, price }: PlanProps) => {
  return (
    <PlanContainer type={type}>
      <TopTextWrapper>
        <PlanName size="medium" type={type} weight="lighter">
          {type}
        </PlanName>
        {isPopular && <PopularBadge>Popular</PopularBadge>}
      </TopTextWrapper>
      <PriceWrapper>
        <Price size="medium" weight="normal">
          {price !== 'free' ? `$${price}` : price}
        </Price>
        {discount && <Discount>-{discount}%</Discount>}
      </PriceWrapper>
      <Options>
        <Option type={type}>
          <CheckIcon />
          <Text size="small" weight="lighter">
            Lorem Ipsum
          </Text>
        </Option>
      </Options>
      {type !== 'individual' && <SelectMAU />}
      <StartButton planType={type}>
        <Text size="medium" weight="normal">
          Get started
        </Text>
      </StartButton>
    </PlanContainer>
  )
}
