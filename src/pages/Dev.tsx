import { useState } from 'react'
import styled from 'styled-components'

import { Button, GradientButton } from '@/components/button'
import ShopIcon from '@/components/icon/shop-icon/shop-icon.component'

const DevContainer = styled.div`
  height: 100vh;
  background-color: #212225;
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Dev = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <DevContainer>
      <DevContainer>
        <Button disabled handleClick={handleClick}>
          <ShopIcon color="#696969" />
          Shop
        </Button>
        <GradientButton disabled handleClick={handleClick}>
          Create Space
        </GradientButton>
      </DevContainer>
      <DevContainer>
        <Button handleClick={handleClick}>
          <ShopIcon color="#696969" />
          Shop
        </Button>
        <GradientButton handleClick={handleClick}>Create Space</GradientButton>
      </DevContainer>
      <div
        style={{
          color: '#FFFFFF',
          fontWeight: 600,
          height: '20px',
          width: '20px',
          textAlign: 'center',
        }}
      >
        <span>{count}</span>
      </div>
    </DevContainer>
  )
}
