import styled from 'styled-components'

import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { Text } from '@/components/Commons'
import { useEditCharacterStore } from '@/stores'

const Overlay = styled.div`
  width: calc(100% + 16px * 2);
  background: rgba(0, 0, 0, 0.5);
  height: calc(100% + 16px * 2);
  position: absolute;
  top: -16px;
  left: -16px;
  z-index: 4;
`

const PlanButton = styled.button`
  width: 172px;
  height: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(92.2deg, #2e74d4 1.17%, #7b88d6 99.63%);
  border-radius: 6px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 8px;
  }
`

type PlanOverlayProps = {
  isShown: boolean
}

export const PlanOverlay = ({ isShown }: PlanOverlayProps) => {
  const [setOpenPricingModal] = useEditCharacterStore((state) => [state.setOpenPricingModal])

  if (!isShown) return null

  return (
    <Overlay>
      <PlanButton onClick={() => setOpenPricingModal(true)}>
        <StarIcon />
        <Text size="small" weight="normal">
          Try with Startup plan
        </Text>
      </PlanButton>
    </Overlay>
  )
}
