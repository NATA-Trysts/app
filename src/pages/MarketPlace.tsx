import { useCallback, useMemo, useRef } from 'react'
import styled from 'styled-components'

import { ReactComponent as EyeSvg } from '@/assets/icons/eyes.svg'
import ItemImageWebp from '@/assets/marketplace-item.webp'
import PreviewItemImageWebp from '@/assets/marketplace-preview-item.webp'
import { GradientButton } from '@/components/Button'
import { Text } from '@/components/Commons'
import { Dialog, DialogDescription, DialogRef, DialogTitle } from '@/components/Commons/Dialog'
import { Header } from '@/components/Header'
import { SubCategoryToggle } from '@/components/SubcategoryToggle'

type PreviewItem = {
  title: string
  description: string
}

const previewItems: PreviewItem[] = [
  { title: 'Duma Chair', description: 'The perfect blend of comfort and ' },
  {
    title: 'Duma Chair',
    description:
      'Elevate your dining experience with our elegant and sturdy wooden dining chairs, designed to complement any decor',
  },
  { title: 'Duma Chair', description: 'Make a statement with our bold and vibrant accent chairs' },
  {
    title: 'Duma Chair',
    description:
      'The perfect blend of comfort and style, our modern lounge chair will be your go-to spot for relaxation',
  },
  {
    title: 'Duma Chair',
    description:
      'The perfect blend of comfort and style, our modern lounge chair will be your go-to spot for relaxation',
  },
  {
    title: 'Duma Chair',
    description:
      'Elevate your dining experience with our elegant and sturdy wooden dining chairs, designed to complement any decor',
  },
  {
    title: 'Duma Chair',
    description:
      'Make a statement with our bold and vibrant accent chairs, available in a range of colors and patterns to suit your personality.',
  },
  {
    title: 'Duma Chair',
    description:
      'The perfect blend of comfort and style, our modern lounge chair will be your go-to spot for relaxation',
  },
]

function convertItemsToMansonryColumn(items: any[], columnLength: number): PreviewItem[][] {
  const initiateColumns: PreviewItem[][] = [...Array<PreviewItem[]>(columnLength)].map(() => [])

  return items.reduce<PreviewItem[][]>((columns, current, index) => {
    const remainder = (index + 1) % columnLength
    const columnIndex = remainder === 0 ? columnLength - 1 : remainder - 1

    columns[columnIndex].push(current)

    return columns
  }, initiateColumns)
}

const MarketPlace = () => {
  const dialogRef = useRef<DialogRef>(null)

  const handleItemPreview = useCallback(() => {
    const columnElements = convertItemsToMansonryColumn(previewItems, 4).map((col, colIndex) => {
      return (
        <PreviewItemColumn key={`preview-col-${colIndex}`}>
          {col.map((item, index) => {
            return (
              <PreviewItemCard key={`preview-col-${colIndex}-${index}`}>
                <PreviewItemImage src={PreviewItemImageWebp} />
                <PreviewItemInfo>
                  <PreviewItemTitle>
                    <PreviewItemText size="medium" weight="normal">
                      {item.title}
                    </PreviewItemText>
                  </PreviewItemTitle>
                  <PreviewItemDescription>
                    <PreviewItemText size="small" weight="lighter">
                      {item.description}
                    </PreviewItemText>
                  </PreviewItemDescription>
                </PreviewItemInfo>
              </PreviewItemCard>
            )
          })}
        </PreviewItemColumn>
      )
    })

    dialogRef.current?.open(
      <>
        <MarketDialogTitle>
          <MarketDialogText>Nha Trang inspiration</MarketDialogText>
          <MarketChip>Popular</MarketChip>
        </MarketDialogTitle>
        <MarketDialogDescription>
          <MarketDialogText>$100</MarketDialogText>
          <GradientButton>Buy</GradientButton>
        </MarketDialogDescription>
        <PreviewItemContainer>{columnElements}</PreviewItemContainer>
      </>,
    )
  }, [])

  const items = useMemo(() => {
    return [...Array(50).keys()].map((_, index) => {
      return (
        <ItemCard key={`item-${index}`}>
          <ItemImageContainer>
            <ItemImage src={ItemImageWebp} />
            <ItemImageOverlay>
              <BuyButton onClick={() => console.log('button')}>Buy</BuyButton>
              <ItemImageMark onClick={handleItemPreview}>
                <EyeIcon />
              </ItemImageMark>
            </ItemImageOverlay>

            <ItemDescription>
              <MarketPlaceText size="medium" weight="normal">
                Nha Trang inspiration
              </MarketPlaceText>
              <ItemPrice>
                <MarketPlaceText size="medium" weight="normal">
                  $20
                </MarketPlaceText>
              </ItemPrice>
            </ItemDescription>
          </ItemImageContainer>
        </ItemCard>
      )
    })
  }, [handleItemPreview])

  return (
    <MarketPlacePage>
      <Header></Header>
      <Content>
        <ContentHeader>
          <Text size="x-large" weight="normal">
            Summer is coming 🌊 Explore awesome furnitures, bring to your space
          </Text>
        </ContentHeader>
        <ContentBody>
          <ToogleContainer>
            <SubCategoryToggle
              options={[
                { value: 'all', display: 'All' },
                { value: 'office-1', display: 'Office' },
                { value: 'office-2', display: 'Office' },
              ]}
              selected={'all'}
            ></SubCategoryToggle>
          </ToogleContainer>
          <ItemContainer>{items}</ItemContainer>
        </ContentBody>
      </Content>

      <Dialog ref={dialogRef}></Dialog>
    </MarketPlacePage>
  )
}

export const MarketPlacePage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: hsla(260, 77%, 7%, 1);
`

export const Content = styled.main`
  box-sizing: border-box;
  width: fit-content;
  padding: 28px 0 0;
  margin: 0 auto;

  position: relative;
  top: 76px;
`

export const ContentHeader = styled.div`
  width: 919px;
  height: 108px;
  margin: 0 auto;
  text-align: center;
`

export const ContentBody = styled.section``

export const ToogleContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 24px 0;
`

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-auto-rows: 320px;
  grid-gap: 20px;

  height: calc(100vh - 297px);
  overflow-x: hidden;
  overflow-y: auto;
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

export const ItemImageMark = styled.div`
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

export const EyeIcon = styled(EyeSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

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

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
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
  background: rgba(200, 200, 200, 0.2);
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
export const MarketChip = styled.span`
  height: 20px;
  padding: 3px 8px;
  border-radius: 50px;
  border: 1px solid hsla(68, 41%, 79%, 1);
  color: hsla(68, 41%, 79%, 1);

  display: inline-block;
  overflow: hidden;

  font-weight: 500;
  font-size: 10px;
  line-height: 14px;

  vertical-align: middle;
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

export default MarketPlace
