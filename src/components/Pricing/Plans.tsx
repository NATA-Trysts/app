import styled from 'styled-components'

import { Plan } from './Plan'

const PlansContainer = styled.div`
  position: relative;
  padding: 40px 0;

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

export const Plans = () => {
  return (
    <PlansContainer>
      <PlansBackgroundBlur />
      <Plan price={'free'} type="individual" />
      <Plan discount={25} isPopular={true} price={'150'} type="startup" />
      <Plan discount={25} price={'150'} type="enterprise" />
    </PlansContainer>
  )
}
