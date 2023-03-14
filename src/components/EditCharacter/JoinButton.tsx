import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Text } from '@/components/Commons'

const ButtonContainer = styled(motion.button)`
  position: absolute;
  right: 100px;
  top: 687px;

  width: 300px;
  height: 42px;
  background: linear-gradient(85.46deg, #a67bc2 0%, #c771e1 50.52%, #e9a8fa 100%);
  border-radius: 12px;
  border: none;
  box-shadow: none;
  transition: background, box-shadow 0.2s ease;
  cursor: pointer;
  pointer-events: auto;

  :hover {
    box-shadow: 0px 28px 72px rgba(234, 42, 210, 0.44), 0px 15.7926px 28.3481px rgba(234, 42, 210, 0.267259),
      0px 3.34074px 7.25185px rgba(234, 42, 210, 0.172741);
    background: linear-gradient(85.46deg, #b481d5 0%, #ce67ed 50.52%, #e88fff 100%);
  }
`

type JoinButtonProps = {
  isEdit: boolean
  onClick: () => void
}

export const JoinButton = ({ isEdit = false, ...otherProps }: JoinButtonProps) => {
  return (
    <ButtonContainer
      animate={{
        x: isEdit ? 0 : 500,
      }}
      {...otherProps}
    >
      <Text size="medium" weight="normal">
        Hope into space
      </Text>
    </ButtonContainer>
  )
}
