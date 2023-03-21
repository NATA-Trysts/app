import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { usePricingStore } from '@/stores'

import { Plan } from './Plan'

const PlansContainer = styled.div<{ paddingProps: string }>`
  position: relative;
  padding: ${({ paddingProps }) => paddingProps};

  display: flex;
  justify-content: center;
  align-items: center;
`

const PlansBackgroundBlur = styled.div`
  width: 771px;
  height: 270px;
  background: #50387d;
  filter: blur(250px);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

type PlansProps = {
  haveFreePlan?: boolean
  padding?: string
}

export const Plans = ({ haveFreePlan = true, padding = '40px 0' }: PlansProps) => {
  const [mode, startupCost, enterpriseCost] = usePricingStore((state) => [
    state.mode,
    state.startupCost,
    state.enterpriseCost,
  ])
  const [discount, setDiscount] = useState({
    individual: 0,
    startup: 0,
    enterprise: 0,
  })

  useEffect(() => {
    if (mode === 'monthly') {
      setDiscount({
        individual: 0,
        startup: 0,
        enterprise: 0,
      })
    } else {
      setDiscount({
        individual: 0,
        startup: 25,
        enterprise: 25,
      })
    }
  }, [mode])

  return (
    <PlansContainer paddingProps={padding}>
      <PlansBackgroundBlur />
      {haveFreePlan && (
        <Plan
          discount={discount.individual}
          mauQuantity={0}
          options={['Lorem ipsum', 'Lorem ipsum']}
          price={0}
          type="individual"
        />
      )}
      <Plan
        discount={discount.startup}
        isPopular={true}
        mauQuantity={startupCost.mau}
        options={['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']}
        price={startupCost.total}
        type="startup"
      />
      <Plan
        discount={discount.enterprise}
        mauQuantity={enterpriseCost.mau}
        options={['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']}
        price={enterpriseCost.total}
        type="enterprise"
      />
    </PlansContainer>
  )
}
