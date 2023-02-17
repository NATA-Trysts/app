import { useState } from 'react'
import styled from 'styled-components'

import { GradientButton } from '@/components/Button'

const ButtonContainer = styled.div`
  height: 100vh;
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Button = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div style={{ backgroundColor: '#212225' }}>
      <ButtonContainer>
        <GradientButton disabled onClick={handleClick}>
          Create Space
        </GradientButton>
        <GradientButton onClick={handleClick}>Create Space</GradientButton>
      </ButtonContainer>
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
    </div>
  )
}
