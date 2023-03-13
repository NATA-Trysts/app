import { useCallback, useMemo, useRef } from 'react'

import ItemImageWebp from '@/assets/marketplace-item.webp'
import PreviewItemImageWebp from '@/assets/marketplace-preview-item.webp'
import { GradientButton } from '@/components/Button'
import { Text } from '@/components/Commons'
import { Dialog, DialogRef } from '@/components/Commons/Dialog'
import { Header } from '@/components/Header'
import { SubCategoryToggle } from '@/components/SubcategoryToggle'

import {
  BuyButton,
  Content,
  ContentBody,
  ContentHeader,
  EyeIcon,
  ItemCard,
  ItemContainer,
  ItemDescription,
  ItemImage,
  ItemImageContainer,
  ItemImageMark,
  ItemImageOverlay,
  ItemPrice,
  MarketChip,
  MarketDialogDescription,
  MarketDialogText,
  MarketDialogTitle,
  MarketPlacePage,
  MarketPlaceText,
  PreviewItemCard,
  PreviewItemColumn,
  PreviewItemContainer,
  PreviewItemDescription,
  PreviewItemImage,
  PreviewItemInfo,
  PreviewItemText,
  PreviewItemTitle,
  ToogleContainer,
} from './MarketPlaceItem'

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
              <BuyButton>Buy</BuyButton>
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

export default MarketPlace
