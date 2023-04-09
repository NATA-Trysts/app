import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

import { Text } from '@/components/Commons'
import { useEditCharacterStore } from '@/stores'

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

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerContainer = styled.div`
  & {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
  }

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    margin: 4px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: ${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerContainer>
  )
}

type JoinButtonProps = {
  isEdit?: boolean
  onClick?: () => void
}

export const JoinButton = ({ isEdit = false, ...otherProps }: JoinButtonProps) => {
  const [isUpdatingAvatar] = useEditCharacterStore((state) => [state.isUpdatingAvatar])

  return (
    <ButtonContainer
      animate={{
        x: isEdit ? 0 : 500,
      }}
      {...otherProps}
    >
      {isUpdatingAvatar ? (
        <Spinner />
      ) : (
        <Text size="medium" weight="normal">
          Hope into space
        </Text>
      )}
    </ButtonContainer>
  )
}
