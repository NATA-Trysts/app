import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import styled from 'styled-components'

import { ReactComponent as EyeSvg } from '@/assets/icons/eyes.svg'
import { GradientButton } from '@/components/Button'
import { Text } from '@/components/Commons'

export const MarketPlacePage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: hsla(260, 77%, 7%, 1);
`

export const Content = styled.main`
  box-sizing: border-box;
  height: calc(100vh - 76px);
  padding: 0 0 0;
  margin: 0 auto;

  position: relative;
  top: 76px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ContentHeader = styled.div`
  width: 919px;
  height: 108px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 24px;
`

export const ContentBody = styled.section`
  width: fit-content;
  margin: 0 auto;
`

export const ToogleContainer = styled.div`
  width: fit-content;
  background: hsla(260, 77%, 7%, 1);
  margin: 0 auto;
  padding: 1px 0 24px;
  position: sticky;
  top: 0;
  z-index: 3;
`

export const ItemContainer = styled.div`
  min-height: 684px;
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-auto-rows: 320px;
  grid-gap: 20px;
`

export const ItemCard = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: purple;
  overflow: hidden;
`

export const ItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ItemImageOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`

export const ItemChipGroup = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  left: 12px;
  gap: 4px;

  ${ItemImageOverlay}:hover & {
    opacity: 0;
  }
`

export const ItemImageMask = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  position: absolute;

  opacity: 0;
  top: 0;
  left: 0;

  ${ItemImageOverlay}:hover & {
    opacity: 1;
  }

  cursor: pointer;
`

export const PreviewIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PreviewText = styled(Text)`
  color: hsla(0, 3%, 87%, 1);
`

export const EyeIcon = styled(EyeSvg)``

export const BuyButton = styled(GradientButton)`
  position: absolute;
  bottom: 74px;
  right: 12px;
  z-index: 2;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  transition: all 0s;
  opacity: 0;

  ${ItemImageOverlay}:hover &:not(:disabled) {
    opacity: 1;
  }
`

export const ItemImageContainer = styled.div`
  width: 400px;
  height: 320px;
  position: relative;
`

export const MarketPlaceText = styled(Text)`
  line-height: 27px;
`

export const ItemDescription = styled.div`
  width: 376px;
  background: url('/assets/noise.png'), rgba(200, 200, 200, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px 12px 11px 20px;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 12px;
  left: 12px;
`

export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 35px;
  border-radius: 6px;
  background-color: hsla(225, 10%, 8%, 1);
`

export const MarketDialogText = styled.span`
  font-weight: 600;
  font-size: 32px;
  line-height: 43px;
`
export const MarketDialogTitle = styled(DialogTitle)`
  display: flex;
  align-items: center;
  gap: 12px;
`
export const MarketDialogDescription = styled(DialogDescription)`
  margin-top: 20px;
  margin-bottom: 38px;
  display: flex;
  align-items: center;
  gap: 16px;
`

export const PreviewItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-template-rows: auto;
  grid-gap: 10px;
  height: calc(85vh - 194px);
  overflow-x: hidden;
  overflow-y: auto;
`

export const PreviewItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PreviewItemCard = styled.article`
  background-color: hsla(255, 67%, 1%, 1);
  border-radius: 20px;

  &:nth-child(3n + 1) {
    order: 1;
  }

  &:nth-child(3n + 2) {
    order: 2;
  }

  &:nth-child(3n) {
    order: 3;
  }
`
export const PreviewItemImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
`

export const PreviewItemInfo = styled.div`
  display: block;
  width: 240px;
  padding: 12px 16px 20px;
`
export const PreviewItemText = styled(Text)`
  letter-spacing: 0;
`
export const PreviewItemDescription = styled.div`
  ${PreviewItemText} {
    line-height: 16.2px;
  }
`

export const PreviewItemTitle = styled.div`
  ${PreviewItemText} {
    line-height: 18.9px;
  }
`
