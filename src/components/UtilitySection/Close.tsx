import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled(motion.button)`
  position: absolute;
  padding: 2px;
  border-radius: 8px;
  gap: 8px;
  right: 8px;
  top: 8px;
  background: var(--color-4);
  cursor: pointer;
  display: flex;
  border: none;
  outline: none;

  svg {
    path {
      stroke: var(--color-3);
    }
  }

  :hover {
    svg {
      path {
        stroke: #fff;
      }
    }
    background: var(--color-3);
  }
`

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
}
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 180, transition: { duration: 0.3 } },
}

type CloseProps = {
  onClick: () => void
}

export const Close: React.FC<CloseProps> = ({ onClick }) => {
  return (
    <Container initial="rest" variants={button} whileHover="hover" whileTap="pressed" onClick={onClick}>
      <motion.svg height="16" variants={arrow} width="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.6665 4.66675L11.3332 11.3334"
          stroke="#B792BE"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          d="M4.6665 11.3334L11.3332 4.66675"
          stroke="#B792BE"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </motion.svg>
    </Container>
  )
}
